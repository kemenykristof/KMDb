import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const UList = styled.ul({
  listStyle: "none",
  width: "90%",
  maxWidth: "40rem",
  margin: "2rem auto",
  padding: 0
});

const List = styled.li({
  margin: "1rem 0",
  padding: "0.5rem",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
  borderRadius: "6px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center"
});

const StyledText = styled.span({
  marginLeft: "20px",
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "center",
  color: "goldenrod"
});

const StyledReleaseDate = styled.span({
  marginLeft: "20px",
  marginRight: "20px",
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "center",
  color: "steelblue"
});

interface SearchedMovieProps {
  movies: {}[];
  viewMovieInfo: (id: string | number) => void;
}

const SearchedMovieList = (props: SearchedMovieProps) => {
  return (
    <ListContainer>
      <UList>
        {props.movies.map((movie: any, index: number) => (
          <List key={index}>
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
            <StyledText>{movie.title}</StyledText>
            <StyledReleaseDate>
              {`(` + movie.release_date + `)`}
            </StyledReleaseDate>

            <Link
              to={{
                pathname: `/movie/${movie.id}`,
                state: {
                  currentMovie: movie
                }
              }}
            >
              View more info
            </Link>
          </List>
        ))}
      </UList>
    </ListContainer>
  );
};

export default SearchedMovieList;
