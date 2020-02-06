import React, { useContext } from "react";
import Icon from "antd/lib/icon";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { WatchlistContext } from "../contexts/WatchlistContext";
import { notification } from "antd";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MovieDetails = (props: any) => {
  const { dispatch } = useContext(WatchlistContext);

  const openNotificationWithIcon = type => {
    notification[type]({
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

  const handleOnclick = (title: string, id: string, poster_path: string) => {
    // todo if check movie id already in watchlist to ensure unique list
    dispatch({ type: "ADD_MOVIE", movie: { title, id, poster_path } });
  };

  return (
    <div>
      <NavLink to="/">
        <div style={{ cursor: "pointer", paddingTop: 50 }}>
          <Icon type="left" />
          <span style={{ marginLeft: 10 }}>Go back</span>
        </div>
      </NavLink>
      {result.map((data: any, index: number) => {
        return (
          <Container key={index}>
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
                  style={{ width: 200, height: 160 }}
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
            <Icon
              onClick={() => {
                handleOnclick(data.title, data.id, data.poster_path);
                openNotificationWithIcon("success");
              }}
              style={{ fontSize: "30px", cursor: "pointer" }}
              type="plus-circle"
              theme="twoTone"
            />
          </Container>
        );
      })}
    </div>
  );
};

export default MovieDetails;
