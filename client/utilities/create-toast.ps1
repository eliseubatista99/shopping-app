param(
    [Parameter(Mandatory=$true)]
    [string]$Name
)

# Convert to camelCase
function To-CamelCase([string]$text) {
    return ($text.Substring(0,1).ToLower() + $text.Substring(1))
}

$camel = To-CamelCase $Name
$baseDir = "../src/toasts/$camel"

# Create directory
New-Item -ItemType Directory -Force -Path $baseDir | Out-Null

# ------------------------------
# 1) HOOK FILE
# ------------------------------
$hookContent = @"
import { useAppTranslations } from "@hooks";
import React from "react";

export const use${Name}ToastHelper = () => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      title: t("toasts.${camel}.text"),
    };
  }, [t]);

  return {
    i18n,
  };
};

"@

Set-Content -Path "$baseDir/${camel}.hook.ts" -Value $hookContent


# ------------------------------
# 2) MOBILE FILE
# ------------------------------
$mobileContent = @"
import { Assets } from "@assets";
import { TOASTS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppToast } from "../_appToast";
import { use${Name}ToastHelper } from "./${camel}.hook";

export const ${Name}ToastMobile = () => {
  const { i18n } = use${Name}ToastHelper();

  return (
    <AppToast id={TOASTS.REVIEW_SUBMITTED} styles={{ width: "60%" }}>
      <div
        style={{
          padding: "7px",
          aspectRatio: "1/1",
          borderRadius: "50%",
          background: "#2cb200ff",
        }}
      >
        <Assets.Icons.Check width="20px" height="20px" />
      </div>
      <Typography>{i18n.title}</Typography>
    </AppToast>
  );
};

"@

Set-Content -Path "$baseDir/${camel}.mobile.tsx" -Value $mobileContent


# ------------------------------
# 3) DESKTOP FILE
# ------------------------------
$desktopContent = @"
import { ${Name}ToastMobile } from "./${camel}.mobile";

export const ${Name}ToastDesktop = () => {
  return <${Name}ToastMobile />;
};
"@

Set-Content -Path "$baseDir/${camel}.desktop.tsx" -Value $desktopContent


# ------------------------------
# 4) MAIN SCREEN FILE
# ------------------------------
$screenContent = @"
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ${Name}ToastDesktop } from "./${camel}.desktop";
import { ${Name}ToastMobile } from "./${camel}.mobile";

export const ${Name}Toast: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <${Name}ToastMobile />}
      {currentSize === "desktop" && <${Name}ToastDesktop />}
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

Write-Host "Toast '$Name' criada em $baseDir"
