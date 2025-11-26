import { PAGES } from "@constants";
import {
  FeedbackProvider,
  NavigationProvider,
} from "@eliseubatista99/react-scaffold-core";
import {
  AllReviews,
  Basket,
  Checkout,
  Explore,
  ForYou,
  Home,
  NotFound404,
  OrderDetails,
  Orders,
  ProductDetails,
  ProductList,
  Splash,
  WriteReview,
} from "@screens";
import { useAppHelper } from "./App.hook";

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
            path: PAGES.SPLASH,
            render: <Splash />,
          },
          {
            path: PAGES.NOT_FOUND,
            render: <NotFound404 />,
          },
          {
            path: PAGES.HOME,
            render: <Home />,
          },
          {
            path: PAGES.FOR_YOU,
            render: <ForYou />,
          },
          {
            path: PAGES.CART,
            render: <Basket />,
          },
          {
            path: PAGES.EXPLORE,
            render: <Explore />,
          },
          {
            path: PAGES.PRODUCT_LIST,
            render: <ProductList />,
          },
          {
            path: PAGES.PRODUCT_DETAILS,
            render: <ProductDetails />,
          },
          {
            path: PAGES.WRITE_REVIEW,
            render: <WriteReview />,
          },
          {
            path: PAGES.ALL_REVIEWS,
            render: <AllReviews />,
          },
          {
            path: PAGES.CHECKOUT,
            render: <Checkout />,
          },
          {
            path: PAGES.ORDERS,
            render: <Orders />,
          },
          {
            path: PAGES.ORDER_DETAILS,
            render: <OrderDetails />,
          },
        ]}
      >
        {children}
      </NavigationProvider>
    </FeedbackProvider>
  );
};
