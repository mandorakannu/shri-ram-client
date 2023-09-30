import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@store/store";
import { ChakraProvider } from "@chakra-ui/react";
import UserCreateProvider from "context/UserCreateContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider>
          <UserCreateProvider>
            <App />
          </UserCreateProvider>
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
