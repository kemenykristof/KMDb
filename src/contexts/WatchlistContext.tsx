import React, { createContext, useReducer } from "react";
import { watchlistReducer } from "../reducers/WatchlistReducer";
import { Movie } from "../interfaces/types";

type ContextType = {
  watchlist: Movie[];
  dispatch: React.Dispatch<any>;
};

export const WatchlistContext = createContext<ContextType | any>('');

const WatchlistContextProvider = (props: { children: React.ReactNode }) => {
  //@ts-ignore
  const [watchlist, dispatch] = useReducer(watchlistReducer, []);

  return (
    <WatchlistContext.Provider
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
