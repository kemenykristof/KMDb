import React, { createContext, useReducer, useEffect } from "react";
import { watchlistReducer, Action } from "../reducers/WatchlistReducer";
import { Movie } from "../types/types";

type ContextType = {
  watchlist: Movie[];
  dispatch: React.Dispatch<Action>;
};

export const WatchlistContext = createContext<ContextType>({ watchlist: [], dispatch: () => console.log('dispatch not initialized') });


const WatchlistContextProvider = (props: { children: React.ReactNode }) => {
  const [watchlist, dispatch] = useReducer(watchlistReducer, [], () => {
    const localData = localStorage.getItem("watchlist");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

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
