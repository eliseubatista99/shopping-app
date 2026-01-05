namespace ShoppingApp.Database.Models
{
    public class UserEntry
    {
        public required string Id { get; set; }

        public string PasswordHash { get; set; }

        public required string Name { get; set; }

        public required string Surname { get; set; }

        public string? Email { get; set; }

        public string? PhoneNumber { get; set; }

        public string? PhoneNumberPrefix { get; set; }

        public byte[]? Image { get; set; }

    }
}
