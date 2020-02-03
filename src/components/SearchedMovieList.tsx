import React from "react";
import styled from "@emotion/styled";

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Styledli = styled.li`
  list-style-type: none;
  border-style: solid;
  border-color: goldenrod;
  width: 800px;
  height: 60px;
  margin-bottom: 10px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
`;

const StyledText = styled.span`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

interface SearchedMovieProps {
  movies: {}[];
  viewMovieInfo: (id: string | number) => void;
}

const SearchedMovieList = (props: SearchedMovieProps) => {
  return (
    <ListContainer>
      <ul>
        {props.movies.map((movie: any, index: number) => (
          <Styledli key={index}>
            {movie.poster_path == null ? (
              <img
                className=""
                src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                alt="noposter"
                style={{ width: 50, height: 50 }}
              />
            ) : (
              <img
                className=""
                src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
                alt="movie poster"
                style={{ width: 50, height: 50 }}
              />
            )}
            <StyledText>
              {movie.title} {movie.release_date.substring(0, 4)}
            </StyledText>
          </Styledli>
        ))}
      </ul>
    </ListContainer>
  );
};

export default SearchedMovieList;
