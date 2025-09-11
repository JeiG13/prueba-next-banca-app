"use client";

import { useAppSelector } from "@/shared/store/hooks";
import { drawerWidth } from "../constants/drawerWidth";
import { Box, useTheme } from "@mui/material";

type AppContentWrapperProps = {
  children: React.ReactNode;
};

const AppContentWrapper = ({ children }: AppContentWrapperProps) => {
  const { isDrawerOpen } = useAppSelector((state) => state.ui);
  const theme = useTheme();

  return (
    <Box
      component="main"
      className="min-h-screen flex-grow"
      sx={{
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ml: isDrawerOpen ? 0 : `-${drawerWidth}px`,
        transitionProperty: 'margin,width',
        transitionTimingFunction: isDrawerOpen
          ? theme.transitions.easing.easeOut
          : theme.transitions.easing.sharp,
        transitionDuration: isDrawerOpen
          ? theme.transitions.duration.enteringScreen
          : theme.transitions.duration.leavingScreen,
      }}
    >
      <div className="h-16" />

      <div className="w-full">{children}</div>
    </Box>
  );
};

export default AppContentWrapper;
