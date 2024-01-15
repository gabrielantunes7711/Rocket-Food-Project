import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./hooks/auth";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { SkeletonTheme } from "react-loading-skeleton";

import { Routes } from "./routes";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SkeletonTheme
        baseColor="#0D161B"
        highlightColor="#0D1D25"
        borderRadius="0.8rem"
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </PersistGate>
        </Provider>
      </SkeletonTheme>
    </ThemeProvider>
  </React.StrictMode>
);
