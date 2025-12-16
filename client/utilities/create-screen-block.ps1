param(
    [Parameter(Mandatory = $true)]
    [string]$Screen,

    [Parameter(Mandatory = $true)]
    [string]$BlockName
)

function To-CamelCase([string]$text) {
    return ($text.Substring(0,1).ToLower() + $text.Substring(1))
}

$camelScreen = To-CamelCase $Screen


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

export const use${BlockName}BlockHelper = () => {
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
import { use${BlockName}BlockHelper } from "./$camel.hook";

export const ${BlockName}BlockMobile: React.FC = () => {
  const { i18n } = use${BlockName}BlockHelper();

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
import { ${BlockName}BlockMobile } from "./$camel.mobile";

export const ${BlockName}BlockDesktop: React.FC = () => {
  return <${BlockName}BlockMobile />;
};
"@

Set-Content -Path "$baseDir/$desktopFile" -Value $desktopContent


# -----------------------------------------------------------------------------------
# 4) ROOT COMPONENT FILE
# -----------------------------------------------------------------------------------
$rootContent = @"
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ${BlockName}BlockDesktop } from "./$camel.desktop";
import { ${BlockName}BlockMobile } from "./$camel.mobile";

export const ${BlockName}Block: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <${BlockName}BlockMobile />}
      {currentSize === "desktop" && <${BlockName}BlockDesktop />}
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
