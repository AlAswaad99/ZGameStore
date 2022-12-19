import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Game from "./../Game/Game.component";

const MyGamesLsit = ({ mygames }) => {
  console.log(mygames.length);

  return (
    <Fragment>
      <Grid item xs={12}>
        <h3 className="mt-0">My Games</h3>
        <Paper elevation={3} className="games-container">
          <Grid container spacing={1}>
            <Game games={mygames} mygame={true} />
          </Grid>
        </Paper>
      </Grid>
    </Fragment>
  );
};

export default MyGamesLsit;
