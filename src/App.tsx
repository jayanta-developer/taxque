import { Routes, Route } from "react-router-dom";

//components
import Home from "./Pages/Home";
import GlobalPage from "./Pages/GlobalPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<GlobalPage />} />
      </Routes>
    </>
  );
}

export default App;
