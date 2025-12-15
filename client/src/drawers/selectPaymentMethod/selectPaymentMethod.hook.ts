import { Api, type ClientInfoDto, type PaymentMethodDto } from "@api";
import { DRAWERS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import { useStoreBase, useStorePaymentMethods } from "@store";
import React from "react";

export const useSelectPaymentMethodDrawerHelper = () => {
  const { hideItem } = useFeedback();
  const setClientInfo = useStoreBase((state) => state.setClientInfo);
  const storeClient = useStoreBase((state) => state.client);
  const paymentMethods = useStorePaymentMethods(
    (state) => state.paymentMethods
  );
  const selectedPaymentMethodInStore = useStorePaymentMethods(
    (state) => state.selectedPaymentMethod
  );
  const setPaymentMethods = useStorePaymentMethods(
    (state) => state.setPaymentMethods
  );

  const { fetchSetDefaultPaymentMethod } = Api.SetDefaultPaymentMethod();
  const { t, translatePaymentMethod } = useAppTranslations();
  const [loading, setLoading] = React.useState<boolean>(false);

  const [selectedMethod, setSelectedMethod] = React.useState<
    PaymentMethodDto | undefined
  >(selectedPaymentMethodInStore);

  const i18n = React.useMemo(() => {
    return {
      title: t("drawers.selectPaymentMethod.title"),
      methodName: (p: PaymentMethodDto) => translatePaymentMethod(p).methodName,
      button: t("drawers.selectPaymentMethod.button"),
    };
  }, [t, translatePaymentMethod]);

  const handleMethodSelected = React.useCallback((data: PaymentMethodDto) => {
    setSelectedMethod(data);
  }, []);

  const handleSubmit = React.useCallback(async () => {
    if (!selectedMethod || !storeClient) {
      return;
    }

    if (selectedMethod.id === selectedPaymentMethodInStore?.id) {
      return;
    }

    setLoading(true);
    const clientData: ClientInfoDto = { ...storeClient };

    if (!clientData) {
      return;
    }

    const res = await fetchSetDefaultPaymentMethod({
      methodId: selectedMethod.id,
    });

    clientData.paymentMethods = res.data.updatedMethods || [];
    setClientInfo(clientData);
    setPaymentMethods(res.data.updatedMethods);
    setSelectedMethod(res.data.updatedMethods.find((m) => m.isDefault));

    setLoading(false);

    hideItem(DRAWERS.SELECT_PAYMENT_METHOD);
  }, [
    fetchSetDefaultPaymentMethod,
    hideItem,
    selectedMethod,
    selectedPaymentMethodInStore?.id,
    setClientInfo,
    setPaymentMethods,
    storeClient,
  ]);

  return {
    i18n,
    loading,
    handleMethodSelected,
    handleSubmit,
    selectedMethod,
    methods: paymentMethods,
  };
};
