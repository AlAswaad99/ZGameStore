import React, { Fragment, useState } from "react";
import parse from "html-react-parser";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import { SRLWrapper } from "simple-react-lightbox";
import TextList from "../../Common/Lists/TextList.component";
import StoresList from "../../Common/Lists/StoresList.component";
import Subtitle from "./../../Common/Subtitle/Subtitle.component";
import Screenshots from "./../Screenshots/Screenshots.component";
import "./Details.styles.scss";
import ProgressBar from "../../Common/ProgressBar/ProgressBar.component";

const Details = ({
  gameDetails,
  gameScreenshots,
  doneFetchGameScreenshots,
  inLibrary,
  gameId,
  addToLibrary,
  username,
  doneAddingToLibrary
}) => {
  const {
    name,
    description,
    released,
    rating,
    platforms,
    stores,
    publishers,
    genres,
    clip,
  } = gameDetails;

  const [isLoading, setIsLoading] = useState(false);

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
          <h1 className="mb-8 mt-4 font-bold text-xl">{name}</h1>
          <p className="mb-4">
            <span className="font-weight-bold">Release date:</span> {released}
          </p>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextList title="Publisher/s" items={publishers} />
              <TextList title="Genre/s" items={genres} />
              <TextList title="Platform/s" platforms items={platforms} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <span className="mb-8 mt-4 font-bold">
                <Subtitle text="Rating" />
              </span>
              <Rating name="read-only" value={rating} readOnly />
              <StoresList stores={stores} />
              {inLibrary === 1 && (
                <button
                  type="button"
                  class="w-1/2 flex justify-center py-3 px-4 border border-transparent cursor-default rounded-md shadow-sm text-sm font-medium mt-5 text-white bg-black hover:font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  disabled
                >
                  In Library
                  {/* {isLoading && (
                    <div class="ml-3 -mr-3 -mt-8">
                      <ProgressBar size={15} />
                    </div>
                  )} */}
                </button>
              )}
              {!inLibrary && (
                <button
                  type="button"
                  class="w-1/2 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium mt-5 text-white bg-black hover:font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  onClick={()=>addToLibrary({gameId: gameId, username: username })}
                >
                  Add to Library
                  {!doneAddingToLibrary && (
                    <div class="ml-3 -mr-3 -mt-8">
                      <ProgressBar size={15} />
                    </div>
                  )}
                </button>
              )}
            </Grid>
          </Grid>
          <span className="font-weight-bold">
            <Subtitle text="Description" />
          </span>
          <div className="gdetails__description">{parse(description)}</div>
        </Grid>
        <Grid item sm={12} md={6}>
          {clip ? (
            <video width="100%" height="350px" controls autoPlay muted>
              <source src={clip.clip} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : null}
          <SRLWrapper>
            <Grid container spacing={1}>
              <Screenshots
                doneFetchScreenshots={doneFetchGameScreenshots}
                screenshots={gameScreenshots}
              />
            </Grid>
          </SRLWrapper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Details;
