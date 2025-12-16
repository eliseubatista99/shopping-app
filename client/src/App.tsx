import { AppLoader } from "@components";
import { PAGES } from "@constants";
import {
  AddAddressDrawer,
  AddCardPaymentMethodDrawer,
  EditAddressDrawer,
  EditCardPaymentMethodDrawer,
  OrderFiltersDrawer,
  ProductFiltersDrawer,
  ReviewFiltersDrawer,
  SelectAddressDrawer,
  SelectPaymentMethodDrawer,
} from "@drawers";
import {
  FeedbackProvider,
  NavigationProvider,
} from "@eliseubatista99/react-scaffold-core";
import { GenericApiErrorModal, TryAgainClientInfoModal } from "@modals";
import { OverlayLoader, OverlaySearch } from "@overlays";
import {
  Addresses,
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
  MyReviews,
  NotFound404,
  OrderDetails,
  Orders,
  PaymentMethods,
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
import { ClientInfoChangedToast, ReviewSubmittedToast } from "@toasts";
import { useAppHelper } from "./App.hook";

export interface AppProvidersProps {
  children?: React.ReactNode;
}

export const App = () => {
  const { isReady } = useAppHelper();

  return (
    <FeedbackProvider>
      <NavigationProvider
        isReady={isReady}
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
          {
            path: PAGES.PAYMENT_METHODS,
            render: <PaymentMethods />,
          },
          {
            path: PAGES.ADDRESSES,
            render: <Addresses />,
          },
          {
            path: PAGES.MY_REVIEWS,
            render: <MyReviews />,
          },
        ]}
      >
        <AppLoader
          visible={!isReady}
          styles={{
            zIndex: 0,
            background: "#ffffff",
            position: "absolute",
            margin: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        <GenericApiErrorModal />
        <TryAgainClientInfoModal />

        <SelectPaymentMethodDrawer />
        <ProductFiltersDrawer />
        <SelectAddressDrawer />
        <AddAddressDrawer />
        <EditAddressDrawer />
        <ReviewFiltersDrawer />
        <OrderFiltersDrawer />
        <AddCardPaymentMethodDrawer />
        <EditCardPaymentMethodDrawer />

        <OverlayLoader />
        <OverlaySearch />

        <ReviewSubmittedToast />
        <ClientInfoChangedToast />
      </NavigationProvider>
    </FeedbackProvider>
  );
};
