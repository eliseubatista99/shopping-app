import { PAGES } from "@constants";
import {
  FeedbackProvider,
  NavigationProvider,
} from "@eliseubatista99/react-scaffold-core";
import {
  AllReviews,
  Cart,
  ChangeEmail,
  ChangeName,
  ChangePassword,
  ChangePhone,
  Checkout,
  ForYou,
  Home,
  LogIn,
  NotFound404,
  OrderDetails,
  Orders,
  ProductDetails,
  ProductList,
  Settings,
  SignIn,
  SignInAndSecurity,
  SignUpOrLogin,
  Splash,
  Wishlist,
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
            path: PAGES.SIGN_UP_OR_LOGIN,
            render: <SignUpOrLogin />,
          },
          {
            path: PAGES.SIGN_UP,
            render: <SignIn />,
          },
          {
            path: PAGES.LOG_IN,
            render: <LogIn />,
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
            render: <Cart />,
          },
          {
            path: PAGES.SETTINGS,
            render: <Settings />,
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
          {
            path: PAGES.WISHLIST,
            render: <Wishlist />,
          },
          {
            path: PAGES.SIGN_IN_AND_SECURITY,
            render: <SignInAndSecurity />,
          },
          {
            path: PAGES.CHANGE_NAME,
            render: <ChangeName />,
          },
          {
            path: PAGES.CHANGE_EMAIL,
            render: <ChangeEmail />,
          },
          {
            path: PAGES.CHANGE_PHONE,
            render: <ChangePhone />,
          },
          {
            path: PAGES.CHANGE_PASSWORD,
            render: <ChangePassword />,
          },
        ]}
      >
        {children}
      </NavigationProvider>
    </FeedbackProvider>
  );
};
