import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// import {
//   popularGamesGet,
//   upcomingGamesGet,
//   newGamesGet,
//   searchGameGet,
// } from "./../constants";

export const LoginContext = createContext({});

const LoginContextProvider = ({ children }) => {
  //   const [doneFetchPopularGames, setdoneFetchPopularGames] = useState(false);
  //   const [doneFetchUpcomingGames, setdoneFetchUpcomingGames] = useState(false);
  //   const [doneFetchNewGames, setdoneFetchNewGames] = useState(false);
  const history = useHistory();

  const [doneFetchUserInfo, setdoneFetchUserInfo] = useState(true);
  const [doneAddingToLibrary, setdoneAddingToLibrary] = useState(true);
  const [UserInfo, setUserInfo] = useState(null);
  const initialValue = { email: "", password: "" };
  const [user, setUser] = React.useState(initialValue);

  const setValue = (name, value) => {
    // let name = e.target.name;
    // let val = e.target.value;
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
  const login = (values) => {
    setdoneFetchUserInfo(false);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    fetch("/auth/login", requestOptions)
      .then((response) => {
        if (response.ok)
          response.json().then((data) => {
            setUserInfo(data);
            setdoneFetchUserInfo(true);
            console.log(data);
            console.log(UserInfo);

            history.replace("/home");
          });
        else {
          response.json().then((data) => {
            alert(data.error);
            setdoneFetchUserInfo(true);
          });
        }
      })

      .catch((error) => {
        console.log(error);
        alert(error);
        setdoneFetchUserInfo(true);
      });
  };

  const logout = () => {
    setUserInfo(null);
    history.replace("/login");
  };

  const addToLibrary = (values) => {
    setdoneAddingToLibrary(false);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    fetch("/add", requestOptions)
      .then((response) => {
        if (response.ok)
          response.json().then((data) => {
            setUserInfo(data);
            setdoneAddingToLibrary(true);
            console.log(data);
            console.log(UserInfo);

            // history.replace("/home");
          });
        else {
          response.json().then((data) => {
            alert(data.error);
            setdoneAddingToLibrary(true);
          });
        }
      })

      .catch((error) => {
        console.log(error);
        alert(error);
        setdoneFetchUserInfo(true);
      });
  };

  return (
    <LoginContext.Provider
      value={{
        doneFetchUserInfo,
        UserInfo,
        user,
        setValue,
        login,
        logout,
        addToLibrary,
        doneAddingToLibrary,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
