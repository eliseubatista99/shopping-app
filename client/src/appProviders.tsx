import { Pages } from "@constants";
import {
  FeedbackProvider,
  NavigationProvider,
} from "@eliseubatista99/react-scaffold-core";
import {
  Basket,
  Explore,
  ForYou,
  Home,
  ProductDetails,
  Splash,
} from "@screens";
import { useAppHelper } from "./App.hook";
import { ProductList } from "./screens/productList";

export interface AppProvidersProps {
  children?: React.ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  const { isAppInitialized } = useAppHelper();

  return (
    <FeedbackProvider>
      <NavigationProvider
        isReady={isAppInitialized}
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
            path: Pages.productList,
            render: <ProductList />,
          },
          {
            path: Pages.productDetails,
            render: <ProductDetails />,
          },
        ]}
      >
        {children}
      </NavigationProvider>
    </FeedbackProvider>
  );
};
