import { Api, PaymentMethodType } from "@api";
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

export const useAddCardPaymentMethodDrawerHelper = () => {
  const { t } = useAppTranslations();
  const { fetchAddPaymentMethod } = Api.AddPaymentMethod();
  const { showItem, hideItem } = useFeedback();
  const setPaymentMethods = useStorePaymentMethods(
    (state) => state.setPaymentMethods
  );

  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState<AddPaymentMethodForm>({});

  const i18n = React.useMemo(() => {
    return {
      title: t("drawers.addCardPaymentMethod.title"),
      subtitle: t("drawers.addCardPaymentMethod.subtitle"),
      form: {
        cardNumber: {
          title: t("drawers.addCardPaymentMethod.form.cardNumber.title"),
          placeholder: t(
            "drawers.addCardPaymentMethod.form.cardNumber.placeholder"
          ),
          error: t("drawers.addCardPaymentMethod.form.cardNumber.error"),
        },
        date: {
          title: t("drawers.addCardPaymentMethod.form.date.title"),
          error: t("drawers.addCardPaymentMethod.form.date.error"),
          month: {
            placeholder: t(
              "drawers.addCardPaymentMethod.form.expirationMonth.placeholder"
            ),
          },
          year: {
            placeholder: t(
              "drawers.addCardPaymentMethod.form.expirationYear.placeholder"
            ),
          },
        },
        securityCode: {
          title: t("drawers.addCardPaymentMethod.form.securityCode.title"),
          placeholder: t(
            "drawers.addCardPaymentMethod.form.securityCode.placeholder"
          ),
          error: t("drawers.addCardPaymentMethod.form.securityCode.error"),
        },
        name: {
          title: t("drawers.addCardPaymentMethod.form.name.title"),
          placeholder: t("drawers.addCardPaymentMethod.form.name.placeholder"),
          error: t("drawers.addCardPaymentMethod.form.name.error"),
        },
      },
      actions: {
        submit: t("drawers.addCardPaymentMethod.actions.submit"),
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
        const res = await fetchAddPaymentMethod({
          type: PaymentMethodType.Card,
          name: name || "",
          cardNumber: cardNumber || "",
          expirationMonth: expirationMonth || 0,
          expirationYear: expirationYear || 0,
        });

        if (res.metadata.success) {
          setPaymentMethods(res.data.updatedMethods);

          showItem(TOASTS.CLIENT_INFO_CHANGED);

          hideItem(DRAWERS.ADD_CARD_PAYMENT_METHOD);
        }
      }

      setLoading(false);
    },
    [
      fetchAddPaymentMethod,
      hideItem,
      i18n.form.cardNumber.error,
      i18n.form.date.error,
      i18n.form.name.error,
      i18n.form.securityCode.error,
      setPaymentMethods,
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
