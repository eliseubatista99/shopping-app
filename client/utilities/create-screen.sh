#!/bin/bash

# Verifica se foi passado um nome
if [ -z "$1" ]; then
  echo "Uso: ./create-screen.sh WriteReview"
  exit 1
fi

# Nome original (ex: WriteReview)
NAME="$1"

# Versão camelCase (writeReview)
CAMEL=$(echo "$NAME" | sed -E 's/(^.|[A-Z])/\L&/g')

# Diretório base
BASE_DIR="../src/screens/$CAMEL"

# Cria diretório
mkdir -p "$BASE_DIR"

#########################################
# 1) HOOK FILE
#########################################
cat > "$BASE_DIR/${CAMEL}.hook.ts" << EOF
import {
  useDidMount,
} from "@eliseubatista99/react-scaffold-core";
import React from "react";

export const use${NAME}PageHelper = () => {
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
EOF

#########################################
# 2) MOBILE FILE
#########################################
cat > "$BASE_DIR/${CAMEL}.mobile.tsx" << EOF
import { AppLayout, AppLoader } from "@components";
import { use${NAME}PageHelper } from "./${CAMEL}.hook";

export const ${NAME}Mobile: React.FC = () => {
  const { loading } = use${NAME}PageHelper();

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
EOF

#########################################
# 3) DESKTOP FILE
#########################################
cat > "$BASE_DIR/${CAMEL}.desktop.tsx" << EOF
import { ${NAME}Mobile } from "./${CAMEL}.mobile";

export const ${NAME}Desktop: React.FC = () => {
  return <${NAME}Mobile />;
};
EOF

#########################################
# 4) MAIN SCREEN FILE
#########################################
cat > "$BASE_DIR/${CAMEL}.tsx" << EOF
import { useResponsive } from "@eliseubatista99/react-scaffold-core";
import { ${NAME}Desktop } from "./${CAMEL}.desktop";
import { ${NAME}Mobile } from "./${CAMEL}.mobile";

export const ${NAME}: React.FC = () => {
  const { currentSize } = useResponsive();

  return (
    <>
      {currentSize !== "desktop" && <${NAME}Mobile />}
      {currentSize === "desktop" && <${NAME}Desktop />}
    </>
  );
};
EOF

echo "Screen '$NAME' criada em $BASE_DIR"
