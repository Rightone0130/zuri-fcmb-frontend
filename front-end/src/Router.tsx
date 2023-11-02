import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Register } from "./pages/register/index.tsx";

import { LoanListing } from "./pages/loanListing/index.tsx";
import { PreviewLoanOffer } from "./pages/loanPreview/index.tsx";
import LoanOffer from "./pages/loanOffer/loanOffer.tsx";
import LoanOfferForm from "./pages/loanOfferForm/loanOfferForm.tsx";
import { Login } from "./pages/login/index.tsx";
import { VerifyBvn } from "./pages/verifyBvn/index.tsx";
import Home from "./pages/home/home.tsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/verify-bvn",
    element: <VerifyBvn />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/loan-listing",
    element: <LoanListing />,
  },
  {
    path: "/preview-loan-offer/:id",
    element: <PreviewLoanOffer />,
  },
  {
    path: "/LoanOffer",
    element: <LoanOffer />,
  },
  {
    path: "LoanOfferForm/:type",
    element: <LoanOfferForm />,
  },
]);
