import React, { createContext, useState } from "react";

export const WatchlistContext = createContext("");

const WatchlistContextProvider = props => {
  const [watchlist, setWatchlist]: any = useState([
    { title: "Star Wars", id: 1 },
    { title: "Harry Potter", id: 2 }
  ]);

  const addMovieToWatchlist = (title: string) => {
    setWatchlist([...watchlist, { title }]);
  };

  const removeMovieFromWatchlist = (id: number) => {
    setWatchlist(watchlist.filter((movie: any) => movie.id !== id));
  };

  return (
    <WatchlistContext.Provider
      //@ts-ignore
      value={{
        watchlist: watchlist,
        addMovieToWatchlist: addMovieToWatchlist,
        removeMovieFromWatchlist: removeMovieFromWatchlist
      }}
    >
      {props.children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistContextProvider;
