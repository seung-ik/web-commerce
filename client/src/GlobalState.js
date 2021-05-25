import React, { useState, createContext } from "react";
import ProductApi from "./api/ProductsApi";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false);

  const state = {
    token: [token, setToken],
    productApi: ProductApi(),
  };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
