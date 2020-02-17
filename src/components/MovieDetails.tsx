import React, { useContext } from "react";
import { Button, Icon } from "antd";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { WatchlistContext } from "../contexts/WatchlistContext";
import { notification } from "antd";

const InnerContainer = styled.div({
  flexDirection: "column",
  display: "flex",
  justifyContent: "center"
});

const OuterContainer = styled.div({
  width: "800px",
  margin: "auto",
  justifyContent: "center",
  display: "flex"
});

const Title = styled.div({ display: "flex", justifyContent: "space-between" });

const MovieDetails = (props: { location: { state: any } }) => {
  const { watchlist, dispatch } = useContext(WatchlistContext);

  const openNotificationWithIcon = (type: string) => {
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

  const currentMovie = props.location.state;

  const result = Object.values(currentMovie);

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
    <div>
      <NavLink to="/">
        <div style={{ cursor: "pointer", paddingTop: 50 }}>
          <Icon type="left-circle" theme="twoTone" />
          <span style={{ marginLeft: 10 }}>Go back</span>
        </div>
      </NavLink>
      <OuterContainer>
        {result.map((data: any) => {
          return (
            <InnerContainer key={data.id}>
              <Title>
                <span>
                  <span style={{ fontSize: 25, fontWeight: "bold" }}>
                    {data.title}
                  </span>
                  {""}{" "}
                  <span>{`(` + data.release_date.substring(0, 4) + `)`}</span>
                </span>
              </Title>
              <div>
                {data.poster_path == null ? (
                  <img
                    src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                    alt="noimg"
                    style={{ width: 500, height: 360 }}
                  />
                ) : (
                  <img
                    src={`http://image.tmdb.org/t/p/w500${data.poster_path}`}
                    alt="movie"
                    style={{ width: 500, height: 360 }}
                  />
                )}
              </div>
              <div>
                <div>
                  <Icon type="star" theme="twoTone" />
                  {data.vote_average + `/10`}
                </div>
              </div>
              <div>
                <p>{data.overview}</p>
              </div>
              <Button
                onClick={() => {
                  handleOnclick(data.title, data.id, data.poster_path);
                }}
                type="primary"
              >
                <Icon type="plus" />
                Add to Watchlist
              </Button>
            </InnerContainer>
          );
        })}
      </OuterContainer>
    </div>
  );
};

export default MovieDetails;
