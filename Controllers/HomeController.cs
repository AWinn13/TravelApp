using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
// using Newtonsoft.Json;
using TravelApp.Models;
namespace TravelApp.Controllers;

[ApiController]
[Route("api/user")]
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    private MyContext _context;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;

        _context = context;
    }

    [HttpGet]
    public IEnumerable<User> Get()
    {
        IEnumerable<User> Users = _context.Users.ToList();
        return Users;

    }



    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetOneUser(int id)
    {
        
        var oneUser = await _context.Users.FindAsync(id);
        
        if (oneUser == null)
        {
            return NotFound();
        }
        // Otherwise, return the item
        return oneUser;
    }

    [HttpPost]
    public async Task<ActionResult<User>> PostUser([FromBody] User newUser)
    {
        if (ModelState.IsValid)
        {
            PasswordHasher<User> Hasher = new PasswordHasher<User>();
            newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();
            return CreatedAtAction(
                nameof(User),
                new { id = newUser.UserId },
                newUser);
        }
        else
        {
            var errors = ModelState.Values.SelectMany(v => v.Errors)
            .Select(e => e.ErrorMessage)
            .ToList();
            // Object allerrors = new Object() { "Errors":errors};
    
            Console.WriteLine("MODELSTATE -------->",ModelState);
            return BadRequest(errors);
        }
    }

    
    [HttpPost("authenticate")]
    public IActionResult Authenticate(LoginUser model)
    {
        if(ModelState.IsValid)
        {
            User? user =  _context.Users.FirstOrDefault(u => u.Email == model.UserEmail);
            PasswordHasher<LoginUser> hasher = new PasswordHasher<LoginUser>();
            var result = hasher.VerifyHashedPassword(model, user.Password, model.UserPassword);
            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });
            else if (result == 0)
                return BadRequest(new { message = "Username or password is incorrect" });
            return Ok(user);
        }
        else
        {
            var errors = ModelState.Values.SelectMany(v => v.Errors)
            .Select(e => e.ErrorMessage)
            .ToList();
            // Object allerrors = new Object() { "Errors":errors};

            // Console.WriteLine("MODELSTATE -------->",ModelState);
            return BadRequest(errors);
        }
    }
}
