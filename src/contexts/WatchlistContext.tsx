import React from 'react';

export default React.createContext({
  movies: [
    { id: 'p1', title: 'Spiderman'},
    { id: 'p2', title: 'Harry Potter' },
    { id: 'p3', title: 'Star Wars' },
    { id: 'p4', title: 'Fight Club'  }
  ],
  watchlist: [],
  addMovieToWatchlist: movie => {},
  removeMovieFromWatchlist: movieId => {}
});