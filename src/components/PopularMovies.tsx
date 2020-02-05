import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const MovieContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  width: "1200px"
});

const OverviewStyle = styled.p({
  wordWrap: "break-word",
  whiteSpace: "normal",
  color: "#4d4d4d",
  fontSize: "0.9em",
  lineHeight: "1.2em",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxHeight: "3.6em"
});

const ImgStyle = styled.img({
  width: "100%",
  height: 330
});

interface PopularMoviesProps {}

const PopularMovies = (props: PopularMoviesProps) => {
  const [popularMovies, setPopularMovies] = useState([]);
  let apiKey = process.env.REACT_APP_API;

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      )
        .then(data => data.json())
        .then(data => {
          setPopularMovies(data.results);
          console.log(data, "data");
        });
    };
    fetchData();
  }, [apiKey]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1>Popular movies</h1>
      <MovieContainer>
        {popularMovies.map((movie: any, index: number) => (
          <div key={index}>
            <Card
              hoverable
              style={{
                width: 420,
                borderRadius: "10px",
                marginRight: 50,
                marginTop: 20
              }}
              cover={
                movie.poster_path === null ? (
                  <img
                    alt="movie"
                    src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                  />
                ) : (
                  <ImgStyle
                    src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt="movie"
                  />
                )
              }
            >
              <Meta
                title={movie.title}
                description={
                  <div>
                    <OverviewStyle>{movie.overview}</OverviewStyle>
                    <p>
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
                    </p>
                  </div>
                }
              />
            </Card>
          </div>
        ))}
      </MovieContainer>
    </div>
  );
};

export default PopularMovies;
