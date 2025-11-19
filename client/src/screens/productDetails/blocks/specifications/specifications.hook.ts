import { useAppTranslations } from "@hooks";
import { useStoreProduct } from "@store";
import React from "react";

type Spec = {
  name: string;
  value: string;
};

export const useSpecificationsBlockHelper = () => {
  const selectedProduct = useStoreProduct((state) => state.selectedProduct);
  const { t } = useAppTranslations();

  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const i18n = React.useMemo(() => {
    return {
      title: t("productDetails.specifications.title"),
      spec: {
        brand: t("productDetails.specifications.brand"),
        model: t("productDetails.specifications.model"),
        origin: t("productDetails.specifications.origin"),
        manufacturer: t("productDetails.specifications.manufacturer"),
        height: t("productDetails.specifications.height"),
        width: t("productDetails.specifications.width"),
        depth: t("productDetails.specifications.depth"),
        warranty: t("productDetails.specifications.warranty"),
      },
    };
  }, [t]);

  const getSpecifications = React.useCallback((): Spec[] => {
    const specs = selectedProduct?.specifications;

    if (!specs) {
      return [];
    }

    const result: Spec[] = [
      {
        name: i18n.spec.brand,
        value: specs.brand,
      },
      {
        name: i18n.spec.model,
        value: specs.brand,
      },
    ];

    if (specs.origin) {
      result.push({
        name: i18n.spec.origin,
        value: specs.origin,
      });
    }
    if (specs.manufacturer) {
      result.push({
        name: i18n.spec.manufacturer,
        value: specs.manufacturer,
      });
    }
    if (specs.height) {
      result.push({
        name: i18n.spec.height,
        value: `${specs.height}`,
      });
    }
    if (specs.width) {
      result.push({
        name: i18n.spec.width,
        value: `${specs.width}`,
      });
    }
    if (specs.depth) {
      result.push({
        name: i18n.spec.depth,
        value: `${specs.depth}`,
      });
    }
    if (specs.warranty) {
      result.push({
        name: i18n.spec.warranty,
        value: `${specs.warranty}`,
      });
    }

    return result;
  }, [
    i18n.spec.brand,
    i18n.spec.depth,
    i18n.spec.height,
    i18n.spec.manufacturer,
    i18n.spec.model,
    i18n.spec.origin,
    i18n.spec.warranty,
    i18n.spec.width,
    selectedProduct?.specifications,
  ]);

  const onToggleExpansion = () => {
    setIsExpanded((state) => !state);
  };

  return {
    i18n,
    isExpanded,
    selectedProduct,
    specifications: getSpecifications(),
    onToggleExpansion,
  };
};
