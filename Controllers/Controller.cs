using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.Filters;
using TravelApp.Models;
namespace TravelApp.Controllers;

[ApiController]
[Route("[controller]")]
public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    private MyContext _context;

    public HomeController(ILogger<HomeController> logger, MyContext context)
    {
        _logger = logger;

        _context = context;
    }
    
    [HttpPost]
    public async Task<ActionResult<User>> PostTodoItem([FromBody] User newUser)
    {
        if (ModelState.IsValid)
        {
            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();
            return CreatedAtAction(
                nameof(User),
                new { id = newUser.UserId },
                newUser);
        }
        else
        {
            return BadRequest(ModelState);
        }
    }

}
