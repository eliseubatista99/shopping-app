param(
    [Parameter(Mandatory = $true)]
    [string]$Screen,

    [Parameter(Mandatory = $true)]
    [string]$BlockName
)

# Convert block name to folder-friendly lower-case
$blockFolder = $BlockName.ToLower()

# Base directory
$baseDir = "src/screens/$Screen/blocks/CSSMathProduct/$blockFolder"

# Create directory
New-Item -ItemType Directory -Force -Path $baseDir | Out-Null

# -----------------------------------------------------------------------------------
# 1) product.hook.ts
# -----------------------------------------------------------------------------------
$hookContent = @"
import { useAppTranslations } from "@hooks";
import React from "react";

export const useProductBlockHelper = () => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      title: t("block.title"),
    };
  }, [t]);

  return {
    i18n,
  };
};
"@

Set-Content -Path "$baseDir/product.hook.ts" -Value $hookContent


# -----------------------------------------------------------------------------------
# 2) product.mobile.tsx
# -----------------------------------------------------------------------------------
$mobileContent = @"
import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import { useProductBlockHelper } from "./product.hook";

export const ProductBlockMobile: React.FC = () => {
  const { i18n } = useProductBlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
"@

Set-Content -Path "$baseDir/product.mobile.tsx" -Value $mobileContent


# -----------------------------------------------------------------------------------
# 3) product.desktop.tsx
# -----------------------------------------------------------------------------------
$desktopContent = @"
import { ProductBlockMobile } from "./product.mobile";

export const ProductBlockDesktop: React.FC = () => {
  return <ProductBlockMobile />;
};
"@

Set-Content -Path "$baseDir/product.desktop.tsx" -Value $desktopContent


# -----------------------------------------------------------------------------------
# 4) product.tsx
# -----------------------------------------------------------------------------------
$rootContent = @"
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ProductBlockDesktop } from "./product.desktop";
import { ProductBlockMobile } from "./product.mobile";

export const ProductBlock: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <ProductBlockMobile />}
      {currentSize === "desktop" && <ProductBlockDesktop />}
    </>
  );
};
"@

Set-Content -Path "$baseDir/product.tsx" -Value $rootContent


# -----------------------------------------------------------------------------------
# 5) index.ts
# -----------------------------------------------------------------------------------
$indexContent = @"
export * from "./product";
"@

Set-Content -Path "$baseDir/index.ts" -Value $indexContent


Write-Host "Bloco '$BlockName' criado com sucesso em $baseDir"
