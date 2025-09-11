"use client";

import { useAppSelector } from "@/shared/store/hooks";
import { drawerWidth } from "../constants/drawerWidth";

type AppContentWrapperProps = {
  children: React.ReactNode;
};

const AppContentWrapper = ({ children }: AppContentWrapperProps) => {
  const { isDrawerOpen } = useAppSelector((state) => state.ui);

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

      <div className="w-full">{children}</div>
    </main>
  );
};

export default AppContentWrapper;
