import { Routes, Route } from "react-router-dom";
import { useState } from "react";

//components
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import GlobalPage from "./Pages/GlobalPage";

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
        <Route path="*" element={<GlobalPage />} />
      </Routes>
    </>
  );
}

export default App;
