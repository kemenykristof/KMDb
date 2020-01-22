import React, { useState, useEffect } from "react";

const PopularMovies = props => {
  const [popularMovies, setPopularMovies]: any = useState([]);
  let apiKey = process.env.REACT_APP_API;

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      )
        .then(data => data.json())
        .then(data => {
          setPopularMovies(data.results);
          console.log(data);
        });
    };
    fetchData();
  }, [apiKey]);

  console.log(popularMovies, "pop movies");

  return (
    <ul>
      {popularMovies.map((movie: any, index: number) => (
        <li key={index}>
          <p>{movie.original_title}</p>
        </li>
      ))}
    </ul>
  );
};

export default PopularMovies;
