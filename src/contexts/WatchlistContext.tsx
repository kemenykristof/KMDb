import React, { createContext, useReducer } from "react";
import { watchlistReducer } from "../reducers/WatchlistReducer";

export const WatchlistContext = createContext("");

const WatchlistContextProvider = props => {
    const [watchlist, dispatch] = useReducer(watchlistReducer, []);

  
  return (
    <WatchlistContext.Provider
      //@ts-ignore
      value={{
        watchlist,
        dispatch
      }}
    >
      {props.children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistContextProvider;
