import { useContext, useState, useRef } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";
import { useNavigate } from "react-router-dom";

const axios = require("axios");

const AuthForm = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputAge = useRef();
  const inputName = useRef();
  const inputSurname = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const onSubmitFrom = (e) => {
    e.preventDefault();
    const enteredEmail = inputEmail.current.value;
    const enteredPassword = inputPassword.current.value;

    if (isLogin) {
      const login = async function () {
        axios
          .post("http://localhost:3001/users/login", {
            email: enteredEmail,
            password: enteredPassword,
          })
          .then(function (response) {
            console.log("Login succes");
            authCtx.login(
              response.data.token,
              `${response.data.user.surname} ${response.data.user.name}`
            );
            navigate("/");
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      login();
    } else {
      const enteredName = inputName.current.value;
      const enteredSurname = inputSurname.current.value;
      const enteredAge = inputAge.current.value;
      const register = async function () {
        axios
          .post("http://localhost:3001/users", {
            name: enteredName,
            surname: enteredSurname,
            age: Number.parseInt(enteredAge),
            email: enteredEmail,
            password: enteredPassword,
          })
          .then(function (response) {
            console.log("Register succes");
            authCtx.login(
              response.data.token,
              `${response.data.user.surname} ${response.data.user.name}`
            );
            navigate("/");
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      register();
    }
  };
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={onSubmitFrom}>
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="textName">Name</label>
            <input type="text" id="nameInput" required ref={inputName} />
          </div>
        )}
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="textSurname">Surname</label>
            <input type="text" id="surnameInput" required ref={inputSurname} />
          </div>
        )}
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="password">Age</label>
            <input type="number" id="ageInput" required ref={inputAge} />
          </div>
        )}
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={inputEmail} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={inputPassword} />
        </div>
        <div className={classes.actions}>
          <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
