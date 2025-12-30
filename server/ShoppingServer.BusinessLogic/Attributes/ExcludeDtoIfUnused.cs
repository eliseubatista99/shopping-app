using System;

namespace ShoppingServer.BusinessLogic.Attributes
{

    [AttributeUsage(AttributeTargets.Class)]
    public class ExcludeDtoIfUnusedAttribute : Attribute
    {
    }
}
