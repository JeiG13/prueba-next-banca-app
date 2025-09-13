"use client";
import { Avatar, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { handleToggleDrawer } from "@/shared/store/slices/uiSlice";
import { drawerWidth } from "../constants/drawerWidth";

import HamburgerIcon from "@/shared/assets/icons/hamburger.svg";
import NotificationIcon from "@/shared/assets/icons/notification.svg";
import ControlledTextfield from "@/shared/components/inputs/ControlledTextfield";
import { MdSearch } from "react-icons/md";

type SearchFormType = {
  search: string;
}

const AppTopbar = () => {
  const dispatch = useAppDispatch();
  const { isDrawerOpen } = useAppSelector((state) => state.ui);
  const { loggedUser } = useAppSelector((state) => state.user);

  const { control } = useForm<SearchFormType>({
    defaultValues: { search: '' }
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <header
      className={`
        fixed top-0 right-0 h-16 shadow-md bg-white flex items-center z-[999]
        transition-[width] duration-300 
      `}
        style={{
          width: !isMobile &&isDrawerOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
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

          <div className="mr-6">
            <ControlledTextfield<SearchFormType>
              control={control}
              name="search"
              label="Buscar"
              StartIcon={MdSearch}
            />
          </div>

          <Avatar
            className="h-[40] w-[40]"
            src={loggedUser?.profile_photo}
          />
        </div>
      </div>
    </header>
  );
};

export default AppTopbar;
