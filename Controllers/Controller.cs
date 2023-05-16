using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelApp.Models;
namespace TravelApp.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{

    private MyContext _context;
    public TodoItemsController(MyContext context)
    {
        _context = context;
    }

    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<WeatherForecastController> _logger;

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    }

    // [HttpGet]
    // public IEnumerable<WeatherForecast> Get()
    // {
    //     return Enumerable.Range(1, 5).Select(index => new WeatherForecast
    //     {
    //         Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
    //         TemperatureC = Random.Shared.Next(-20, 55),
    //         Summary = Summaries[Random.Shared.Next(Summaries.Length)]
    //     })
    //     .ToArray();
    // }


    // !EXAMPLE  Create
    // [HttpPost]
    // public async Task<ActionResult<TodoItem>> PostTodoItem([FromBody] TodoItem todoItem)
    // {
    //     if (ModelState.IsValid)
    //     {
    //         _context.TodoItems.Add(todoItem);
    //         await _context.SaveChangesAsync();
    // This uses the GetTodoItem route we wrote above
    //         return CreatedAtAction(
    //             nameof(GetTodoItem),
    //             new { id = todoItem.Id },
    // todoItem);
    //     }
    //     else
    //     {
    // This is what will allow us to get error messages for our front end
    //         return BadRequest(ModelState);
    //     }
    // }
}
