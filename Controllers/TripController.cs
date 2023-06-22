using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
// using Newtonsoft.Json;
using TravelApp.Models;
namespace TravelApp.Controllers;

[ApiController]
[Route("api/trip")]
public class TripController : Controller
{
    private readonly ILogger<TripController> _logger;
    // Add a private variable of type MyContext (or whatever you named your context file)
    private MyContext _context;
    // Here we can "inject" our context service into the constructor 
    // The "logger" was something that was already in our code, we're just adding around it   
    public TripController(ILogger<TripController> logger, MyContext context)
    {
        _logger = logger;
        // When our HomeController is instantiated, it will fill in _context with context
        // Remember that when context is initialized, it brings in everything we need from DbContext
        // which comes from Entity Framework Core
        _context = context;
    }

    [HttpGet("{uId}")]
    public IEnumerable<Trip> GetTripsForUser(int uId)
    {
        IEnumerable<Trip> Trips = _context.Trips.Where(u => u.UserId == uId).OrderByDescending(t => t.StartDate).ToList();
        return Trips;
    }
}