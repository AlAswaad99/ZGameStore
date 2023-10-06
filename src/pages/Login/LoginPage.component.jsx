import React, { Fragment, useContext } from "react";
import { GamesContext } from "./../../context/GamesContext";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./../../components/Games/SearchBar/SearchBar.component";
import ListOfGames from "./../../components/Games/ListsOfGames/ListsOfGames.component";
import Game from "./../../components/Games/Game/Game.component";
import ProgressBar from "../../components/Common/ProgressBar/ProgressBar.component";
import Message from "./../../components/Common/Message/Message.component";
import "./LoginPage.styles.scss";
import { LoginContext } from "../../context/LoginContext";
import { Label } from "@material-ui/icons";
import { TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const initialValue = { email: "", password: "" };
  const [user, setUser] = React.useState(initialValue);
  const history = useHistory();

  const setValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(name);
    // console.log(val);
    // console.log(e.type);
    // console.log(e.target());
    // if(e.type === 'keypress' && e.key === 'Enter') {
    //   if(q_game && q_game !== currentQGame) {
    //     setCurrentQGame(q_game);
    //     setdoneFetchPopularGames(false);
    //     setdoneFetchUpcomingGames(false);
    //     setdoneFetchNewGames(false);
    //     getSearchedGames(q_game);
    //   }
    // }
    setUser({ ...user, [name]: value });
  };

  const {
    // doneFetchPopularGames,
    // doneFetchUpcomingGames,
    // doneFetchNewGames,
    // doneFetchSearchedGames,
    // popularGames,
    // upcomingGames,
    // newGames,
    // searchedGames,
    // validateQGame,
    doneFetchUserInfo,
    // UserInfo,
    login,
    // user,
    // setValue
  } = useContext(LoginContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(user);
  };

  //
  return (
    <Fragment>
      {/* <SearchBar validateQGame={validateQGame} /> */}

      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12} md={6} style={{ margin: "auto" }}>
          <div className="px-8">
            <Typography style={{ fontWeight: "bold" }} variant="h1">
              THE
            </Typography>{" "}
            <Typography style={{ fontWeight: "bold" }} variant="h1">
              GAME
            </Typography>{" "}
            <Typography style={{ fontWeight: "bold" }} variant="h1">
              STORE
            </Typography>{" "}
            <Typography variant="h6">
              A single library when you can access all your games throughout all
              platforms
            </Typography>{" "}
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit} className="px-32 py-24">
            {/* {!doneFetchSearchedGames ? (
          doneFetchPopularGames &&
          doneFetchUpcomingGames &&
          doneFetchNewGames ? (
            <ListOfGames
              popularGames={popularGames}
              upcomingGames={upcomingGames}
              newGames={newGames}
            />
          ) : (
            <ProgressBar />
          )
        ) : searchedGames.length ? (
          <Game games={searchedGames} />
        ) : (
          <Message text="No results found" />
        )} */}
            <Typography variant="h6">Email</Typography>{" "}
            {/* <InputField
          inputName={"Email"}
          label="email"
          setValue={setValue}
          value={user.email}
        /> */}
            <input
              class="appearance-none mb-5 block w-full bg-white-200 text-sm text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              name="email"
              type="text"
              value={user.email}
              onChange={setValue}
            />
            {/* <InputField
          type="text"
          key="email"
          id="Email"
          margin="normal"
          variant="outlined"
          style={{ width: "100%", borderRadius: "20px" }}
          onChange={(e) => setValue("email", e.target.value)}
          value={user.email}
        /> */}
            <Typography variant="h6">Password</Typography>{" "}
            <input
              class="appearance-none block w-full bg-white-200 text-sm text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              name="password"
              type="password"
              value={user.password}
              onChange={setValue}
            />
            <button
              type="submit"
              class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium mt-5 text-white bg-black hover:font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              Login
              {!doneFetchUserInfo && (
                <div class="ml-3 -mr-3 -mt-8">
                  <ProgressBar size={20} />
                </div>
              )}
            </button>
            <div className="flex justify-center">
              <p className="mt-2 inline-block">Don't have an account? </p>{" "}
              <p className="underline font-semibold cursor-pointer ml-2 mt-2 inline-block" onClick={e=>history.replace("signup")}>
                Sign up
              </p>
            </div>
          </form>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default LoginPage;
