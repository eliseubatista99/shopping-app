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
    (date: string) => {
      const dateData = TimeHelper.getDateInUTC(date);

      const month = t(`time.month.long.${dateData?.month}`);
      const weekday = t(`time.weekday.long.${dateData?.weekday}`);

      const extenseDate = t("time.date.extense", {
        weekday,
        day: dateData?.day,
        month,
        year: dateData?.year,
      });

      const scheduleDate = t("checkout.schedule.date", {
        weekday,
        day: dateData?.day,
        month: month,
      });

      return {
        weekday,
        month,
        extenseDate,
        scheduleDate,
      };
    },
    [t]
  );

  return {
    t,
    getTranslation,
    translateDate,
  };
};
