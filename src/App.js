import { Route } from "react-router-dom";
import StorePage from "./pages/StorePage";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import NavbarReact from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import { useContext, useState } from "react";
import CartProvider from "./store/CartProvider";
import ContactUs from "./pages/ContactUs";
import LoginPage from "./pages/LoginPage";
import AuthContext from "./store/Auth-context";
import { Redirect } from "react-router-dom";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLogin;

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
          {isLogin && (
            <Route path="/home">
              <HomePage />
            </Route>
          )}
          {isLogin && (
            <Route path="/store">
              <StorePage
                showCart={showCart}
                hideCartHandler={hideCartHandler}
              />
            </Route>
          )}
          {isLogin && (
            <Route path="/about">
              <AboutUs />
            </Route>
          )}
          {isLogin && (
            <Route path="/contact-us">
              <ContactUs />
            </Route>
          )}
          {!isLogin && (
            <Route path="/login">
              <LoginPage />
            </Route>
          )}

          {isLogin && (
            <Route path="*">
              <Redirect to="/home" />
            </Route>
          )}

          {!isLogin && (
            <Route path="*">
              <Redirect to="/login" />
            </Route>
          )}
        </main>
      </CartProvider>
      <Footer />
    </>
  );
};

export default App;
