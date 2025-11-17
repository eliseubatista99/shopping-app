import { PageLayout } from "@eliseubatista99/react-scaffold-core";
import { AppFooter } from "../appFooter";
import { AppHeader } from "../appHeader";
import type { AppLayoutProps } from "./appLayout";

export const AppLayoutMobile: React.FC<AppLayoutProps> = ({
  children,
  containerStyles,
  pageStyles,
  appHeader,
  reserveSpaceForScrollbar,
}) => {
  return (
    <PageLayout
      header={{
        content: <AppHeader {...appHeader} />,
        visibility: "always",
      }}
      footer={{
        content: <AppFooter />,
        visibility: "always",
      }}
      containerStyles={{ ...containerStyles }}
      reserveSpaceForScrollbar={reserveSpaceForScrollbar}
    >
      <div
        id="app-page"
        style={{
          width: "100%",
          flex: 1,
          flexDirection: "column",
          padding: "24px",
          ...pageStyles,
        }}
      >
        {children}
      </div>
    </PageLayout>
  );
};
