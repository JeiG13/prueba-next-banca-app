import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Bounce, ToastContainer } from "react-toastify";

import "./globals.css";

import AppTopbar from "@/shared/layout/templates/AppTopbar";
import AppDrawer from "@/shared/layout/templates/AppDrawer";
import AppContentWrapper from "@/shared/layout/templates/AppContentWrapper";

import { StoreProvider } from "./StoreProvider";

const poppinsSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Banca net",
  description: "App prueba tecnica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StoreProvider>
        <body
          className={`${poppinsSans.variable} antialiased`}
        >
          <AppTopbar />
          <AppDrawer />
          <AppContentWrapper>
            {children}
          </AppContentWrapper>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
            style={{ zIndex: 99999 }}
          />
        </body>
      </StoreProvider>
    </html>
  );
}
