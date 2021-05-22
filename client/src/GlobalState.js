import React, { useState, createContext } from "react";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  return <GlobalState.Provider value={"value in global"}>{children}</GlobalState.Provider>;
};
