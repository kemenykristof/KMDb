import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const MovieContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PopularMovies = props => {
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
          console.log(data, "popular movies");
        });
    };
    fetchData();
  }, [apiKey]);

  return (
    <div style={{ width: 750, margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Popular movies</h2>
      <div style={{ columns: "2 auto" }}>
        {popularMovies.map((movie: any, index: number) => (
          <MovieContainer key={index}>
            <Card
              hoverable
              style={{ width: "100%", borderRadius: "10px" }}
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
          </MovieContainer>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;

