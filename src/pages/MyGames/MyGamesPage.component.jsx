import React, { Fragment, useContext, useEffect, useState } from "react";
import { GamesContext } from "./../../context/GamesContext";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./../../components/Games/SearchBar/SearchBar.component";
import ListOfGames from "./../../components/Games/ListsOfGames/ListsOfGames.component";
import Game from "./../../components/Games/Game/Game.component";
import ProgressBar from "../../components/Common/ProgressBar/ProgressBar.component";
import Message from "./../../components/Common/Message/Message.component";
import "./MyGamesPage.styles.scss";
import LoginContextProvider, { LoginContext } from "../../context/LoginContext";
import Header from "../../components/Common/Header/Header.component";
import MyGamesLsit from "../../components/Games/MyGamesList/MyGamesList.component";
import { MyGamesContext } from "../../context/MyGamesContext";
import { gameDetailsGet } from "../../constants";

const MyGamesPage = ({ user }) => {
  // const { myGames, doneFetchMyGames, noGames } = useContext(MyGamesContext);
  // console.log(myGames);
  // console.log(noGames);
  // console.log(doneFetchMyGames);
  const [doneFetchMyGames, setdoneFetchMyGames] = useState(false);

  const [myGames, setMyGames] = useState([]);
  const [noGames, setNoGames] = useState("");
  const value = useContext(LoginContext);
  
  const getMyGames = (library) => {
    setdoneFetchMyGames(false);
    setMyGames([]);
    console.log("abt to");
    console.log(library);
    var temp= []

    if (!library || library.length === 0) {
      setNoGames("No Games in your library");
      setdoneFetchMyGames(true);
      console.log("nogames");
    } else {
      for (let index = 0; index < library.length; index++) {
        const element = library[index];
        fetch(gameDetailsGet(element))
          .then((res) => res.json())
          .then((data) => {
            
            setMyGames(myGames => [...myGames,data]);
            
            // temp = [...temp,data];
            // setMyGames(temp);


          })
          .catch((error) => console.log(error));
      }
      setdoneFetchMyGames(true);
      // setMyGames(temp);

      setNoGames("");
      // console.log(" all games fetch");
      // console.log(myGames);
      // console.log(temp);

    }
  };
  
  useEffect(() => {
    getMyGames(value.UserInfo.library);
  }, [value.UserInfo.library]);

  return (
    <Fragment>
      <Grid container spacing={2} style={{ marginTop: "1rem" }}>
        {!doneFetchMyGames && <ProgressBar />}
        {doneFetchMyGames && myGames.length === 0 && (
          <Message text={noGames || "Loading..."} />
        )}
        {doneFetchMyGames && myGames.length > 0 && (
          <MyGamesLsit mygames={myGames} />
        )}
        
        {/* <MyGamesLsit mygames={myGames} /> */}
      </Grid>
    </Fragment>
  );
};

export default MyGamesPage;
