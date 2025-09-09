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
// import Unauthorization from "./page/Unauthorised/Unauthorization";
// import Registrationform from "./page/CustomerRegistration/Registrationform";
import Checkout from "./page/Checkout/Checkout";
// import EyeConsultation from "./page/EyeConsultation/EyeConsultation";
// import InquiryForm from "./page/InquiryForm/InquiryForm";
import InsuranceClaimForm from "./page/form/InsuranceClaimForm";
import DocumentUploadForm from "./page/form/DocumentUploadForm";
import OrderPlaced from "./page/order/OrderPlaced";
import Register from "./page/register/Register";
import Services from "./components/Services";


function App() {
  const [currentUserId, setCurrentUserId] = useState(localStorage.getItem("user"));

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUserId(storedUser);
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
        { path: "/faq", element: <FAQ /> },
        { path: "/privacy-policy", element: <PrivacyPolicy /> },
        {
          path: "/allproduct",
          element: <Product userId={currentUserId} />
        },
        { path: "/disclaimer", element: <DisclaimerPage /> },
        { path: "/termsandcondition", element: <TermsAndConditions /> },
        { path: "/liability", element: <LimitationOfLiability /> },
        { path: "/general-info", element: <GeneralInformation /> },
        { path: "/eyeglasses-contact-policy", element: <EyeglassesContactPolicy /> },
        { path: "/rights-enforcement-policy", element: <RightsEnforcementPolicy /> },

        //  Protected Routes
        {
          path: "/cart",
          element: (
            // <ProtectedRoute>
            <Cartpage />
            // </ProtectedRoute>
          ),
        },
        {
          path: "/viewcart",
          element: (
            // <ProtectedRoute>
            <ViewCart />
            // </ProtectedRoute>
          ),
        },
        {
          path: "/checkout",
          element: (
            // <ProtectedRoute>
            <PayPalScriptProvider
              options={{ "client-id": "AXf1IDZMUR6E_q8lxGRiRvOAnLZ3E5DgnyYAV0eaIB3VdLn4KlZ9Msm8kZyvu_XLGcziwc31Lc7nrWPY", currency: "USD" }}
            >
              <Checkout />
            </PayPalScriptProvider>
            // </ProtectedRoute>
          ),
        },
        {
          path: "contact-us",
          element: <ContactPage />
        },
        {
          path: "book-eye-exam",
          element: <EyeExam />
        },
        {
          path: "/form",
          element: <InsuranceClaimForm />,
        },
        {
          path: "/form-new",
          element: <DocumentUploadForm />,
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/place-order",
          element: (
            // <ProtectedRoute>
            <OrderPlaced />
            // </ProtectedRoute>
          ),
        },
        {
          path: "/wishlist-page",
          element: (
            // <ProtectedRoute>
            <WishlistPage userId={currentUserId} />
            // </ProtectedRoute>
          ),
        },

        { path: "*", element: <Page /> },
      ],
    },

    // Protected Dashboard
    {
      path: "/dash",
      element: (
        <ProtectedRoute>
          <Dashboardlayout />
        </ProtectedRoute>
      ),
      children: [
        { path: "/dash", element: <CustHome /> },
        { path: "/dash/about", element: <About /> },
        { path: "/dash/faq", element: <Faq /> },
        { path: "*", element: <Page /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
