import { PageLayout } from "@eliseubatista99/react-scaffold-core";
import { AppFooter } from "../appFooter";
import { AppHeader } from "../appHeader";
import type { AppLayoutProps } from "./appLayout";

export const AppLayoutMobile: React.FC<AppLayoutProps> = ({
  children,
  containerStyles,
  pageStyles,
  appHeader,
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
      pageStyles={{ ...pageStyles }}
    >
      {children}
    </PageLayout>
  );
};
