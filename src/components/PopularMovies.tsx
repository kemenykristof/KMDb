import React, { useState, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import { Card, notification } from "antd";
import { Link } from "react-router-dom";
import { WatchlistContext } from "../contexts/WatchlistContext";
import { Button, Icon } from "antd";

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
  const watchlistContext = useContext(WatchlistContext);
  const watchlist = watchlistContext?.watchlist ?? []
  const dispatch = watchlistContext?.dispatch ?? (()=>{console.log('dispatch not initialized')})
  const [popularMovies, setPopularMovies] = useState([]);
  let apiKey = process.env.REACT_APP_API;

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
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

  const openNotificationWithIcon = type => {
    notification["success"]({
      message: "Successfully added!",
      description: "The selected movie was added to your watchlist."
    });

    notification.config({
      placement: "bottomLeft",
      bottom: 50,
      duration: 3
    });
  };

  const handleOnclick = (
    title: string,
    id: string | number,
    poster_path: string
  ) => {
    if (watchlist.find((movie: { id: React.ReactText }) => movie.id === id)) {
    } else {
      dispatch({ type: "ADD_MOVIE", movie: { title, id, poster_path } });
      openNotificationWithIcon("success");
    }
  };

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
                      <span style={{ color: "goldenrod" }}>
                        Rating: {movie.vote_average}
                      </span>
                    </p>
                    <hr></hr>
                    <div
                      style={{
                        display:"flex",
                        justifyContent:"space-between"
                      }}
                    >
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
                      <Button
                        onClick={() => {
                          handleOnclick(
                            movie.title,
                            movie.id,
                            movie.poster_path
                          );
                        }}
                        type="primary"
                      >
                        <Icon type="plus" />
                        Add to Watchlist
                      </Button>
                    </div>
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
