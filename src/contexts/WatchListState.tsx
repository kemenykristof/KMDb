import React, { useReducer } from "react";

import WatchlistContext from "./WatchListContext";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./Reducers";

const WatchlistState = props => {
  const movies = [
    { id: "p1", title: "Star Wars" },
    { id: "p2", title: "Harry Potter 3" },
    { id: "p3", title: "Spiderman" },
    { id: "p4", title: "Fight Club" }
  ];

  const [watchlistState, dispatch] = useReducer(shopReducer, { watchlist: [] });

  const addMovieToWatchlist = movie => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, movie: movie });
    }, 700);
  };

  const removeMovieFromWatchlist = productId => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <WatchlistContext.Provider
      value={{
        watchlist: watchlistState.watchlist,
        addMovieToWatchlist: addMovieToWatchlist,
        removeMovieFromWatchlist: removeMovieFromWatchlist
      }}
    >
      {props.children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistState;
