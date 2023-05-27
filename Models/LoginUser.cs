#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace TravelApp.Models;


public class LoginUser
{
    [Required(ErrorMessage = "Username or password is incorrect")]
    public string UserEmail {get;set;}

    [Required(ErrorMessage = "Username or password is incorrect")]
    public string UserPassword {get;set;}
}