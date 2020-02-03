import React, { useContext } from "react";
import { WatchlistContext } from "../contexts/WatchlistContext";

const Watchlist: React.SFC = props => {
  //@ts-ignore
  const { watchlist, dispatch } = useContext(WatchlistContext);

  return watchlist.length ? (
    <div>
      <ul>
        {watchlist.map(movie => {
          return (
            <li key={movie.id}>
              <div>
                <span>{movie.title}</span>
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_MOVIE", id: movie.id })
                  }
                >
                  REMOVE
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div>You have no movies on your watchlist</div>
  );
};

export default Watchlist;
