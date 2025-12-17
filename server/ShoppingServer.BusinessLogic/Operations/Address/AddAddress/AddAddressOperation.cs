using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShoppingServer.BusinessLogic.Entities;

namespace ShoppingServer.BusinessLogic.Operations.Address
{
    public class AddAddressOperation : OperationBase<AddAddressOperationInputDto, AddAddressOperationOutputDto>
    {
        public AddAddressOperation(ControllerBase _controller) : base(_controller)
        {
            controller = _controller;
        }

        protected override async Task HandleExecution()
        {
            await base.HandleExecution();

            output.Data = new AddAddressOperationOutputDto
            {
                Addresses = new List<AddressDto>
                {
                    new AddressDto
                    {
                        Id = "1",
                        Name = "Eliseu",
                        PostalCode = "6123-456",
                        City = "Fundão",
                        Location = "Fundão",
                        Street = "Rua Bonita",
                        Country = "Portugal",
                        CountryCode = "PT",
                        Phone = "911111111",
                        IsDefault = true,
                    }
                }
            };
        }
    }
}