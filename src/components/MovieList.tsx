import React from "react";
import MovieCard from "./MovieCard";
import styled from "@emotion/styled";

interface Props {
  movies: any;
  vievMovieInfo: void;
}

const MovieContainer = styled.div`
  justify-items: center;
  display: grid;
  grid-template-columns: repeat(4, 0.3fr);
  grid-auto-rows: 1fr;
  grid-row-gap: 25px;
  margin-top: 25px;
`;

const MovieList = (props:any) => {
  return (
    <MovieContainer>
      {props.movies.map((movie: any, index: number) => {
        return (
          <MovieCard
            key={index}
            image={movie.poster_path}
            title={movie.original_title}
            viewMovieInfo={props.viewMovieInfo}
            movieId={movie.id}
          ></MovieCard>
        );
      })}
    </MovieContainer>
  );
};

export default MovieList;
