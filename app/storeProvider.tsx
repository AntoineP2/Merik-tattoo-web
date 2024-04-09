"use client";
import React from "react";
import { Provider } from "react-redux";
import appStore from "@/store/app.store";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={appStore}>{children}</Provider>;
};

export default StoreProvider;
