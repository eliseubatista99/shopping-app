import {
  useDidMount,
} from "@eliseubatista99/react-scaffold-core";
import React from "react";

export const useCheckoutPageHelper = () => {
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
