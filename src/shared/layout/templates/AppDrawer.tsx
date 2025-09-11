"use client";

import Link from "next/link";
import { Drawer, List } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import LogoLafise from "@/shared/assets/logos/LogoLafise.png";
import Image from "next/image";

import { drawerWidth } from "../constants/drawerWidth";
import NavigationItem from "../components/NavigationItem";
import { sidebarRoutes } from "../constants/sidebarRoutes";

const AppDrawer = () => {
  const dispatch = useAppDispatch();
  const { isDrawerOpen } = useAppSelector((state) => state.ui);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isDrawerOpen}
      slotProps={{
        paper: {
          className: `text-white flex-shrink-0`,
          sx: { width: drawerWidth, backgroundColor: '#f9f9f9' }
        }
      }}
    >
      <div className="sticky top-0 z-50">
        <div className="flex items-center justify-center my-8">
          <Link href="/">
            <Image
              src={LogoLafise}
              alt="Notification icon"
              width={192}
            />
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center mx-6">
        <List>
          {
            sidebarRoutes.map((route) => (
              <NavigationItem
                Icon={route.Icon}
                title={route.title}
                path={route.route}
                key={`${route.route} ${route.title}`}
              />
            ))
          }
        </List>
      </div>
    </Drawer>
  );
};

export default AppDrawer;