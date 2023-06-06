#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TravelApp.Models;

public class Reservation 
{
    public int ReservationId { get; set; }
    public string ReservationName { get; set; }
    // Bools, probably check boxes to determine the type of item. 
    public bool? Dinner { get; set; }
    public bool? Hotel { get; set; }
    public bool? Other { get; set; }
    public string? ConfirmationNumber { get; set; }
    public DateOnly StartDate { get; set; }
    public TimeOnly? StartTime { get; set; }
    public DateOnly? EndDate { get; set; }
    public TimeOnly? EndTime { get; set; }
    public string Location { get; set; }
    public string Description { get; set; }
    [ForeignKey("TripItem")]
    public int TripItemId { get; set; }
}