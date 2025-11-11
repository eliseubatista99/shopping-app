import type { FormFieldOutputData } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { AppSearchBarProps } from "./appSearchBar";

export const useAppSearchBarHelper = ({
  name,
  onSubmit,
  onClick,
  onChange,
}: AppSearchBarProps) => {
  const searchBarContent = React.useRef<string>("");

  const handleOnIconClicked = React.useCallback(() => {
    onSubmit?.(searchBarContent.current);
  }, [onSubmit]);

  const handleOnSubmit = React.useCallback(
    (data: FormFieldOutputData[]) => {
      const searchBarData = data.find((d) => d.name === name);
      const searchBarValue = searchBarData
        ? (searchBarData.value as string)
        : "";

      onSubmit?.(searchBarValue);
    },
    [name, onSubmit]
  );

  const handleOnChange = React.useCallback(
    (data: string) => {
      searchBarContent.current = data;
      onChange?.(data);
    },
    [onChange]
  );

  const handleOnClick = React.useCallback(() => {
    onClick?.();
  }, [onClick]);

  return {
    name,
    handleOnChange,
    handleOnClick,
    handleOnSubmit,
    handleOnIconClicked,
  };
};
