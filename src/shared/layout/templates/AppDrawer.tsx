"use client";

import Link from "next/link";
import { Divider, Drawer, List, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/shared/store/hooks";
import { useForm } from "react-hook-form";

import Headline3 from "@/shared/components/titles/Headline3";

import LogoLafise from "@/shared/assets/logos/LogoLafise.png";
import ExchangeIcon from "@/shared/assets/icons/exchange.svg";

import { drawerWidth } from "../constants/drawerWidth";
import NavigationItem from "../components/NavigationItem";
import { sidebarRoutes } from "../constants/sidebarRoutes";
import ControlledAutoComplete from "@/shared/components/inputs/ControlledAutocomplete";
import { handleToggleDrawer } from "@/shared/store/slices/uiSlice";

type ExchangeFormType = {
  localCurrency?: number | null;
  foreignCurrency?: number | null;
};

type Currency = {
  name: string;
  code: string;
}

const AppDrawer = () => {
  const { isDrawerOpen } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const { control } = useForm<ExchangeFormType>({
    defaultValues: { foreignCurrency: null, localCurrency: null }
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawer = () => {
    dispatch(handleToggleDrawer());
  };

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      anchor="left"
      open={isDrawerOpen} 
      onClose={isMobile ? handleDrawer : undefined}
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

      <div className="flex flex-col items-center justify-start mx-4">
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

        
        <div className="w-full mt-6">
          <Divider />
          <div className="mt-2">
            <Headline3 title="Tasa de cambio" />
          </div>

            <div className="mt-2 w-full grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <ControlledAutoComplete<ExchangeFormType, Currency>
                  name="localCurrency"
                  codeKey="name"
                  labelKey="name"
                  label="Córdoba"
                  options={[]}
                  sx={{ backgroundColor: 'white' }}
                  control={control}
                />
              </div>
              <div>
                <ControlledAutoComplete<ExchangeFormType, Currency>
                  name="foreignCurrency"
                  codeKey="code"
                  labelKey="name"
                  label="USD"
                  sx={{ backgroundColor: 'white' }}
                  options={[]}
                  control={control}
                />
              </div>
            </div>

          <div className="w-full my-2 flex flex-row justify-between items-center">
            <div>
              <Headline3 title="NIO: 35.1" weight="semibold" />
            </div>
            <div>
              <Image
                src={ExchangeIcon}
                alt="Exchange icon"
                height={24}
                width={24}
              />
            </div>
            <div>
              <Headline3 title="USD: 35.95" weight="semibold" />
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default AppDrawer;