using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Entities
{
    [ExcludeFromCodeCoverage]
    public class ScoreCountDto
    {
        public required decimal Score { get; set; }

        public required int Count { get; set; }
    }
}
