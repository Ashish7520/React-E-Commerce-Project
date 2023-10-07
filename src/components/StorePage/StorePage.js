import React, { useState } from "react";
import NavbarReact from "../Navbar/Navbar";
import Footer from "../Footer/footer";
import Product from "../Product/Product";
import Cart from "../Cart/cart";
import CartProvider from "../../store/CartProvider";

const StorePage = (props) => {
  const [ShowCart, setShowCart] = useState(false);

  const ShowCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      <CartProvider>
        {/* <NavbarReact onShowCart={ShowCartHandler} /> */}
        {ShowCart && <Cart onClick={hideCartHandler} />}
        <Product />
      </CartProvider>
    </>
  );
};

export default StorePage;
