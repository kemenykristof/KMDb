import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const MovieContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1200px;
`;

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
                width: 450,
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
                  <img
                    src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt="movie"
                    style={{ width: "100%", height: 300 }}
                  />
                )
              }
            >
              <Meta
                title={movie.title}
                description={
                  <p>
                    <Link
                      to={{
                        pathname: `/movie/${movie.id}`,
                        state: {
                          currentMovie: movie
                        }
                      }}
                    >
                      View details
                    </Link>
                  </p>
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
