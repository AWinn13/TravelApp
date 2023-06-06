#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TravelApp.Models;

public class Trip
{
    public int TripId { get; set; }
    public string TripName { get; set; }
    public DateOnly StartDate { get; set; }
    public DateOnly EndDate { get; set; }
    public string Location { get; set; }
    public string Description { get; set; }
    [ForeignKey("User")]
    public int UserId { get; set; }
}