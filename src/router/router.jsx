import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Sports from "../pages/Sports/Sports";
import SportDetails from "../pages/SportDetails/SportDetails";
import UnsettledBets from "../pages/UnsettledBets/UnsettledBets";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import Rules from "../pages/Rules/Rules";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/sports/:group",
          element: <Sports />,
        },
        {
          path: "/sports-details/:eventTypeId/:eventId",
          element: <SportDetails />,
        },
        {
          path: "/unsettled-bets",
          element: <UnsettledBets />,
        },
        {
          path: "/change-password",
          element: <ChangePassword />,
        },
        {
          path: "/rules",
          element: <Rules />,
        },
        // {
        //   path: "/casino",
        //   element: <Casino />,
        // },
        // {
        //   path: "/int-casino",
        //   element: <IntCasino />,
        // },
        // {
        //   path: "/change-password",
        //   element: <ChangePassword />,
        // },

        // {
        //   path: "/change-btn-value",
        //   element: <ChangeButtonValues />,
        // },
        // {
        //   path: "/account-statement",
        //   element: <AccountStatement />,
        // },
        // {
        //   path: "/deposit",
        //   element: <Deposit />,
        // },
        // {
        //   path: "/withdraw",
        //   element: <Withdraw />,
        // },
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },

    // {
    //   path: "/change-password-login",
    //   element: <ChangePasswordLogin />,
    // },
    // {
    //   path: "/forgot-password",
    //   element: <ForgotPassword />,
    // },
    // {
    //   path: "/casino/:name/:gameId",
    //   element: <CasinoIFrame />,
    // },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
