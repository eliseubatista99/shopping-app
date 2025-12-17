import { AddPaymentMethod } from "./useFetchAddPaymentMethod";
import { DeletePaymentMethod } from "./useFetchDeletePaymentMethod";
import { GetPaymentMethodDetails } from "./useFetchGetPaymentMethodDetails";
import { SetDefaultPaymentMethod } from "./useFetchSetDefaultPaymentMethod";
import { UpdatePaymentMethod } from "./useFetchUpdatePaymentMethod";

export const ApiPaymentMethods = {
  SetDefaultPaymentMethod,
  AddPaymentMethod,
  DeletePaymentMethod,
  UpdatePaymentMethod,
  GetPaymentMethodDetails,
};
