param(
    [Parameter(Mandatory=$true)]
    [string]$Name
)

# Convert to camelCase
function To-CamelCase([string]$text) {
    return ($text.Substring(0,1).ToLower() + $text.Substring(1))
}

$camel = To-CamelCase $Name
$baseDir = "../src/store/$camel"

# Create directory
New-Item -ItemType Directory -Force -Path $baseDir | Out-Null

# ------------------------------
# 1) STORE FILE
# ------------------------------
$storeContent = @"
import { produce } from "immer";
import { createJSONStorage } from "zustand/middleware";
import { StoreHelper } from "../storeHelper";

export interface ${Name}State {

}

const initialState: ${Name}State = {
};

interface UseStoreOutput extends ${Name}State {
  setPartialState: (data: Partial<${Name}State>) => void;
}

export const useStore${Name} = StoreHelper.createStore<UseStoreOutput>(
  (set, get) => ({
    ...initialState,
    setPartialState: function (data: Partial<${Name}State>) {
      set(
        produce((state: ${Name}State) => ({ ...state, ...data })),
        false,
        "setPartialState"
      );
    },
  }),
  "${Name}",
  createJSONStorage(() => sessionStorage)
);
"@

Set-Content -Path "$baseDir/${camel}.ts" -Value $storeContent

# -----------------------------------------------------------------------------------
# 2) index.ts
# -----------------------------------------------------------------------------------
$indexContent = @"
export * from "./${camel}";
"@

Set-Content -Path "$baseDir/index.ts" -Value $indexContent

Write-Host "Store '$Name' criada em $baseDir"
