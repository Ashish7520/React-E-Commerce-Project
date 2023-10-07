import { Outlet } from "react-router-dom";

import NavbarReact from "../Navbar/Navbar";

import { useState } from "react";

import CartProvider from "../../store/CartProvider";
import Footer from "../Footer/footer";

const MainRoutes = () => {
  return (
    <>
      <CartProvider>
        <NavbarReact />
      </CartProvider>
      <Outlet />
      <Footer />
    </>
  );
};

export default MainRoutes;
