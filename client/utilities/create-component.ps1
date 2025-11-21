param(
    [Parameter(Mandatory=$true)]
    [string]$Name
)

# Convert to camelCase
function To-CamelCase([string]$text) {
    return ($text.Substring(0,1).ToLower() + $text.Substring(1))
}

$camel = To-CamelCase $Name
$baseDir = "../src/components/$camel"

# Create directory
New-Item -ItemType Directory -Force -Path $baseDir | Out-Null

# ------------------------------
# 1) HOOK FILE
# ------------------------------
$hookContent = @"
import { useAppTranslations } from "@hooks";
import React from "react";
import type { ${Name}Props } from "./${camel}";

export const use${Name}Helper = (props: ${Name}Props) => {
  const { t } = useAppTranslations();

  const i18n = React.useMemo(() => {
    return {
      text: t("component.text"),
    };
  }, [t]);

  return { i18n };
};
"@

Set-Content -Path "$baseDir/${camel}.hook.ts" -Value $hookContent


# ------------------------------
# 2) MOBILE FILE
# ------------------------------
$mobileContent = @"
import React from "react";
import type { ${Name}Props } from "./${camel}";
import { use${Name}Helper } from "./${camel}.hook";

export const ${Name}Mobile: React.FC<${Name}Props> = (props) => {
  const { i18n, styles } = use${Name}Helper(props);

  return (
    <div
      data-testid="${camel}"
      style={{
        ...styles,
      }}
    >
      {i18n.text}
    </div>
  );
};


"@

Set-Content -Path "$baseDir/${camel}.mobile.tsx" -Value $mobileContent


# ------------------------------
# 3) DESKTOP FILE
# ------------------------------
$desktopContent = @"
import React from "react";
import type { ${Name}Props } from "./${camel}";
import { ${Name}Mobile } from "./${camel}.mobile";

export const ${Name}Desktop: React.FC<${Name}Props> = (props) => {
  return <${Name}Mobile {...props} />;
};
"@

Set-Content -Path "$baseDir/${camel}.desktop.tsx" -Value $desktopContent


# ------------------------------
# 4) MAIN SCREEN FILE
# ------------------------------
$screenContent = @"
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import { ${Name}Desktop } from "./${camel}.desktop";
import { ${Name}Mobile } from "./${camel}.mobile";

export interface ${Name}Props {
  styles?: React.CSSProperties;
}

export const ${Name}: React.FC<${Name}Props> = (props) => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <${Name}Mobile {...props} />}
      {currentSize === "desktop" && <${Name}Desktop {...props} />}
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
