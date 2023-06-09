#pragma warning disable CS8618

using Microsoft.EntityFrameworkCore;
namespace TravelApp.Models;

public class MyContext : DbContext
{
    public MyContext(DbContextOptions options) : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<Trip> Trips { get; set; }
    public DbSet<TripItem> TripItems { get; set; }
}
