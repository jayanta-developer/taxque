import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./Util/context/AuthContext.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { HelmetProvider } from "react-helmet-async";


createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  </Provider>
);
