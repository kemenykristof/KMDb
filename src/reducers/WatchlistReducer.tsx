

export const watchlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [
        ...state,
        {
          title: action.movie.title,
          id: action.movie.id
        }
      ];
    case "REMOVE_MOVIE":
      return state.filter(movie => movie.id !== action.id);
    default:
      return state;
  }
};
