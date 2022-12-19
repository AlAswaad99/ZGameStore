import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import Container from "@material-ui/core/Container";
import GamesContextProvider from "./context/GamesContext";
import GamesDetailsContextProvider from "./context/GameDetailsContext";
import GenresContextProvider from "./context/GenresContext";
import GenreDetailContextProvider from "./context/GenreDetailContext";
import PlatformsContextProvider from "./context/PlatformsContext";
import PlatformDetailContextProvider from "./context/PlatformDetailContext";
import PublishersContextProvider from "./context/PublishersContext";
import PublisherDetailContextProvider from "./context/PublisherDetailContext";
import HomePage from "./pages/Home/HomePage.component";
import Header from "./components/Common/Header/Header.component";
import GameDetails from "./pages/GameDetails/GameDetails.component";
import Genres from "./pages/Genres/Genres.component";
import GenreDetail from "./pages/GenreDetail/GenreDetail.component";
import Platforms from "./pages/Platforms/Platforms.component";
import PlatformDetail from "./pages/PlatformDetail/PlatformDetail.component";
import Publishers from "./pages/Publishers/Publishers.component";
import PublisherDetail from "./pages/PublisherDetail/PublisherDetail.component";
import Footer from "./components/Common/Footer/Footer.component";
import LoginContextProvider, { LoginContext } from "./context/LoginContext";
import "./App.css";
import LoginPage from "./pages/Login/LoginPage.component";
import SignupContextProvider from "./context/SignupContext";
import SignupPage from "./pages/Signup/SignupPage.component";
import MyGamesContextProvider from "./context/MyGamesContext";
import MyGamesPage from "./pages/MyGames/MyGamesPage.component";

const App = () => {
  const auth = useContext(LoginContext);
  console.log(auth);
  return (
    // <BrowserRouter>
    <>
      {auth && auth.UserInfo && <Header user={auth.UserInfo} logout={auth.logout} />}
      <Container maxWidth="lg" className="main-container">
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/home">
            <GamesContextProvider>
              <HomePage />
            </GamesContextProvider>
          </Route>
          <Route exact path="/login">
            {/* <LoginContextProvider> */}
            <LoginPage />
            {/* </LoginContextProvider> */}
          </Route>
          <Route exact path="/signup">
            <SignupContextProvider>
              <SignupPage />
            </SignupContextProvider>
          </Route>
          <Route exact path="/mygames">
            {/* <MyGamesContextProvider> */}
              <MyGamesPage user={auth.UserInfo}/>
            {/* </MyGamesContextProvider> */}
          </Route>
          <Route path="/games/details/:id">
            <SimpleReactLightbox>
              <GamesDetailsContextProvider>
                <GameDetails />
              </GamesDetailsContextProvider>
            </SimpleReactLightbox>
          </Route>
          <Route exact path="/genres">
            <GenresContextProvider>
              <Genres />
            </GenresContextProvider>
          </Route>
          <Route path="/genres/:id">
            <GenreDetailContextProvider>
              <GenreDetail />
            </GenreDetailContextProvider>
          </Route>
          <Route exact path="/platforms">
            <PlatformsContextProvider>
              <Platforms />
            </PlatformsContextProvider>
          </Route>
          <Route path="/platforms/:id">
            <PlatformDetailContextProvider>
              <PlatformDetail />
            </PlatformDetailContextProvider>
          </Route>
          <Route exact path="/publishers">
            <PublishersContextProvider>
              <Publishers />
            </PublishersContextProvider>
          </Route>
          <Route path="/publishers/:id">
            <PublisherDetailContextProvider>
              <PublisherDetail />
            </PublisherDetailContextProvider>
          </Route>
        </Switch>
      </Container>

      {/* <Footer /> */}
    </>

    // </BrowserRouter>
  );
};

export default App;
