#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace TravelApp.Models;

public class User
{
    [Key]
    public int UserId { get; set; }

    [Required]
    [MinLength(2, ErrorMessage = "Name must be longer than 2 characters")]
    public string Name { get; set; }

    [Required]
    [EmailAddress(ErrorMessage = "Must provide a valid email.")]
    [UniqueEmail]
    public string Email { get; set; }

    [Required]
    [DataType(DataType.Password)]
    [RegularExpression(@"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$",
     ErrorMessage = "Password must be at least 8 characters, contain at least 1 letter, 1 special character, and a number")]
    public string Password { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    [NotMapped]
    [Compare("Password", ErrorMessage = "Passwords must match!")]
    public string PasswordConfirm { get; set; }


}
public class UniqueEmailAttribute : ValidationAttribute
{
    protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
    {
        if (value == null)
        {
            return new ValidationResult("Email is required!");
        }

        MyContext _context = (MyContext)validationContext.GetService(typeof(MyContext));

        if (_context.Users.Any(e => e.Email == value.ToString()))
        {

            return new ValidationResult("Email must be unique!");
        }
        else
        {
            return ValidationResult.Success;
        }
    }
}

