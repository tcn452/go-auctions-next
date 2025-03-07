"use client"

import { SessionProvider } from "next-auth/react"
import Topbar from "../topbar";
import Navbar from "../Navbar";




const NavSess = ({ children }:  Readonly<{
    children: React.ReactNode;
  }>) => {
  

  return (
    <>
        <SessionProvider>
            <Topbar />
            <Navbar />
            {children}
        </SessionProvider>
    </>
  );
};

export default NavSess;