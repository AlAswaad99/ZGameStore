import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import {
//   popularGamesGet,
//   upcomingGamesGet,
//   newGamesGet,
//   searchGameGet,
// } from "./../constants";

export const SignupContext = createContext();

const SignupContextProvider = ({ children }) => {
  //   const [doneFetchPopularGames, setdoneFetchPopularGames] = useState(false);
  //   const [doneFetchUpcomingGames, setdoneFetchUpcomingGames] = useState(false);
  //   const [doneFetchNewGames, setdoneFetchNewGames] = useState(false);
  const [doneUserSignup, setdoneUserSignup] = useState(true);
  const [UserInfo, setUserInfo] = useState(null);
  const [inputs, setinputs] = useState(null);
  const history = useHistory();

  //   const [newGames, setNewGames] = useState([]);
  //   const [currentQGame, setCurrentQGame] = useState('');
  //   const [searchedGames, setSearchedGames] = useState([]);

  //Life Cycle
  //   useEffect(() => getPopularGames(), []);
  //   useEffect(() => getUpcomingGames(), []);
  //   useEffect(() => getNewGames(), []);

  //Fetchs
  //   const getPopularGames = () => {
  //     fetch(popularGamesGet())
  //       .then(res => res.json())
  //       .then(data => {
  //         setdoneFetchPopularGames(true);
  //         setdoneFetchSearchedGames(false);
  //         setPopularGames(data.results)
  //       })
  //       .catch(error => console.log(error));
  //   }
  //   const getUpcomingGames = () => {
  //     fetch(upcomingGamesGet())
  //       .then(res => res.json())
  //       .then(data => {
  //         setdoneFetchUpcomingGames(true);
  //         setdoneFetchSearchedGames(false);
  //         setUpcomingGames(data.results)
  //       })
  //       .catch(error => console.log(error));
  //   }
  //   const getNewGames = () => {
  //     fetch(newGamesGet())
  //       .then(res => res.json())
  //       .then(data => {
  //         setdoneFetchNewGames(true);
  //         setdoneFetchSearchedGames(false);
  //         setNewGames(data.results)
  //       })
  //       .catch(error => console.log(error));
  //   }
  //   const getSearchedGames = (q_game) => {
  //     fetch(searchGameGet(q_game))
  //       .then(res => res.json())
  //       .then(data => {
  //         setdoneFetchSearchedGames(true);
  //         setSearchedGames(data.results)
  //       })
  //       .catch(error => console.log(error));
  //   }
  //   const validateQGame = (e) => {
  //     let q_game = e.target.value.toLowerCase().trim();
  //     if(e.type === 'keypress' && e.key === 'Enter') {
  //       if(q_game && q_game !== currentQGame) {
  //         setCurrentQGame(q_game);
  //         setdoneFetchPopularGames(false);
  //         setdoneFetchUpcomingGames(false);
  //         setdoneFetchNewGames(false);
  //         getSearchedGames(q_game);
  //       }
  //     }
  //   }
  const signup = (values) => {
    setdoneUserSignup(false);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    fetch("/auth/signup", requestOptions)
      .then((response) => {
        if (response.ok)
          response.json().then((data) => {
            setdoneUserSignup(true);
            setUserInfo(data);
            history.replace("/login");
          });
        else {
          response.json().then((data) => {
            alert(data.error);
            setdoneUserSignup(true);
          });
        }
      })
      .catch((error) => {
        // console.log(error);
        alert(error);
        setdoneUserSignup(true);
      });
  };

  return (
    <SignupContext.Provider value={{ doneUserSignup, UserInfo, signup }}>
      {children}
    </SignupContext.Provider>
  );
};

export default SignupContextProvider;
