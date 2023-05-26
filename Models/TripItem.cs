#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TravelApp.Models;

public class TripItem 
{
    public int ItemId { get; set; }

    public string ItemName { get; set; }
    // Bools, probably check boxes to determine the type of item. 
    public bool? Reservation { get; set; }
    public bool? Transportation { get; set; }
    public bool? Excursion { get; set; }
    public string Description { get; set; }
    [ForeignKey("Trip")]
    public int TripId { get; set; }
}