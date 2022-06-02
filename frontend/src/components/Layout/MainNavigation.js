import { useContext } from "react";
import { Link } from "react-router-dom";
import starIcon from "../../resources/favorites.png";
import userIcon from "../../resources/account.png";
import AuthContext from "../../store/auth-context";

import classes from "./MainNavigation.module.css";

const axios = require("axios");

const MainNavigation = () => {
  const ctx = useContext(AuthContext);

  const isLoggedIn = ctx.isLoggedIn;
  const username = ctx.username;

  const logoutHandler = async () => {
    axios
      .post(
        "http://localhost:3001/users/logout",
        {},
        {
          headers: {
            Authorization: "Bearer " + ctx.token,
          },
        }
      )
      .then(function (response) {
        console.log("Logout succes");
        ctx.logout();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Proiect Diploma</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <Link to="/favs">
                Favs <img src={starIcon} className={classes.navImg} />{" "}
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">
                {username} <img src={userIcon} className={classes.navImg} />
              </Link>
            </li>
          )}

          {isLoggedIn && (
            <li>
              <Link to="/create">
                <button> Create new event</button>
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
