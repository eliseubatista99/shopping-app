using Microsoft.AspNetCore.Mvc;

namespace ShoppingServer.BusinessLogic.Operations
{
    public class ProductOffersOperation : OperationBase<ProductOffersOperationInputDto, ProductOffersOperationOutputDto>
    {
        public ProductOffersOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new ProductOffersOperationOutputDto
            {

            };
        }
    }
}
