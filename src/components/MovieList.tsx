import React from "react";
import Movie from "./Movie";

interface Props {
  movies: any;
}

const MovieList = (props: Props) => {
  return (
    <div>
      <div>
        <div>
          {props.movies.map((movie: any, index: any) => {
            return <Movie key={index} image={movie.poster_path}></Movie>;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
