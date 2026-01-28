import { INPUTS } from "@constants";
import {
  FormsHelper,
  useDidMount,
  type FormFieldConfiguration,
  type FormFieldOutputData,
} from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import React from "react";
import type { PaymentMethodFormProps } from "./paymentMethodForm";

type PaymentMethodFormErrors = {
  cardNumber?: string;
  expirationMonth?: string;
  expirationYear?: string;
  securityCode?: string;
  name?: string;
};

export const usePaymentMethodFormHelper = (props: PaymentMethodFormProps) => {
  const { t } = useAppTranslations();

  const [errors, setErrors] = React.useState<PaymentMethodFormErrors>({});
  const [loading, setLoading] = React.useState(false);

  const i18n = React.useMemo(() => {
    return {
      form: {
        cardNumber: {
          title: t("paymentMethodForm.form.cardNumber.title"),
          placeholder: t("paymentMethodForm.form.cardNumber.placeholder"),
          error: t("paymentMethodForm.form.cardNumber.error"),
        },
        date: {
          title: t("paymentMethodForm.form.date.title"),
          error: t("paymentMethodForm.form.date.error"),
          month: {
            placeholder: t(
              "paymentMethodForm.form.expirationMonth.placeholder"
            ),
          },
          year: {
            placeholder: t("paymentMethodForm.form.expirationYear.placeholder"),
          },
        },
        securityCode: {
          title: t("paymentMethodForm.form.securityCode.title"),
          placeholder: t("paymentMethodForm.form.securityCode.placeholder"),
          error: t("paymentMethodForm.form.securityCode.error"),
        },
        name: {
          title: t("paymentMethodForm.form.name.title"),
          placeholder: t("paymentMethodForm.form.name.placeholder"),
          error: t("paymentMethodForm.form.name.error"),
        },
      },
      actions: {
        submit: t("paymentMethodForm.actions.submit"),
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

      setErrors((prevState) => ({
        ...prevState,
        cardNumber: cardNumber?.error,
        expirationYear: expirationYear?.error,
        expirationMonth: expirationMonth?.error,
        securityCode: securityCode?.error,
        name: name?.error,
      }));

      if (
        !cardNumber?.error &&
        !expirationYear?.error &&
        !expirationMonth?.error &&
        !securityCode?.error &&
        !name?.error
      ) {
        await props.onSubmit({
          cardNumber: FormsHelper.getFieldValueOrDefault(cardNumber, ""),
          expirationMonth: FormsHelper.getFieldValueOrDefault(
            expirationMonth,
            0
          ),
          expirationYear: FormsHelper.getFieldValueOrDefault(expirationYear, 0),
          securityCode: FormsHelper.getFieldValueOrDefault(securityCode, ""),
          name: FormsHelper.getFieldValueOrDefault(name, ""),
        });
      }

      setLoading(false);
    },
    [props]
  );

  const executeMount = React.useCallback(async () => {
    if (props.onMount) {
      setLoading(true);

      const res = await props.onMount?.();

      if (!res?.success) {
        // Handle mount error if needed
      }

      setLoading(false);
    }
  }, [props]);

  useDidMount(() => {
    executeMount();
  });

  return {
    i18n,
    loading,
    errors,
    onClickSubmit,
    initialValue: props.initialValue,
    formConfiguration: getFormConfiguration(),
  };
};
