import { useState, useRef, useContext } from "react";
import AuthContext from "../store/Auth-context";
import { useHistory } from "react-router-dom";
import classes from "./Login.module.css";

const LoginPage = () => {
  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();
  const [isLogin, setIsLogin] = useState(false);
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const toggleHandler = () => {
    setIsLogin(!isLogin);
  };

  const formHandler = async (event) => {
    event.preventDefault();
    const enteredEmail = inputEmailRef.current.value;
    const enteredPassword = inputPasswordRef.current.value;

    console.log(enteredEmail, enteredPassword);
    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBwg9m7T7PICwj7lHrzj9y5ktkgzEstCJo";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBwg9m7T7PICwj7lHrzj9y5ktkgzEstCJo";
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        authCtx.login(data.idToken);
        history.replace("/home");
      } else {
        const error = await response.json();
        alert(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.heading}>{isLogin ? "Login" : "Sign up"}</h2>
        <form onSubmit={formHandler}>
          <label htmlFor="email">E-mail</label>
          <input id="email" type="email" ref={inputEmailRef} />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" ref={inputPasswordRef} />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          <button onClick={toggleHandler}>
            {isLogin ? "New User - Sign Up" : "Existing User - Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
