import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navigation from "./components/header/Navigation";
import { Toaster } from "sonner";
import StoreProvider from "./storeProvider";
import BodyWrapper from "./BodyWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Merik Tattoo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en" data-theme="luxury" suppressHydrationWarning>
        <body className={inter.className}>
          <div className="flex flex-col h-full min-h-screen bg-gradient-to-b from-base-100 to-base-300">
            <div className="z-30 text-lg">
              <Navigation />
            </div>
            <BodyWrapper>{children}</BodyWrapper>
            <div className="z-30 justify-self-end">
              <Footer />
            </div>
            <Toaster richColors />
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
