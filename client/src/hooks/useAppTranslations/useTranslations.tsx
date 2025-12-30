import { type PaymentMethodDto } from "@api";
import {
  TimeHelper,
  useTranslations,
} from "@eliseubatista99/react-scaffold-core";
import { AppResources } from "@resources";
import { useStoreBase } from "@store";
import React from "react";

export const useAppTranslations = () => {
  const translations = AppResources.Translations;
  const language = useStoreBase((state) => state.language);

  const { t, getTranslation } = useTranslations({
    language: language,
    translations,
  });

  const translateDate = React.useCallback(
    (date: string | undefined) => {
      if (!date) {
        return {
          weekday: "",
          month: "",
          extenseDate: "",
          scheduleDate: "",
          orderDate: "",
        };
      }

      const dateData = TimeHelper.getDateInUTC(date);

      const month = t(`time.month.long.${dateData?.month}`);
      const weekday = t(`time.weekday.long.${dateData?.weekday}`);

      const extenseDate = t("time.date.extense", {
        weekday,
        day: dateData?.day,
        month,
        year: dateData?.year,
      });

      const scheduleDate = t("time.date.schedule", {
        weekday,
        day: dateData?.day,
        month: month,
      });

      const orderDate = t("time.date.order", {
        day: dateData?.day,
        month: month,
        year: dateData?.year,
      });

      return {
        weekday,
        month,
        extenseDate,
        scheduleDate,
        orderDate,
      };
    },
    [t]
  );

  const translatePaymentMethod = React.useCallback(
    (paymentMethod: PaymentMethodDto | undefined) => {
      if (!paymentMethod) {
        return {
          cardNum: "",
          network: "",
          methodName: "",
        };
      }

      const cardNum = paymentMethod?.cardNumberMasked
        ?.replaceAll("*", "")
        .trim();

      const network = t(`global.card.network.${paymentMethod?.network}`);

      const methodName =
        paymentMethod.type === "Card"
          ? t("global.paymentMethod.card.name", {
              name: network,
              card: `•••• ${cardNum}`,
            })
          : t("global.paymentMethod.bank.name", {
              name: paymentMethod.name,
            });

      return {
        cardNum,
        network,
        methodName,
      };
    },
    [t]
  );

  return {
    t,
    getTranslation,
    translateDate,
    translatePaymentMethod,
  };
};
