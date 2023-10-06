import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import "./Header.styles.scss";
import { LoginContext } from "../../../context/LoginContext";

const Header = ({ user, logout }) => {
  const history = useHistory();
  // const { UserInfo } = useContext(LoginContext);
  // console.log(user);
  return (
    <AppBar position="sticky" className="navbar">
      <Toolbar className="navbar__container">
        <Link to="/home" className="navbar__title-link text-white">
          <h1 variant="h4" color="inherit" className="navbar__title">
            THE GAME STORE
          </h1>
        </Link>
        <div className="flex items-center">
          <Link to="/mygames" className="navbar__item mr-5">
            <Typography
              variant="button"
              color="inherit"
              style={{ fontWeight: "bold" }}
            >
              MY GAMES
            </Typography>
          </Link>

          <div
            to="/genres"
            className="navbar__item__name cursor-default w-10"
          ></div>
          <div to="/genres" className="navbar__item__name cursor-default pl-5 ">
            <Typography
              variant="button"
              color="inherit"
              style={{ fontWeight: "bold" }}
            >
              HI, {user.username}
            </Typography>
          </div>

          <div
            className="navbar__item cursor-pointer"
            onClick={(e) => logout()}
          >
            {/* <Typography
              variant="button"
              color="inherit"
              style={{ fontWeight: "bold" }}
            >
              Logout
            </Typography> */}
            <img
              src="/logout.png"
              alt="Logout"
              className="w-10 h-10 cursor-pointer"
            />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
