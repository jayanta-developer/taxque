import { Routes, Route } from "react-router-dom";
import { useState } from "react";

//components
import GlobalPage from "./Pages/GlobalPage";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import ProductDetails from "./Pages/ProductDetails";
import ProductPayment from "./Pages/ProductPayment";
import BlogPage from "./Pages/BlogPage";
import BlogDetails from "./Pages/BlogDetails";
import Teams from "./Pages/Teams";
import Login from "./Pages/LogIn";
import Careers from "./Pages/Careers";
import FAQ from "./Pages/FAQ";

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
            <Services setCurrentNav={setCurrentNav} currentNav={currentNav} />
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
            <ProductDetails
              setCurrentNav={setCurrentNav}
              currentNav={currentNav}
            />
          }
        />
        <Route
          path="/services/product-details/payment"
          element={
            <ProductPayment
              setCurrentNav={setCurrentNav}
              currentNav={currentNav}
            />
          }
        />
        <Route
          path="/blog"
          element={
            <BlogPage setCurrentNav={setCurrentNav} currentNav={currentNav} />
          }
        />
        <Route
          path="/blog-details"
          element={
            <BlogDetails
              setCurrentNav={setCurrentNav}
              currentNav={currentNav}
            />
          }
        />
        <Route
          path="/team"
          element={
            <Teams setCurrentNav={setCurrentNav} currentNav={currentNav} />
          }
        />
        <Route
          path="/Login"
          element={
            <Login setCurrentNav={setCurrentNav} currentNav={currentNav} />
          }
        />
        <Route
          path="/career"
          element={
            <Careers setCurrentNav={setCurrentNav} currentNav={currentNav} />
          }
        />
        <Route
          path="/f&q"
          element={
            <FAQ setCurrentNav={setCurrentNav} currentNav={currentNav} />
          }
        />

        <Route path="*" element={<GlobalPage />} />
      </Routes>
    </>
  );
}

export default App;
