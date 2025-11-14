import {
  Form,
  InputField,
  Typography,
} from "@eliseubatista99/react-scaffold-core";
import React from "react";
import type { AppSearchBarProps } from "./appSearchBar";
import { useAppSearchBarHelper } from "./appSearchBar.hook";

export const AppSearchBarMobile: React.FC<AppSearchBarProps> = (props) => {
  const {
    handleOnSubmit,
    handleOnChange,
    handleOnIconClicked,
    name,
    handleOnFocus,
  } = useAppSearchBarHelper(props);

  const { placeholder, styles } = props;

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
                rightIcon={
                  <div onClick={() => handleOnIconClicked()}>
                    <Typography styles={{ fontSize: "30px" }}>{"⌕"}</Typography>{" "}
                  </div>
                }
                onChange={handleOnChange}
                inputStyles={{
                  background: "#ffffff",
                  border: "2px solid #747474b4",
                  borderRadius: "100px",
                }}
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
        styles={{ alignItems: "center", justifyContent: "center" }}
      />
    </div>
  );
};
