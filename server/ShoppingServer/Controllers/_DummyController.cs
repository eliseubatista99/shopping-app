using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Operations;

namespace ShoppingServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DummyController
    {
        //[HttpGet("UnusedDtos")]
        //[ApiExplorerSettings(IgnoreApi = true)] // não aparece no UI
        //public IActionResult<object> Dummy()
        //{
        //    // Apenas referencia os DTOs para que o Swagger registre os schemas
        //    var unusedDtos = new
        //    {
        //        DeleteAddress = new DeleteAddressOperationInputDto { AddressId = "" },
        //        RemoveFromCart = new RemoveFromCartOperationInputDto { ProductIds = new List<string>() },


        //    };

        //    return Ok(unusedDtos);
        //}
    }
}
