"use client";
import { setupListeners } from "@reduxjs/toolkit/query";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import { Provider } from "react-redux";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { es } from 'date-fns/locale/es';

import type { AppStore } from "@/shared/store/store";
import { makeStore } from "@/shared/store/store";

interface Props {
  readonly children: ReactNode;
}

export const Providers = ({ children }: Props) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  useEffect(() => {
    if (storeRef.current != null) {
      // configure listeners using the provided defaults
      // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);

  return (
    <Provider store={storeRef.current}>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={es}
      >
        {children}
      </LocalizationProvider>
    </Provider>);
};