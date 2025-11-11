import { Pages } from "@constants";
import {
  FeedbackProvider,
  NavigationProvider,
} from "@eliseubatista99/react-scaffold-core";
import { Home, Splash } from "@screens";
import { Basket } from "./screens/basket";
import { Explore } from "./screens/explore";
import { ForYou } from "./screens/forYou";

export interface AppProvidersProps {
  children?: React.ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <FeedbackProvider>
      <NavigationProvider
        routes={[
          {
            path: Pages.splash,
            render: <Splash />,
          },
          {
            path: Pages.home,
            render: <Home />,
          },
          {
            path: Pages.forYou,
            render: <ForYou />,
          },
          {
            path: Pages.basket,
            render: <Basket />,
          },
          {
            path: Pages.explore,
            render: <Explore />,
          },
        ]}
      >
        {children}
      </NavigationProvider>
    </FeedbackProvider>
  );
};
