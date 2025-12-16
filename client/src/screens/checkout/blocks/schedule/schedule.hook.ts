import { TimeHelper } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase, useStoreCheckout } from "@store";
import React from "react";

export const useScheduleBlockHelper = () => {
  const { t, translateDate } = useAppTranslations();
  const startDeliveryDate = useStoreCheckout(
    (state) => state.startDeliveryDate
  );
  const currency = useStoreBase((state) => state.currency);
  const endDeliveryDate = useStoreCheckout((state) => state.endDeliveryDate);
  const fastestDeliveryCost = useStoreCheckout(
    (state) => state.fastestDeliveryCost || 0
  );
  const wantsFastestOption = useStoreCheckout(
    (state) => state.wantsFastestOption
  );
  const setStoreCheckoutState = useStoreCheckout(
    (state) => state.setCheckoutStoreState
  );
  const recalculate = useStoreCheckout((state) => state.recalculate);

  const i18n = React.useMemo(() => {
    const startDateData = TimeHelper.getDateInUTC(startDeliveryDate);
    const endDateData = TimeHelper.getDateInUTC(endDeliveryDate);

    const { scheduleDate: startDate } = translateDate(startDeliveryDate || "");
    const { scheduleDate: endDate } = translateDate(endDeliveryDate || "");

    return {
      estimate: t("checkout.schedule.estimate", {
        startDate: `${startDateData?.day}/${startDateData?.month}/${startDateData?.year}`,
        endDate: `${endDateData?.day}/${endDateData?.month}/${endDateData?.year}`,
      }),
      startDate,
      endDate,
      noCosts: t("checkout.schedule.costs.none"),
    };
  }, [endDeliveryDate, startDeliveryDate, t, translateDate]);

  const onClickOption = React.useCallback(
    (fastest: boolean) => {
      setStoreCheckoutState({ wantsFastestOption: fastest });
      recalculate();
    },
    [recalculate, setStoreCheckoutState]
  );

  return {
    i18n,
    currency,
    wantsFastestOption,
    onClickOption,
    fastestDeliveryCost,
  };
};
