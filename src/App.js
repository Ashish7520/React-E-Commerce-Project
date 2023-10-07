import { Route } from "react-router-dom";
import StorePage from "./pages/StorePage";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import NavbarReact from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
import ContactUs from "./pages/ContactUs";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <>
      <CartProvider>
        <NavbarReact onShowCart={showCartHandler} />
        <main>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/store">
            <StorePage showCart={showCart} hideCartHandler={hideCartHandler} />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/contact-us">
            <ContactUs />
          </Route>
        </main>
      </CartProvider>
      <Footer />
    </>
  );
};

export default App;
