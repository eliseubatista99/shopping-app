param(
    [Parameter(Mandatory=$true)]
    [string]$Name
)

# Convert to camelCase
function To-CamelCase([string]$text) {
    return ($text.Substring(0,1).ToLower() + $text.Substring(1))
}

$camel = To-CamelCase $Name
$baseDir = "../src/screens/$camel"

# Create directory
New-Item -ItemType Directory -Force -Path $baseDir | Out-Null

# ------------------------------
# 1) HOOK FILE
# ------------------------------
$hookContent = @"
import {
  useDidMount,
} from "@eliseubatista99/react-scaffold-core";
import React from "react";

export const use${Name}PageHelper = () => {
  const [loading, setLoading] = React.useState(true);

  const initScreen = React.useCallback(async () => {
    
    setLoading(false);
  }, []);

  useDidMount(() => {
    initScreen();
  });

  return {
    loading,
  };
};
"@

Set-Content -Path "$baseDir/${camel}.hook.ts" -Value $hookContent


# ------------------------------
# 2) MOBILE FILE
# ------------------------------
$mobileContent = @"
import { AppLayout, AppLoader } from "@components";
import { use${Name}PageHelper } from "./${camel}.hook";

export const ${Name}Mobile: React.FC = () => {
  const { loading } = use${Name}PageHelper();

  return (
    <AppLayout
      appHeader={{
        back: {
          visible: true,
        },
      }}
    >
      {loading && <AppLoader visible={loading} />}
      {!loading && (
        <>
        </>
      )}
    </AppLayout>
  );
};
"@

Set-Content -Path "$baseDir/${camel}.mobile.tsx" -Value $mobileContent


# ------------------------------
# 3) DESKTOP FILE
# ------------------------------
$desktopContent = @"
import { ${Name}Mobile } from "./${camel}.mobile";

export const ${Name}Desktop: React.FC = () => {
  return <${Name}Mobile />;
};
"@

Set-Content -Path "$baseDir/${camel}.desktop.tsx" -Value $desktopContent


# ------------------------------
# 4) MAIN SCREEN FILE
# ------------------------------
$screenContent = @"
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ${Name}Desktop } from "./${camel}.desktop";
import { ${Name}Mobile } from "./${camel}.mobile";

export const ${Name}: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <${Name}Mobile />}
      {currentSize === "desktop" && <${Name}Desktop />}
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

Write-Host "Screen '$Name' criada em $baseDir"
