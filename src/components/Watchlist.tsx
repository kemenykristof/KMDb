import React, { useContext} from "react";
import { WatchlistContext } from "../contexts/WatchlistContext";
import styled from "@emotion/styled";

import Rater from "./Rater"

const UList = styled.ul({
  listStyle: "none",
  width: "90%",
  maxWidth: "40rem",
  margin: "2rem auto",
  padding: 0
});

const List = styled.li({
  margin: "1rem 0",
  padding: "1rem",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
  borderRadius: "6px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

const Watchlist: React.SFC = props => {
  const { watchlist, dispatch } = useContext(WatchlistContext);

  return watchlist.length ? (
    <div>
      <h1>Your watchlist</h1>
      <UList>
        {watchlist.map(movie => {
          return (
            <List key={movie.id}>
              {movie.poster_path == null ? (
                <img
                  className=""
                  src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                  alt="noposter"
                  style={{ width: 96, height: 142 }}
                />
              ) : (
                <img
                  className=""
                  src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt="movie poster"
                  style={{ width: 96, height: 142 }}
                />
              )}
              <span>{movie.title}</span>

              <button
                onClick={() => dispatch({ type: "REMOVE_MOVIE", id: movie.id })}
              >
                REMOVE
              </button>
                <Rater></Rater>
            </List>
          );
        })}
      </UList>
    </div>
  ) : (
    <div>You have no movies on your watchlist</div>
  );
};

export default Watchlist;
