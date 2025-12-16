import { AppButton } from "@components";
import { DRAWERS } from "@constants";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { LanguageHelper } from "@helpers";
import { AppDrawer } from "../_appDrawer";
import { useSelectLanguageDrawerHelper } from "./selectLanguage.hook";

export const DrawerSelectLanguageMobile = () => {
  const { i18n, options, onClickSubmit, onClose } =
    useSelectLanguageDrawerHelper();

  const optionsJSX = options.map((o) => {
    const selectedStyles: React.CSSProperties = o.isSelected
      ? {
          border: "1px solid #da5f18ff",
          background: "#ffeadeff",
        }
      : {};

    return (
      <div
        key={o.option}
        onClick={o.onClick}
        style={{
          border: "1px solid #727272ff",
          padding: "10px",
          gap: "8px",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "12px",
          ...selectedStyles,
        }}
      >
        <Typography>{o.text}</Typography>
        {LanguageHelper.getFlag(o.option)}
      </div>
    );
  });

  return (
    <AppDrawer
      id={DRAWERS.SELECT_LANGUAGE}
      childrenStyles={{ gap: "12px" }}
      canBeClosed
      onClose={onClose}
    >
      <Typography
        styles={{
          fontSize: "18px",
          fontWeight: 600,
        }}
      >
        {i18n.title}
      </Typography>

      <div
        style={{
          width: "100%",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {optionsJSX}
      </div>

      <AppButton
        text={{
          content: i18n.actions.submit,
        }}
        onClick={onClickSubmit}
      />
    </AppDrawer>
  );
};
