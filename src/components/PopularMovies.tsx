import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Card } from "antd";

const { Meta } = Card;

const MovieGrid = styled.div`
  justify-items: center;
`;

const PopularMovies = props => {
  const [popularMovies, setPopularMovies]: any = useState([]);
  let apiKey = process.env.REACT_APP_API;

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      )
        .then(data => data.json())
        .then(data => {
          setPopularMovies(data.results);
          console.log(data);
        });
    };
    fetchData();
  }, [apiKey]);

  console.log(popularMovies, "pop movies");

  return (
    <div style={{ width: 1000, margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>Popular movies</h2>
      <div style={{ columns: "2 auto" }}>
        {popularMovies.map((movie: any, index: number) => (
          <MovieGrid>
            <Card
              hoverable
              style={{ width: 280, borderRadius: "10px" }}
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
                    style={{ width: "100%", height: 250 }}
                  />
                )
              }
            >
              <Meta
                title={movie.title}
                description={
                  <p>
                    <a href="/#">View infos</a>
                  </p>
                }
              />
            </Card>
          </MovieGrid>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
