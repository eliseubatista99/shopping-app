namespace ShoppingApp.Database.Models
{
    public class TokenModel
    {
        public required string Id { get; set; }

        public required string UserId { get; set; }

        public required string Token { get; set; }

        public required DateTimeOffset CreatedAt { get; set; }

        public required DateTimeOffset ExpiresAt { get; set; }

        public DateTimeOffset? RevokedAt { get; set; }
    }
}
