param(
    [Parameter(Mandatory=$true)]
    [string]$Name
)

# Convert to camelCase
function To-CamelCase([string]$text) {
    return ($text.Substring(0,1).ToLower() + $text.Substring(1))
}

$camel = To-CamelCase $Name
$baseDir = "../src/modals/$camel"

# Create directory
New-Item -ItemType Directory -Force -Path $baseDir | Out-Null

# ------------------------------
# 1) HOOK FILE
# ------------------------------
$hookContent = @"
import { MODALS } from "@constants";
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import React, { useCallback } from "react";

export const use${Name}ModalHelper = () => {
  const { hideItem } = useFeedback();
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      message: t("modals.${camel}.message"),
      actions: {
        button: t("modals.${camel}.actions.button"),
      } 
    };
  }, [t]);

  const onClickButton = useCallback(() => {
    hideItem(MODALS.${camel})
  },[hideItem])

  
  return {
    i18n,
    onClickButton
  };
};

"@

Set-Content -Path "$baseDir/${camel}.hook.ts" -Value $hookContent


# ------------------------------
# 2) MOBILE FILE
# ------------------------------
$mobileContent = @"
import { AppButton } from "@components";
import { MODALS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppModal } from "../_appModal";
import { use${Name}ModalHelper } from "./${camel}.hook";

export const Modal${Name}Mobile = () => {
  const { i18n, onClickButton } = use${Name}ModalHelper();

  return (
    <AppModal
      id={MODALS.${camel}}
    >
      <Typography
        styles={{
          fontSize: "18px",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        {i18n.message}
      </Typography>
      <AppButton
        text={{
          content: i18n.actions.button,
          props: {
            styles: {
              fontSize: "18px",
              fontWeight: 500,
            },
          },
        }}
        onClick={onClickButton}
        styles={{
          width: "fit-content",
          paddingInline: "60px",
        }}
      />
    </AppModal>
  );
};

"@

Set-Content -Path "$baseDir/${camel}.mobile.tsx" -Value $mobileContent


# ------------------------------
# 3) DESKTOP FILE
# ------------------------------
$desktopContent = @"
import { Modal${Name}Mobile } from "./${camel}.mobile";

export const Modal${Name}Desktop = () => {
  return <Modal${Name}Mobile />;
};

"@

Set-Content -Path "$baseDir/${camel}.desktop.tsx" -Value $desktopContent


# ------------------------------
# 4) MAIN SCREEN FILE
# ------------------------------
$screenContent = @"
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { Modal${Name}Desktop } from "./${camel}.desktop";
import { Modal${Name}Mobile } from "./${camel}.mobile";

export const ${Name}Modal: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <Modal${Name}Mobile />}
      {currentSize === "desktop" && <Modal${Name}Desktop />}
    </>
  );
};
"@

Set-Content -Path "$baseDir/${camel}.tsx" -Value $screenContent

# -----------------------------------------------------------------------------------
# 5) index.ts
# -----------------------------------------------------------------------------------
$indexContent = @"
export * from "./${camel}";
"@

Set-Content -Path "$baseDir/index.ts" -Value $indexContent

Write-Host "Modal '$Name' criada em $baseDir"
