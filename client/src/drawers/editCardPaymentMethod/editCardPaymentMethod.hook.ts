import { Api } from "@api";
import { DRAWERS, INPUTS, TOASTS } from "@constants";
import {
  FormsHelper,
  useFeedback,
  type FormFieldOutputData,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStorePaymentMethods } from "@store";
import React from "react";

type AddPaymentMethodForm = {
  cardNumberError?: string;
  dateError?: string;
  securityCodeError?: string;
  nameError?: string;
};

export const useEditCardPaymentMethodDrawerHelper = () => {
  const { t } = useAppTranslations();
  const { fetchUpdatePaymentMethod } = Api.UpdatePaymentMethod();
  const { showItem, hideItem } = useFeedback();

  const paymentMethodInEdit = useStorePaymentMethods(
    (state) => state.paymentMethodInEdit
  );

  const setPaymentMethods = useStorePaymentMethods(
    (state) => state.setPaymentMethods
  );

  const setStorePaymentMethodsState = useStorePaymentMethods(
    (state) => state.setStorePaymentMethodsState
  );

  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState<AddPaymentMethodForm>({});

  const i18n = React.useMemo(() => {
    return {
      title: t("drawers.editCardPaymentMethod.title"),
      subtitle: t("drawers.editCardPaymentMethod.subtitle"),
      form: {
        cardNumber: {
          title: t("drawers.editCardPaymentMethod.form.cardNumber.title"),
          placeholder: t(
            "drawers.editCardPaymentMethod.form.cardNumber.placeholder"
          ),
          error: t("drawers.editCardPaymentMethod.form.cardNumber.error"),
        },
        date: {
          title: t("drawers.editCardPaymentMethod.form.date.title"),
          error: t("drawers.editCardPaymentMethod.form.date.error"),
          month: {
            placeholder: t(
              "drawers.editCardPaymentMethod.form.expirationMonth.placeholder"
            ),
          },
          year: {
            placeholder: t(
              "drawers.editCardPaymentMethod.form.expirationYear.placeholder"
            ),
          },
        },
        securityCode: {
          title: t("drawers.editCardPaymentMethod.form.securityCode.title"),
          placeholder: t(
            "drawers.editCardPaymentMethod.form.securityCode.placeholder"
          ),
          error: t("drawers.editCardPaymentMethod.form.securityCode.error"),
        },
        name: {
          title: t("drawers.editCardPaymentMethod.form.name.title"),
          placeholder: t("drawers.editCardPaymentMethod.form.name.placeholder"),
          error: t("drawers.editCardPaymentMethod.form.name.error"),
        },
      },
      actions: {
        submit: t("drawers.editCardPaymentMethod.actions.submit"),
      },
    };
  }, [t]);

  const onClickSubmit = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const cardNumber = FormsHelper.getField<string>(data, INPUTS.CARD_NUMBER);
      const expirationMonth = FormsHelper.getField<number>(
        data,
        INPUTS.EXPIRATION_MONTH
      );
      const expirationYear = FormsHelper.getField<number>(
        data,
        INPUTS.EXPIRATION_YEAR
      );
      const securityCode = FormsHelper.getField<string>(
        data,
        INPUTS.SECURITY_CODE
      );
      const name = FormsHelper.getField<string>(data, INPUTS.NAME);

      const cardNumberError = !cardNumber
        ? i18n.form.cardNumber.error
        : undefined;
      const dateError =
        !expirationMonth || !expirationYear ? i18n.form.date.error : undefined;

      const securityCodeError = !securityCode
        ? i18n.form.securityCode.error
        : undefined;
      const nameError = !name ? i18n.form.name.error : undefined;

      setForm((prevState) => ({
        ...prevState,
        cardNumberError,
        dateError,
        securityCodeError,
        nameError,
      }));

      if (!cardNumberError && !dateError && !securityCodeError && !nameError) {
        const res = await fetchUpdatePaymentMethod({
          id: paymentMethodInEdit?.id || "",
          name: name || "",
          cardNumber: cardNumber || "",
          expirationMonth: expirationMonth || 0,
          expirationYear: expirationYear || 0,
        });

        if (res.metadata.success) {
          setStorePaymentMethodsState({
            paymentMethodInEdit: undefined,
          });

          setPaymentMethods(res.data.updatedMethods);

          showItem(TOASTS.CLIENT_INFO_CHANGED);

          hideItem(DRAWERS.EDIT_CARD_PAYMENT_METHOD);
        }
      }

      setLoading(false);
    },
    [
      fetchUpdatePaymentMethod,
      hideItem,
      i18n.form.cardNumber.error,
      i18n.form.date.error,
      i18n.form.name.error,
      i18n.form.securityCode.error,
      paymentMethodInEdit?.id,
      setPaymentMethods,
      setStorePaymentMethodsState,
      showItem,
    ]
  );

  return {
    i18n,
    loading,
    form,
    onClickSubmit,
    paymentMethodInEdit,
  };
};
