import { Pages } from "@constants";
import {
  FeedbackProvider,
  NavigationProvider,
} from "@eliseubatista99/react-scaffold-core";
import { Basket, Explore, ForYou, Home, Search, Splash } from "@screens";
import { ProductList } from "./screens/productList";

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
          {
            path: Pages.search,
            render: <Search />,
          },
          {
            path: Pages.productList,
            render: <ProductList />,
          },
        ]}
      >
        {children}
      </NavigationProvider>
    </FeedbackProvider>
  );
};
