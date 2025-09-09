import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home/Home";
import Dashboard from "./page/dashboard/Dashboard";
import Page from "./page/Page";
import Layout from "./layout/Layout";
import Cartpage from "./page/Cart/Cartpage";
import FAQ from "./page/FAQ/FAQ";
import PrivacyPolicy from "./page/Privacy-Policy/PrivacyPolicy";
import DisclaimerPage from './page/DisclaimerPage/DisclaimerPage';
import TermsAndConditions from "./page/terms&condition/TermsAndConditions";
import RightsEnforcementPolicy from "./page/right&enforcement/RightsEnforcementPolicy";
import LimitationOfLiability from "./page/limitationOfLiability/Liability";
import GeneralInformation from "./page/generalInformation/generalInfo";
import EyeglassesContactPolicy from "./page/eyeglasses-contact-policy/EyeglassesContactPolicy";
// import RightsEnforcementPolicy from "./page/rights-enforcement-policy/RightsEnforcementPolicy";
import Unauthorization from "./page/Unauthorised/Unauthorization";
import Registrationform from "./page/CustomerRegistration/Registrationform";
import Checkout from "./page/Checkout/Checkout";
import EyeConsultation from "./page/EyeConsultation/EyeConsultation";
import InquiryForm from "./page/InquiryForm/InquiryForm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cart",
        element: <Cartpage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/disclaimer",
        element: <DisclaimerPage />
      },
      {
        path: "/termsandconditon",
        element: <TermsAndConditions />
      },
      {
        path: "/RightsEnforcementPolicy",
        element: <RightsEnforcementPolicy />
      },
      {
        path: "/liability",
        element: <LimitationOfLiability />
      },
      {
        path: "/general-info",
        element: <GeneralInformation />
      },
      {
        path: "/eyeglasses-contact-policy",
        element: <EyeglassesContactPolicy />
      },
      {
        path: "/rights-enforcement-policy",
        element: <RightsEnforcementPolicy />
      },
      {
        path: "*",
        element: <Page />,
      },
      {
        path: "/unauthorization",
        element: <Unauthorization />
      },
      {
        path: "/registrationform",
        element: <Registrationform />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
      {
        path: "/eye-consultation",
        element: <EyeConsultation />
      },
      {
        path: "/inquiry-form",
        element: <InquiryForm />
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
