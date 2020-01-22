import React from "react";
import styled from "@emotion/styled";

interface Props {
  movies: any;
  vievMovieInfo: void;
}

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Styledli = styled.li`
  list-style-type: none;
`;

const SearchMovieList = (props: any) => {
  return (
    <ListContainer>
      <ul>
        {props.movies.map((movie: any, index: number) => (
          <Styledli key={index}>
            <p>{movie.title}</p>
          </Styledli>
        ))}
      </ul>
    </ListContainer>
  );
};

export default SearchMovieList;
