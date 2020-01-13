import React from "react";
import Movie from "./Movie";
import styled from "@emotion/styled";

interface Props {
  movies: any;
}

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MovieList = (props: Props) => {
  return (
    <MovieContainer>
      <div>
        <div>
          {props.movies.map((movie: any, index: any) => {
            return (
              <Movie
                key={index}
                image={movie.poster_path}
                title={movie.original_title}
                overview={movie.overview}
              ></Movie>
            );
          })}
        </div>
      </div>
    </MovieContainer>
  );
};

export default MovieList;
