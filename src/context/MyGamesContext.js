import React, { createContext, useState, useEffect, useContext } from "react";
import {
  popularGamesGet,
  upcomingGamesGet,
  newGamesGet,
  searchGameGet,
  gameDetailsGet,
} from "./../constants";
import { LoginContext } from "./LoginContext";

export const MyGamesContext = createContext();

const MyGamesContextProvider = ({ children }) => {
  const [doneFetchMyGames, setdoneFetchMyGames] = useState(true);

  const [myGames, setMyGames] = useState([]);
  const [noGames, setNoGames] = useState("");
  const value = useContext(LoginContext);
  // console.log(value.UserInfo.library);

  //Life Cycle
  useEffect(() => {
    const getMyGames = (library) => {
      // console.log("abt to");
      // console.log(library);
  
      setdoneFetchMyGames(false);
      if (!library || library.length === 0) {
        setNoGames("No Games in your library");
        setdoneFetchMyGames(false);
        console.log("nogames");
      } else {
        for (let index = 0; index < library.length; index++) {
          const element = library[index];
          fetch(gameDetailsGet(element))
            .then((res) => res.json())
            .then((data) => {
              var temp = myGames;
  
              temp.push(data);
              setMyGames(temp);
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
    getMyGames(value.UserInfo.library)}, [value.UserInfo.library, myGames]);

  //Fetchs


  return (
    <MyGamesContext.Provider
      value={{
        myGames,
        doneFetchMyGames,
        noGames,
      }}
    >
      {children}
    </MyGamesContext.Provider>
  );
};

export default MyGamesContextProvider;
