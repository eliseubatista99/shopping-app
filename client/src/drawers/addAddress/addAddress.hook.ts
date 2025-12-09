import { Api } from "@api";
import { DRAWERS, INPUTS, TOASTS } from "@constants";
import {
  FormsHelper,
  useFeedback,
  type FormFieldConfiguration,
  type FormFieldOutputData,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreAddresses } from "@store";
import React from "react";

type AddAddressForm = {
  countryError?: string;
  nameError?: string;
  phoneError?: string;
  streetError?: string;
  locationError?: string;
  cityError?: string;
  postalCodeError?: string;
};

export const useAddAddressDrawerHelper = () => {
  const { t } = useAppTranslations();
  const { fetchAddAddress } = Api.AddAddress();
  const { showItem, hideItem } = useFeedback();
  const setAddresses = useStoreAddresses((state) => state.setAddresses);

  const [loading, setLoading] = React.useState(false);
  const [wantsDefault, setWantsDefault] = React.useState(false);
  const [form, setForm] = React.useState<AddAddressForm>({});

  const i18n = React.useMemo(() => {
    return {
      title: t("drawers.addAddress.title"),
      form: {
        country: {
          title: t("drawers.addAddress.form.country.title"),
          placeholder: t("drawers.addAddress.form.country.placeholder"),
          error: t("drawers.addAddress.form.country.error"),
        },
        name: {
          title: t("drawers.addAddress.form.name.title"),
          placeholder: t("drawers.addAddress.form.name.placeholder"),
          error: t("drawers.addAddress.form.name.error"),
        },
        phone: {
          title: t("drawers.addAddress.form.phone.title"),
          placeholder: t("drawers.addAddress.form.phone.placeholder"),
          error: t("drawers.addAddress.form.phone.error"),
        },
        street: {
          title: t("drawers.addAddress.form.street.title"),
          placeholder: t("drawers.addAddress.form.street.placeholder"),
          error: t("drawers.addAddress.form.street.error"),
        },
        location: {
          title: t("drawers.addAddress.form.location.title"),
          placeholder: t("drawers.addAddress.form.location.placeholder"),
          error: t("drawers.addAddress.form.location.error"),
        },
        city: {
          title: t("drawers.addAddress.form.city.title"),
          placeholder: t("drawers.addAddress.form.city.placeholder"),
          error: t("drawers.addAddress.form.city.error"),
        },
        postalCode: {
          title: t("drawers.addAddress.form.postalCode.title"),
          placeholder: t("drawers.addAddress.form.postalCode.placeholder"),
          error: t("drawers.addAddress.form.postalCode.error"),
        },
      },
      actions: {
        setDefault: t("drawers.addAddress.actions.setDefault"),
        submit: t("drawers.addAddress.actions.submit"),
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

      setForm((prevState) => ({
        ...prevState,
        countryError: country?.error,
        nameError: name?.error,
        phoneError: phone?.error,
        streetError: street?.error,
        locationError: location?.error,
        cityError: city?.error,
        postalCodeError: postalCode?.error,
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
        const res = await fetchAddAddress({
          name: FormsHelper.getFieldValueOrDefault(name, ""),
          postalCode: FormsHelper.getFieldValueOrDefault(postalCode, ""),
          city: FormsHelper.getFieldValueOrDefault(city, ""),
          street: FormsHelper.getFieldValueOrDefault(street, ""),
          country: FormsHelper.getFieldValueOrDefault(country, ""),
          isDefault: wantsDefault,
        });

        if (res.metadata.success) {
          setAddresses(res.data.updatedAddresses);

          showItem(TOASTS.CLIENT_INFO_CHANGED);

          hideItem(DRAWERS.ADD_ADDRESS);
        }
      }

      setLoading(false);
    },
    [fetchAddAddress, hideItem, setAddresses, showItem, wantsDefault]
  );

  const onToggleDefault = (value: boolean) => {
    setWantsDefault(value);
  };

  return {
    i18n,
    loading,
    form,
    onClickSubmit,
    onToggleDefault,
    wantsDefault,
    formConfiguration: getFormConfiguration(),
  };
};
