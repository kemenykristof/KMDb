import { Movie } from "../interfaces/types";

type Action =
  | {
      type: "ADD_MOVIE";
      movie: Movie;
    }
  | {
      type: "REMOVE_MOVIE";
      id: string;
    };

export const watchlistReducer = (state: Movie[], action: Action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [
        ...state,
        {
          title: action.movie.name,
          id: action.movie.id
        }
      ];
    case "REMOVE_MOVIE":
      return state.filter(movie => movie.id !== action.id);
    default:
      return state;
  }
};
