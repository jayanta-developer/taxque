import { Routes, Route } from "react-router-dom";

//components
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import GlobalPage from "./Pages/GlobalPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<GlobalPage />} />
      </Routes>
    </>
  );
}

export default App;
