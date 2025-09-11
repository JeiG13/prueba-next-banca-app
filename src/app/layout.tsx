import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "./StoreProvider";
import AppTopbar from "@/shared/layout/templates/AppTopbar";
import AppDrawer from "@/shared/layout/templates/AppDrawer";
import AppContentWrapper from "@/shared/layout/templates/AppContentWrapper";

const poppinsSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Prueba tecnica",
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
        </body>
      </StoreProvider>
    </html>
  );
}
