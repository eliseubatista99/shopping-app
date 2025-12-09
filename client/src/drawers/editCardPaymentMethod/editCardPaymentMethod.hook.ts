import { Api } from "@api";
import { DRAWERS, INPUTS, TOASTS } from "@constants";
import {
  FormsHelper,
  useFeedback,
  type FormFieldConfiguration,
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

  const getFormConfiguration =
    React.useCallback((): FormFieldConfiguration[] => {
      return [
        {
          name: INPUTS.CARD_NUMBER,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.form.cardNumber.error,
          },
        },
        {
          name: INPUTS.EXPIRATION_MONTH,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.form.date.error,
          },
        },
        {
          name: INPUTS.EXPIRATION_YEAR,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.form.date.error,
          },
        },
        {
          name: INPUTS.SECURITY_CODE,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.form.securityCode.error,
          },
        },
        {
          name: INPUTS.NAME,
          emptyValidation: {
            allow: false,
            errorMessage: i18n.form.name.error,
          },
        },
      ];
    }, [
      i18n.form.cardNumber.error,
      i18n.form.date.error,
      i18n.form.name.error,
      i18n.form.securityCode.error,
    ]);

  const onClickSubmit = React.useCallback(
    async (data: FormFieldOutputData[]) => {
      setLoading(true);

      const cardNumber = FormsHelper.getField(data, INPUTS.CARD_NUMBER);
      const expirationMonth = FormsHelper.getField(
        data,
        INPUTS.EXPIRATION_MONTH
      );
      const expirationYear = FormsHelper.getField(data, INPUTS.EXPIRATION_YEAR);
      const securityCode = FormsHelper.getField(data, INPUTS.SECURITY_CODE);
      const name = FormsHelper.getField(data, INPUTS.NAME);

      setForm((prevState) => ({
        ...prevState,
        cardNumberError: cardNumber?.error,
        dateError: expirationYear?.error || expirationMonth?.error,
        securityCodeError: securityCode?.error,
        nameError: name?.error,
      }));

      if (
        !cardNumber?.error &&
        !expirationYear?.error &&
        !expirationMonth?.error &&
        !securityCode?.error &&
        !name?.error
      ) {
        const res = await fetchUpdatePaymentMethod({
          id: paymentMethodInEdit?.id || "",
          name: FormsHelper.getFieldValueOrDefault(name, ""),
          cardNumber: FormsHelper.getFieldValueOrDefault(cardNumber, ""),
          expirationMonth: FormsHelper.getFieldValueOrDefault(
            expirationMonth,
            0
          ),
          expirationYear: FormsHelper.getFieldValueOrDefault(expirationYear, 0),
        });

        if (res.metadata.success) {
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
      paymentMethodInEdit?.id,
      setPaymentMethods,
      showItem,
    ]
  );

  return {
    i18n,
    loading,
    form,
    onClickSubmit,
    paymentMethodInEdit,
    formConfiguration: getFormConfiguration(),
  };
};
