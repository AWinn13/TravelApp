#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TravelApp.Models;

public class Transportation 
{
    public int TransportationId { get; set; }
    public string TransportName { get; set; }
    public bool? Flight { get; set; }
    public bool? CarRental { get; set; }
    public bool? Train { get; set; }
    public bool? Bus { get; set; }
    public bool? Shuttle { get; set; }
    public string? ConfirmationNumber { get; set; }
    public DateOnly StartDate { get; set; }
    public TimeOnly? StartTime { get; set; }
    public DateOnly? EndDate { get; set; }
    public TimeOnly? EndTime { get; set; }
    public string LocationStart { get; set; }
    public string LocationEnd { get; set; }
    public string Description { get; set; }
    [ForeignKey("TripItem")]
    public int ItemId { get; set; }
}