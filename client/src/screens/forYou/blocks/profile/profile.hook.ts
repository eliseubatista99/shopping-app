import { PAGES } from "@constants";
import { useNavigation } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreClient } from "@store";
import React from "react";

export const useProfileBlockHelper = () => {
  const { t } = useAppTranslations();
  const { goTo } = useNavigation();
  const client = useStoreClient((state) => state.client);

  const i18n = React.useMemo(() => {
    return {
      greetings: t("forYou.profile.greetings", { name: client?.name }),
    };
  }, [client?.name, t]);

  const onCLickSettings = React.useCallback(() => {
    goTo({
      path: PAGES.SETTINGS,
    });
  }, [goTo]);

  return {
    i18n,
    onCLickSettings,
    client,
  };
};
