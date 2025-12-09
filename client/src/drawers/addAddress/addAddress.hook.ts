import { Api } from "@api";
import { DRAWERS, INPUTS, TOASTS } from "@constants";
import {
  FormsHelper,
  useFeedback,
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

  const onClickSubmit = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const country = FormsHelper.getField<string>(data, INPUTS.COUNTRY);
      const name = FormsHelper.getField<string>(data, INPUTS.NAME);
      const phone = FormsHelper.getField<string>(data, INPUTS.PHONE);
      const street = FormsHelper.getField<string>(data, INPUTS.STREET);
      const location = FormsHelper.getField<string>(data, INPUTS.LOCATION);
      const city = FormsHelper.getField<string>(data, INPUTS.CITY);
      const postalCode = FormsHelper.getField<string>(data, INPUTS.POSTAL_CODE);

      const countryError = !country ? i18n.form.country.error : undefined;
      const nameError = !name ? i18n.form.name.error : undefined;
      const phoneError = !phone ? i18n.form.phone.error : undefined;
      const streetError = !street ? i18n.form.street.error : undefined;
      const locationError = !location ? i18n.form.location.error : undefined;
      const cityError = !city ? i18n.form.city.error : undefined;
      const postalCodeError = !postalCode
        ? i18n.form.postalCode.error
        : undefined;

      setForm((prevState) => ({
        ...prevState,
        countryError,
        nameError,
        phoneError,
        streetError,
        locationError,
        cityError,
        postalCodeError,
      }));

      if (
        !countryError &&
        !nameError &&
        !phoneError &&
        !streetError &&
        !locationError &&
        !cityError &&
        !postalCodeError
      ) {
        const res = await fetchAddAddress({
          name: name || "",
          postalCode: postalCode || "",
          city: city || "",
          street: street || "",
          country: country || "",
          isDefault: false,
        });

        if (res.metadata.success) {
          setAddresses(res.data.updatedAddresses);

          showItem(TOASTS.CLIENT_INFO_CHANGED);

          hideItem(DRAWERS.ADD_ADDRESS);
        }
      }

      setLoading(false);
    },
    [
      fetchAddAddress,
      hideItem,
      i18n.form.city.error,
      i18n.form.country.error,
      i18n.form.location.error,
      i18n.form.name.error,
      i18n.form.phone.error,
      i18n.form.postalCode.error,
      i18n.form.street.error,
      setAddresses,
      showItem,
    ]
  );

  return {
    i18n,
    loading,
    form,
    onClickSubmit,
  };
};
