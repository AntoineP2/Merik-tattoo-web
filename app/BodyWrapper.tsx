"use client";
import { RootState } from "@/store/app.store";
import React from "react";
import { useSelector } from "react-redux";

const BodyWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isOpen } = useSelector((state: RootState) => state.app);
  return (
    <div
      className={`md:mx-[10%] px-[5%] mb-14 md:px-2 h-full pb-5 flex-grow md:pb-0 pt-28 z-10 text-md ${
        isOpen ? "blur-lg brightness-50 md:filter-none" : "filter-none"
      }`}
    >
      {children}
    </div>
  );
};

export default BodyWrapper;
