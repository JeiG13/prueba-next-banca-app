"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { getUserInfo } from "@/shared/store/thunks/userThunk";

import { drawerWidth } from "../constants/drawerWidth";
import { resetUserSlice } from "@/shared/store/slices/userSlice";

type AppContentWrapperProps = {
  children: React.ReactNode;
};

const AppContentWrapper = ({ children }: AppContentWrapperProps) => {
  const { isDrawerOpen } = useAppSelector((state) => state.ui);

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getUserInfo(1));

    return () => {
      dispatch(resetUserSlice());  
    }
  }, [dispatch]);

  return (
    <main
      className="flex-grow min-h-screen bg-gray-100 transition-all"
      style={{
        width: isDrawerOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
        marginLeft: isDrawerOpen ? `${drawerWidth}px` : "0",
        transitionProperty: "margin, width",
        transitionTimingFunction: isDrawerOpen ? "ease-out" : "ease-in",
      }}
    >
      <div className="flex items-center justify-between px-4 my-1 h-16" />

      <div className="w-full px-4 py-6">{children}</div>
    </main>
  );
};

export default AppContentWrapper;
