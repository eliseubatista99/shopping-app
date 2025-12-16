import { INPUTS } from "@constants";
import {
  FormsHelper,
  type FormFieldConfiguration,
  type FormFieldOutputData,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import React from "react";
import type { AddressFormFields, AddressFormProps } from "./addressForm";

type AddressFormErrors = AddressFormFields;

export const useAddressFormHelper = (props: AddressFormProps) => {
  const { t } = useAppTranslations();

  const [errors, setErrors] = React.useState<AddressFormErrors>({});
  const [loading, setLoading] = React.useState(false);
  const [wantsDefault, setWantsDefault] = React.useState<boolean>(
    props?.initialValue?.isDefault || false
  );

  const i18n = React.useMemo(() => {
    return {
      form: {
        country: {
          title: t("addressForm.form.country.title"),
          placeholder: t("addressForm.form.country.placeholder"),
          error: t("addressForm.form.country.error"),
        },
        name: {
          title: t("addressForm.form.name.title"),
          placeholder: t("addressForm.form.name.placeholder"),
          error: t("addressForm.form.name.error"),
        },
        phone: {
          title: t("addressForm.form.phone.title"),
          placeholder: t("addressForm.form.phone.placeholder"),
          error: t("addressForm.form.phone.error"),
        },
        street: {
          title: t("addressForm.form.street.title"),
          placeholder: t("addressForm.form.street.placeholder"),
          error: t("addressForm.form.street.error"),
        },
        location: {
          title: t("addressForm.form.location.title"),
          placeholder: t("addressForm.form.location.placeholder"),
          error: t("addressForm.form.location.error"),
        },
        city: {
          title: t("addressForm.form.city.title"),
          placeholder: t("addressForm.form.city.placeholder"),
          error: t("addressForm.form.city.error"),
        },
        postalCode: {
          title: t("addressForm.form.postalCode.title"),
          placeholder: t("addressForm.form.postalCode.placeholder"),
          error: t("addressForm.form.postalCode.error"),
        },
      },
      actions: {
        setDefault: t("addressForm.actions.setDefault"),
        submit: t("addressForm.actions.submit"),
      },
    };
  }, [t]);

  const getFormConfiguration =
    React.useCallback((): FormFieldConfiguration[] => {
      return [
        {
          name: INPUTS.COUNTRY,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.form.country.error,
          },
        },
        {
          name: INPUTS.NAME,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.form.name.error,
          },
        },
        {
          name: INPUTS.PHONE,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.form.phone.error,
          },
        },
        {
          name: INPUTS.STREET,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.form.street.error,
          },
        },
        {
          name: INPUTS.LOCATION,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.form.location.error,
          },
        },
        {
          name: INPUTS.CITY,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.form.city.error,
          },
        },
        {
          name: INPUTS.POSTAL_CODE,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.form.postalCode.error,
          },
        },
      ];
    }, [
      i18n.form.city.error,
      i18n.form.country.error,
      i18n.form.location.error,
      i18n.form.name.error,
      i18n.form.phone.error,
      i18n.form.postalCode.error,
      i18n.form.street.error,
    ]);

  const onClickSubmit = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const country = FormsHelper.getField(data, INPUTS.COUNTRY);
      const name = FormsHelper.getField(data, INPUTS.NAME);
      const phone = FormsHelper.getField(data, INPUTS.PHONE);
      const street = FormsHelper.getField(data, INPUTS.STREET);
      const location = FormsHelper.getField(data, INPUTS.LOCATION);
      const city = FormsHelper.getField(data, INPUTS.CITY);
      const postalCode = FormsHelper.getField(data, INPUTS.POSTAL_CODE);

      setErrors((prevState) => ({
        ...prevState,
        country: country?.error,
        name: name?.error,
        phone: phone?.error,
        street: street?.error,
        location: location?.error,
        city: city?.error,
        postalCode: postalCode?.error,
      }));

      if (
        !country?.error &&
        !name?.error &&
        !phone?.error &&
        !street?.error &&
        !location?.error &&
        !city?.error &&
        !postalCode?.error
      ) {
        await props.onSubmit({
          // cardNumber: FormsHelper.getFieldValueOrDefault(cardNumber, ""),
          // expirationMonth: FormsHelper.getFieldValueOrDefault(
          //   expirationMonth,
          //   0
          // ),
          // expirationYear: FormsHelper.getFieldValueOrDefault(expirationYear, 0),
          // securityCode: FormsHelper.getFieldValueOrDefault(securityCode, ""),
          // name: FormsHelper.getFieldValueOrDefault(name, ""),

          name: FormsHelper.getFieldValueOrDefault(name, ""),
          postalCode: FormsHelper.getFieldValueOrDefault(postalCode, ""),
          city: FormsHelper.getFieldValueOrDefault(city, ""),
          street: FormsHelper.getFieldValueOrDefault(street, ""),
          country: FormsHelper.getFieldValueOrDefault(country, ""),
          setDefault: wantsDefault,
        });
      }

      setLoading(false);
    },
    [props, wantsDefault]
  );

  const onToggleDefault = (value: boolean) => {
    setWantsDefault(value);
  };

  React.useEffect(() => {
    setWantsDefault(props.initialValue?.isDefault || false);
  }, [props.initialValue?.isDefault]);

  return {
    i18n,
    loading,
    errors,
    onClickSubmit,
    onToggleDefault,
    wantsDefault,
    initialValue: props.initialValue,
    formConfiguration: getFormConfiguration(),
  };
};
