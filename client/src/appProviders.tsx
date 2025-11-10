import { Pages } from "@constants";
import {
  FeedbackProvider,
  NavigationProvider,
} from "@eliseubatista99/react-scaffold-core";
import { Home } from "@screens";

export interface AppProvidersProps {
  children?: React.ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <FeedbackProvider>
      <NavigationProvider
        routes={[
          {
            path: Pages.home,
            render: <Home />,
          },
        ]}
      >
        {children}
      </NavigationProvider>
    </FeedbackProvider>
  );
};
