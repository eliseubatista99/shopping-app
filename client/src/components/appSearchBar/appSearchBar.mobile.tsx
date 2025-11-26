import { Form, InputField } from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { AppSearchBarProps } from "./appSearchBar";
import { useAppSearchBarHelper } from "./appSearchBar.hook";

export const AppSearchBarMobile: React.FC<AppSearchBarProps> = (props) => {
  const {
    handleOnSubmit,
    handleOnChange,
    handleOnBlur,
    handleOnIconClicked,
    name,
    handleOnFocus,
  } = useAppSearchBarHelper(props);

  const {
    placeholder,
    styles,
    inputFieldStyles,
    formStyles,
    rightIcon,
    leftIcon,
  } = props;

  return (
    <div
      data-testid="app-search-bar"
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        ...styles,
      }}
    >
      <Form
        fields={[
          {
            name: name,
            content: (
              <InputField
                name={name}
                placeHolder={placeholder}
                type="text"
                onFocus={() => handleOnFocus()}
                onBlur={() => handleOnBlur()}
                rightIcon={
                  <>
                    {rightIcon && (
                      <div onClick={() => handleOnIconClicked()}>
                        {rightIcon}
                      </div>
                    )}
                  </>
                }
                leftIcon={
                  <>
                    {leftIcon && (
                      <div onClick={() => handleOnIconClicked()}>
                        {leftIcon}
                      </div>
                    )}
                  </>
                }
                onChange={handleOnChange}
                styles={{ ...inputFieldStyles?.styles }}
                containerStyles={{
                  background: "#ffffff",
                  border: "2px solid #747474b4",
                  borderRadius: "100px",
                  ...inputFieldStyles?.containerStyles,
                }}
                inputStyles={{ ...inputFieldStyles?.inputStyles }}
              />
            ),
          },
        ]}
        submitButton={{
          content: (
            <button
              data-testid="submit-button"
              style={{
                display: "none",
              }}
            />
          ),
        }}
        onSubmit={handleOnSubmit}
        styles={{
          alignItems: "center",
          justifyContent: "center",
          ...formStyles,
        }}
      />
    </div>
  );
};
