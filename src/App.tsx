import { Routes, Route } from "react-router-dom";
import { useState } from "react";

export const baseURL = import.meta.env.VITE_BASE_URL;

//components
import GlobalPage from "./Pages/GlobalPage";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import ProductList from "./Pages/ProductList";
import AboutUs from "./Pages/AboutUs";
import ProductDetails from "./Pages/ProductDetails";
// import ProductPayment from "./Pages/ProductPayment";
import BlogPage from "./Pages/BlogPage";
import BlogDetails from "./Pages/BlogDetails";
import Teams from "./Pages/Teams";
import Login from "./Pages/LogIn";
import Career from "./Pages/Careers";
import CareerDetails from "./Pages/CareerDetails";
import FAQ from "./Pages/FAQ";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import ContactUs from "./Pages/ContactUs";
import TermsOfUse from "./Pages/TermsOfUse";
import Reffer from "./Pages/Reffer";
import UserPage from "./Pages/UserPage";
import PaymentCheckOut from "./Pages/PaymentCheckOut";

//Protect Route
import ProtectedRoute from "./Util/Tools/ProtectedRoute";

function App() {
  const [currentNav, setCurrentNav] = useState<string>("");

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home setCurrentNav={setCurrentNav} currentNav={currentNav} />
          }
        />
        <Route
          path="/services"
          element={
            // <ProtectedRoute>
            <Services setCurrentNav={setCurrentNav} currentNav={currentNav} />
            //  </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            // <ProtectedRoute>
            <ProductList
              setCurrentNav={setCurrentNav}
              currentNav={currentNav}
            />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <AboutUs setCurrentNav={setCurrentNav} currentNav={currentNav} />
          }
        />
        <Route
          path="/services/product-details"
          element={
            // <ProtectedRoute>
            <ProductDetails
              setCurrentNav={setCurrentNav}
              currentNav={currentNav}
            />
            // </ProtectedRoute>
          }
        />
        {/* <Route
          path="/services/product-details/payment"
          element={
            // <ProtectedRoute>
            <ProductPayment
              setCurrentNav={setCurrentNav}
              currentNav={currentNav}
            />
            // </ProtectedRoute>
          }
        /> */}
        <Route
          path="/blog"
          element={
            // <ProtectedRoute>
            <BlogPage setCurrentNav={setCurrentNav} currentNav={currentNav} />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/blog-details"
          element={
            // <ProtectedRoute>
            <BlogDetails
              setCurrentNav={setCurrentNav}
              currentNav={currentNav}
            />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/team"
          element={
            // <ProtectedRoute>
            <Teams setCurrentNav={setCurrentNav} currentNav={currentNav} />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/Login"
          element={
            <Login setCurrentNav={setCurrentNav} currentNav={currentNav} />
          }
        />
        <Route
          path="/careers"
          element={
            // <ProtectedRoute>
            <Career setCurrentNav={setCurrentNav} currentNav={currentNav} />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/career-details"
          element={
            // <ProtectedRoute>
            <CareerDetails
              setCurrentNav={setCurrentNav}
              currentNav={currentNav}
            />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/f&q"
          element={
            // <ProtectedRoute>
            <FAQ setCurrentNav={setCurrentNav} currentNav={currentNav} />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <PrivacyPolicy
              setCurrentNav={setCurrentNav}
              currentNav={currentNav}
            />
          }
        />
        <Route
          path="/refund-policy"
          element={
            // <ProtectedRoute>
            <RefundPolicy
              setCurrentNav={setCurrentNav}
              currentNav={currentNav}
            />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/contact-us"
          element={
            <ProtectedRoute>
              <ContactUs
                setCurrentNav={setCurrentNav}
                currentNav={currentNav}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/terms-of-use"
          element={
            <TermsOfUse setCurrentNav={setCurrentNav} currentNav={currentNav} />
          }
        />
        <Route
          path="/reffer"
          element={
            // <ProtectedRoute>
            <Reffer setCurrentNav={setCurrentNav} currentNav={currentNav} />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/user-profile"
          element={
            <ProtectedRoute>
              <UserPage setCurrentNav={setCurrentNav} currentNav={currentNav} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/services/product-details/payment-checkout"
          element={
            <ProtectedRoute>
              <PaymentCheckOut
                setCurrentNav={setCurrentNav}
                currentNav={currentNav}
              />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<GlobalPage />} />
      </Routes>
    </>
  );
}

export default App;
