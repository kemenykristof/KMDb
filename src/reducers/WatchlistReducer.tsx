import uuid from "uuid/v4";

export const watchlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [
        ...state,
        {
          title: action.movie.title,
          author: action.movie.director,
          id: uuid()
        }
      ];
    case "REMOVE_MOVIE":
      return state.filter(movie => movie.id !== action.id);
    default:
      return state;
  }
};
