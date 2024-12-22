// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./css/tailwind.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";

import UserProvider from "./context/UserProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
export const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <GoogleOAuthProvider
    clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_API_KEY}
  >
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </UserProvider>
    </QueryClientProvider>
  </GoogleOAuthProvider>
  // </StrictMode>
);
