import React from "react";
import Product from "../components/Product/Product";
import Cart from "../components/Cart/cart";
import CartProvider from "../store/CartProvider";

const StorePage = (props) => {
  return (
    <>
      <CartProvider>
        {props.showCart && <Cart onClick={props.hideCartHandler} />}
        <Product />
      </CartProvider>
    </>
  );
};

export default StorePage;
