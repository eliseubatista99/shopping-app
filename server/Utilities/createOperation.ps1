param(
    [Parameter(Mandatory = $true)]
    [string]$Name,

    [Parameter(Mandatory = $true)]
    [string]$Folder
)

$basePath = "ShoppingServer.BusinessLogic/Operations/$Folder"
New-Item -ItemType Directory -Force -Path $basePath | Out-Null

# NameOperation.cs
@"
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations.$Folder
{
    public class ${Name}Operation : OperationBase<${Name}OperationInputDto, ${Name}OperationOutputDto>
    {
        public ${Name}Operation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new ${Name}OperationOutputDto
            {

            };
        }
    }
}
"@ | Set-Content "$basePath/${Name}Operation.cs"

# NameOperationInputDto.cs
@"
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class ${Name}OperationInputDto
    {
        public string? Test { get; set; }
    }
}
"@ | Set-Content "$basePath/${Name}OperationInputDto.cs"

# NameOperationOutputDto.cs
@"
using System.Diagnostics.CodeAnalysis;

namespace ShoppingServer.BusinessLogic.Operations
{
    [ExcludeFromCodeCoverage]
    public class ${Name}OperationOutputDto
    {
        public string? Test { get; set; }
    }
}
"@ | Set-Content "$basePath/${Name}OperationOutputDto.cs"
