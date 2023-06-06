#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TravelApp.Models;

public class Excursion 
{
    public int ExcursionId { get; set; }
    public string ExcursionName { get; set; }
    public string? ConfirmationNumber { get; set; }
    public DateOnly StartDate { get; set; }
    public TimeOnly? StartTime { get; set; }
    public DateOnly? EndDate { get; set; }
    public TimeOnly? EndTime { get; set; }
    public string Location { get; set; }
    public string NeedToBring { get; set; }
    public string Description { get; set; }
    [ForeignKey("TripItem")]
    public int TripItemId { get; set; }
}