"use client";
import { Avatar, IconButton } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { handleToggleDrawer } from "@/shared/store/slices/uiSlice";
import { drawerWidth } from "../constants/drawerWidth";

import Image from "next/image";
import HamburgerIcon from "@/shared/assets/icons/hamburger.svg";
import NotificationIcon from "@/shared/assets/icons/notification.svg";
import UserPicture from "@/shared/assets/users/UserProfile.jpg";

const AppTopbar = () => {
  const dispatch = useAppDispatch();
  const { isDrawerOpen } = useAppSelector((state) => state.ui);

  return (
    <header
      className={`
        fixed top-0 right-0 h-16 shadow-md bg-white flex items-center 
        transition-[width] duration-300 
      `}
        style={{
          width: isDrawerOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
        }}
    >
      <div className="flex w-full items-center justify-between px-6">
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => dispatch(handleToggleDrawer())}
          className="p-2"
        >
          <Image
            src={HamburgerIcon}
            alt="Hamburguer icon"
            height={24}
            width={24}
          />
        </IconButton>

        <div className="flex items-center">
          <Image
            src={NotificationIcon}
            alt="Notification icon"
            height={24}
            width={24}
            className="mr-6"
          />

          <Image
            src={UserPicture}
            className="rounded-full"
            alt="User profile picture"
            height={40}
            width={40}
          />
        </div>
      </div>
    </header>
  );
};

export default AppTopbar;
