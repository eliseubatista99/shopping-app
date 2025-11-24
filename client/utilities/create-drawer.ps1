param(
    [Parameter(Mandatory=$true)]
    [string]$Name
)

# Convert to camelCase
function To-CamelCase([string]$text) {
    return ($text.Substring(0,1).ToLower() + $text.Substring(1))
}

$camel = To-CamelCase $Name
$baseDir = "../src/drawers/$camel"

# Create directory
New-Item -ItemType Directory -Force -Path $baseDir | Out-Null

# ------------------------------
# 1) HOOK FILE
# ------------------------------
$hookContent = @"
import { useFeedback } from "@eliseubatista99/react-scaffold-core";
import { useAppTranslations } from "@hooks";
import React from "react";

export const use${Name}DrawerHelper = () => {
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

"@

Set-Content -Path "$baseDir/${camel}.hook.ts" -Value $hookContent


# ------------------------------
# 2) MOBILE FILE
# ------------------------------
$mobileContent = @"
import { AppLoader } from "@components";
import { Drawers } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { AppDrawer } from "../_appDrawer";
import { use${Name}DrawerHelper } from "./${camel}.hook";

export const Drawer${Name}Mobile = () => {
  const { i18n, loading } = use${Name}DrawerHelper();

  return (
    <AppDrawer
      id={Drawers.${camel}}
      canBeClosed={!loading}
      drawerStyles={{ gap: "12px" }}
    >
      <AppLoader
        visible={loading}
        styles={{ zIndex: 1, background: "#ffffff" }}
      />
      <Typography
        styles={{
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        {i18n.text}
      </Typography>
    </AppDrawer>
  );
};

"@

Set-Content -Path "$baseDir/${camel}.mobile.tsx" -Value $mobileContent


# ------------------------------
# 3) DESKTOP FILE
# ------------------------------
$desktopContent = @"
import { Drawer${Name}Mobile } from "./${camel}.mobile";

export const Drawer${Name}Desktop = () => {
  return <Drawer${Name}Mobile />;
};

"@

Set-Content -Path "$baseDir/${camel}.desktop.tsx" -Value $desktopContent


# ------------------------------
# 4) MAIN SCREEN FILE
# ------------------------------
$screenContent = @"
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { Drawer${Name}Desktop } from "./${camel}.desktop";
import { Drawer${Name}Mobile } from "./${camel}.mobile";

export const ${Name}Drawer: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <Drawer${Name}Mobile />}
      {currentSize === "desktop" && <Drawer${Name}Desktop />}
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

Write-Host "Component '$Name' criada em $baseDir"
