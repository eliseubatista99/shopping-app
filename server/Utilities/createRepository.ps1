param(
    [Parameter(Mandatory = $true)]
    [string]$ModelName
)

$modelPath = "../ShoppingServer.Database/Models"
$basePath = "../ShoppingServer.Database/Repositories/${ModelName}s"

New-Item -ItemType Directory -Force -Path $basePath | Out-Null

# IRepository.cs
@"
using Database.PostgreSql.Repositories;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public interface I${ModelName}sRepository : IRepository<${ModelName}Model>
    {
        public Task<bool> DeleteById(string id, bool saveChanges = true);
    }
}
"@ | Set-Content "$basePath/I${ModelName}sRepository.cs"

# Repository.cs
@"
using Microsoft.EntityFrameworkCore;
using ShoppingApp.Database.Models;

namespace ShoppingServer.Database.Repositories
{
    public class ${ModelName}sRepository : BaseAppRepository<${ModelName}Model>, I${ModelName}sRepository
    {
        public ${ModelName}sRepository(AppDbContext context) : base(context)
        {
        }

        public override Task<${ModelName}Model?> GetByIdAsync(string id)
        {
            return base.GetByIdAsync(id);
        }

        public async Task<bool> DeleteById(string id, bool saveChanges = true)
        {
            return await DeleteAsync(i => i.Id == id, saveChanges);
        }
    }
}

"@ | Set-Content "$basePath/${ModelName}sRepository.cs"


# Model.cs
@"
namespace ShoppingApp.Database.Models
{
    public class ${ModelName}Model
    {
        public required string Id { get; set; }
    }
}
"@ | Set-Content "$modelPath/${ModelName}Model.cs"
