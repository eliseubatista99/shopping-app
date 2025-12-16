import { PageLayout } from "@eliseubatista99/react-scaffold-core";
import { AppFooter } from "../appFooter";
import { AppHeader } from "../appHeader";
import type { AppLayoutProps } from "./appLayout";

export const AppLayoutMobile: React.FC<AppLayoutProps> = ({
  children,
  containerStyles,
  pageStyles,
  appHeader,
  appFooter,
  reserveSpaceForScrollbar,
}) => {
  return (
    <PageLayout
      header={
        appHeader
          ? {
              content: <AppHeader {...appHeader} />,
              visibility: "always",
            }
          : undefined
      }
      footer={
        appFooter
          ? {
              content: <AppFooter />,
              visibility: "always",
            }
          : undefined
      }
      containerStyles={{ background: "#ffffff", ...containerStyles }}
      reserveSpaceForScrollbar={reserveSpaceForScrollbar}
    >
      <div
        id="app-page"
        style={{
          width: "100%",
          flex: 1,
          flexDirection: "column",
          padding: "24px 12px",
          ...pageStyles,
        }}
      >
        {children}
      </div>
    </PageLayout>
  );
};
