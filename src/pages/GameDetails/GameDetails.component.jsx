import React, { Fragment, useContext } from "react";
import { GameDetailsContext } from "./../../context/GameDetailsContext";
import ProgressBar from "./../../components/Common/ProgressBar/ProgressBar.component";
import Details from "./../../components/Games/Details/Details.component";
import { LoginContext } from "../../context/LoginContext";

const GameDetails = () => {
  const {
    doneFetchGameDetails,
    gameDetails,
    doneFetchGameScreenshots,
    gameScreenshots,
    game_id
  } = useContext(GameDetailsContext);
  const {UserInfo, addToLibrary, doneAddingToLibrary} = useContext(LoginContext);
  console.log(game_id);
  console.log(UserInfo.library);
  return (
    <Fragment>
      {doneFetchGameDetails && gameDetails ? (
          <Details
            gameDetails={gameDetails}
            gameScreenshots={gameScreenshots}
            doneFetchGameScreenshots={doneFetchGameScreenshots}
            inLibrary={UserInfo.library.filter(element => element===game_id).length}
            gameId={game_id}
            addToLibrary={addToLibrary}
            username={UserInfo.username}
            doneAddingToLibrary={doneAddingToLibrary}
          />
      ) : (
        <ProgressBar />
      )}
    </Fragment>
  );
};

export default GameDetails;
