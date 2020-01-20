import { createContext } from "react";
import { Movie } from "../interfaces/interfaces";

const context: {
  watchlist: Movie[];
  addMovieToWatchlist: (movie: Movie) => void;
  removeMovieFromWatchlist: (movieId: string) => void;
} = {
  watchlist: [],
  addMovieToWatchlist: () => {},
  removeMovieFromWatchlist: () => {}
};

const WatchlistContext = createContext(context);

export const StoreProvider = WatchlistContext.Provider;
export const StoreConsumer = WatchlistContext.Consumer;

export default WatchlistContext;
