import React from "react";
import Movie from "./MovieCard";
import styled from "@emotion/styled";

interface Props {
  movies: any;
}

const MovieContainer = styled.div`
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(4, 0.3fr);
  grid-auto-rows: 1fr;
  grid-row-gap: 25px;
  margin-top: 25px;
`;

const MovieList = (props: Props) => {
  return (
    <MovieContainer>
      {props.movies.map((movie: any, index: number) => {
        return (
          <Movie
            key={index}
            image={movie.poster_path}
            title={movie.original_title}
            //@ts-ignore
            viewMovieInfo={props.viewMovieInfo}
            movieId={movie.id}
          ></Movie>
        );
      })}
    </MovieContainer>
  );
};

export default MovieList;
