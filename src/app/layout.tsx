"use client"

import { Provider } from "react-redux";
import { store } from "@/lib/store";
import "./globals.css";
import Navbar from "@/components/NavBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar/>
          {children}
        </Provider>
      </body>
    </html>
  );
}
