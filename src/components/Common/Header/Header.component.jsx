import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import "./Header.styles.scss";
import { LoginContext } from "../../../context/LoginContext";

const Header = ({user, logout}) => {
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
        <div>
          
          <Link to="/mygames" className="navbar__item">
            <Typography
              variant="button"
              color="inherit"
              style={{ fontWeight: "bold" }}
            >
              MY GAMES
            </Typography>
          </Link>
          <div to="/genres" className="navbar__item__name" >
            <Typography
              variant="button"
              color="inherit"
              style={{ fontWeight: "bold" }}
            >
              HI, {user.username}
            </Typography>
          </div>
          <Link className="navbar__item" onClick={e => logout()}>
          <Typography variant="button" color="inherit" style={{fontWeight: 'bold'}}>
            Logout
          </Typography>
        </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
