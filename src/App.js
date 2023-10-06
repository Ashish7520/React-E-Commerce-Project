import React, { useState } from "react";
import NavbarReact from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/cart";
import CartProvider from "./store/CartProvider";

const App = () => {
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
        <NavbarReact onShowCart={ShowCartHandler} />
        {ShowCart && <Cart onClick={hideCartHandler} />}
        <Product />
        <Footer />
      </CartProvider>
    </>
  );
};

export default App;
