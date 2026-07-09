import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Sports from "../pages/Sports/Sports";
import SportDetails from "../pages/SportDetails/SportDetails";
import UnsettledBets from "../pages/UnsettledBets/UnsettledBets";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import Rules from "../pages/Rules/Rules";
import Casino from "../pages/Casino/Casino";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ForceChangePassword from "../components/modals/ForceChangePassword";
import Deposit from "../pages/Deposit/Deposit";
import Withdraw from "../pages/Withdraw/Withdraw";
import DepositReport from "../pages/DepositReport/DepositReport";
import WithdrawReport from "../pages/WithdrawReport/WithdrawReport";
import OpenBets from "../pages/OpenBets/OpenBets";
import BettingProfitLoss from "../pages/BettingProfitLoss/BettingProfitLoss";
import MyBankDetails from "../pages/MyBankDetails/MyBankDetails";
import Promotions from "../pages/Promotions/Promotions";
import BonusStatement from "../pages/BonusStatement/BonusStatement";
import LossbackBonus from "../pages/LossbackBonus/LossbackBonus";
import AppOnlyBonus from "../pages/AppOnlyBonus/AppOnlyBonus";
import Affiliate from "../pages/Affiliate/Affiliate";
import IFrame from "../pages/IFrame/IFrame";
import AffiliateUserProfitLoss from "../pages/AffiliateUserProfitLoss/AffiliateUserProfitLoss";
import AffiliateUserStatement from "../pages/AffiliateUserStatement/AffiliateUserStatement";
import MultiMarket from "../pages/MultiMarket/MultiMarket";
import Account from "../pages/Account/Account";
import PopularEvent from "../pages/PopularEvent/PopularEvent";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <PrivateRoute>
          <App />
        </PrivateRoute>
      ),
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
        {
          path: "/casino",
          element: <Casino />,
        },

        {
          path: "/deposit",
          element: <Deposit />,
        },
        {
          path: "/withdraw",
          element: <Withdraw />,
        },
        {
          path: "/deposit-report",
          element: <DepositReport />,
        },
        {
          path: "/withdraw-report",
          element: <WithdrawReport />,
        },
        {
          path: "/open-bets",
          element: <OpenBets />,
        },
        {
          path: "/betting-profit-loss",
          element: <BettingProfitLoss />,
        },
        {
          path: "/my-bank-details",
          element: <MyBankDetails />,
        },
        {
          path: "/promotions",
          element: <Promotions />,
        },
        {
          path: "/bonus-statement",
          element: <BonusStatement />,
        },
        {
          path: "/lossback-bonus",
          element: <LossbackBonus />,
        },
        {
          path: "/app-only-bonus",
          element: <AppOnlyBonus />,
        },
        {
          path: "/affiliate",
          element: <Affiliate />,
        },
        {
          path: "/:route/:name/:gameId",
          element: <IFrame />,
        },
        {
          path: "/affiliate/user-profit-loss",
          element: <AffiliateUserProfitLoss />,
        },
        {
          path: "/affiliate/user-statement",
          element: <AffiliateUserStatement />,
        },
        {
          path: "/multi-market",
          element: <MultiMarket />,
        },
        {
          path: "/account",
          element: <Account />,
        },
        {
          path: "/popular-event",
          element: <PopularEvent />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },

    {
      path: "/force-change-password",
      element: <ForceChangePassword />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },

    // {
    //   path: "/casino/:name/:gameId",
    //   element: <CasinoIFrame />,
    // },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  },
);
