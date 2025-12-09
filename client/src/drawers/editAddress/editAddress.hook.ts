import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import React from "react";

export const useEditAddressDrawerHelper = () => {
  const { hideItem } = useFeedback();
  const { t } = useAppTranslations();
  const [loading, setLoading] = React.useState<boolean>(false);

  const i18n = React.useMemo(() => {
    return {
      text: t("text"),
    };
  }, [t]);

  
  return {
    i18n,
    loading,
  };
};

