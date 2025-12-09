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

export const useEditAddressDrawerHelper = () => {
  const { t } = useAppTranslations();
  const { fetchAddAddress } = Api.AddAddress();
  const { showItem, hideItem } = useFeedback();
  const setAddresses = useStoreAddresses((state) => state.setAddresses);
  const addressInEdit = useStoreAddresses((state) => state.addressInEdit);

  const [loading, setLoading] = React.useState(false);
  const [wantsDefault, setWantsDefault] = React.useState<boolean>(
    addressInEdit?.isDefault || false
  );
  const [form, setForm] = React.useState<AddAddressForm>({});

  const i18n = React.useMemo(() => {
    return {
      title: t("drawers.editAddress.title"),
      form: {
        country: {
          title: t("drawers.editAddress.form.country.title"),
          placeholder: t("drawers.editAddress.form.country.placeholder"),
          error: t("drawers.editAddress.form.country.error"),
        },
        name: {
          title: t("drawers.editAddress.form.name.title"),
          placeholder: t("drawers.editAddress.form.name.placeholder"),
          error: t("drawers.editAddress.form.name.error"),
        },
        phone: {
          title: t("drawers.editAddress.form.phone.title"),
          placeholder: t("drawers.editAddress.form.phone.placeholder"),
          error: t("drawers.editAddress.form.phone.error"),
        },
        street: {
          title: t("drawers.editAddress.form.street.title"),
          placeholder: t("drawers.editAddress.form.street.placeholder"),
          error: t("drawers.editAddress.form.street.error"),
        },
        location: {
          title: t("drawers.editAddress.form.location.title"),
          placeholder: t("drawers.editAddress.form.location.placeholder"),
          error: t("drawers.editAddress.form.location.error"),
        },
        city: {
          title: t("drawers.editAddress.form.city.title"),
          placeholder: t("drawers.editAddress.form.city.placeholder"),
          error: t("drawers.editAddress.form.city.error"),
        },
        postalCode: {
          title: t("drawers.editAddress.form.postalCode.title"),
          placeholder: t("drawers.editAddress.form.postalCode.placeholder"),
          error: t("drawers.editAddress.form.postalCode.error"),
        },
      },
      actions: {
        setDefault: t("drawers.editAddress.actions.setDefault"),
        submit: t("drawers.editAddress.actions.submit"),
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
          isDefault: wantsDefault,
        });

        if (res.metadata.success) {
          setAddresses(res.data.updatedAddresses);

          showItem(TOASTS.CLIENT_INFO_CHANGED);

          hideItem(DRAWERS.EDIT_ADDRESS);
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
      wantsDefault,
    ]
  );

  const onToggleDefault = (value: boolean) => {
    setWantsDefault(value);
  };

  React.useEffect(() => {
    setWantsDefault(addressInEdit?.isDefault || false);
  }, [addressInEdit?.isDefault]);

  return {
    i18n,
    loading,
    form,
    onClickSubmit,
    onToggleDefault,
    wantsDefault,
    addressInEdit,
  };
};
