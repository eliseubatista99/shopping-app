param(
    [Parameter(Mandatory = $true)]
    [string]$Screen,

    [Parameter(Mandatory = $true)]
    [string]$BlockName
)

# PascalCase para componentes
function To-PascalCase([string]$text) {
    return ($text.Substring(0,1).ToUpper() + $text.Substring(1))
}

$camelScreen = To-CamelCase $Screen


$pascal = To-PascalCase $BlockName
$camel = To-CamelCase $BlockName

# Base directory
$baseDir = "../src/screens/$camelScreen/blocks/$camel"

# Create directory
New-Item -ItemType Directory -Force -Path $baseDir | Out-Null

# Filenames
$hookFile      = "$camel.hook.ts"
$mobileFile    = "$camel.mobile.tsx"
$desktopFile   = "$camel.desktop.tsx"
$rootFile      = "$camel.tsx"
$indexFile     = "index.ts"

# -----------------------------------------------------------------------------------
# 1) HOOK FILE
# -----------------------------------------------------------------------------------
$hookContent = @"
import { useAppTranslations } from "@hooks";
import React from "react";

export const use${pascal}BlockHelper = () => {
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

Set-Content -Path "$baseDir/$hookFile" -Value $hookContent


# -----------------------------------------------------------------------------------
# 2) MOBILE FILE
# -----------------------------------------------------------------------------------
$mobileContent = @"
import { use${pascal}BlockHelper } from "./$camel.hook";

export const ${pascal}BlockMobile: React.FC = () => {
  const { i18n } = use${pascal}BlockHelper();

  return (
    <>
      {i18n.title}
    </>
  );
};
"@

Set-Content -Path "$baseDir/$mobileFile" -Value $mobileContent


# -----------------------------------------------------------------------------------
# 3) DESKTOP FILE
# -----------------------------------------------------------------------------------
$desktopContent = @"
import { ${pascal}BlockMobile } from "./$camel.mobile";

export const ${pascal}BlockDesktop: React.FC = () => {
  return <${pascal}BlockMobile />;
};
"@

Set-Content -Path "$baseDir/$desktopFile" -Value $desktopContent


# -----------------------------------------------------------------------------------
# 4) ROOT COMPONENT FILE
# -----------------------------------------------------------------------------------
$rootContent = @"
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ${pascal}BlockDesktop } from "./$camel.desktop";
import { ${pascal}BlockMobile } from "./$camel.mobile";

export const ${pascal}Block: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <${pascal}BlockMobile />}
      {currentSize === "desktop" && <${pascal}BlockDesktop />}
    </>
  );
};
"@

Set-Content -Path "$baseDir/$rootFile" -Value $rootContent


# -----------------------------------------------------------------------------------
# 5) INDEX FILE
# -----------------------------------------------------------------------------------
$indexContent = @"
export * from "./$camel";
"@

Set-Content -Path "$baseDir/$indexFile" -Value $indexContent

Write-Host "Bloco '$BlockName' criado com sucesso em $baseDir"
