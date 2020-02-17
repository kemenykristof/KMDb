import { Movie } from "../types/types";

export type Action =
  | {
      type: "ADD_MOVIE";
      movie: Movie;
    }
  | {
      type: "REMOVE_MOVIE";
      id: string | number;
    };

export const watchlistReducer = (state: Movie[], action: Action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [
        ...state,
        {
          title: action.movie.title,
          id: action.movie.id,
          poster_path: action.movie.poster_path
        }
      ];
    case "REMOVE_MOVIE":
      return state.filter(movie => movie.id !== action.id);
    default:
      return state;
  }
};
