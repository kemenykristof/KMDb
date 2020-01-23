import React from "react";
import Icon from "antd/lib/icon";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

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
  const currentMovie = props.location.state;
  console.log(props.location.state, "state from link props");

  return (
    <div>
      <NavLink to="/">
        <div style={{ cursor: "pointer", paddingTop: 50 }}>
          <Icon type="left" />
          <span style={{ marginLeft: 10 }}>Go back</span>
        </div>
      </NavLink>
      <Container>
        <Title>
          <span>
            <span style={{ fontSize: 25, fontWeight: "bold" }}>
              {props.location.state.title}
            </span>
            {""} <span>{`(` + props.location.state.release_date + `)`}</span>
          </span>
        </Title>
        <div>
          {currentMovie.poster_path == null ? (
            <img
              className=""
              src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
              alt="noimg"
              style={{ width: 200, height: 160 }}
            />
          ) : (
            <img
              className=""
              src={`http://image.tmdb.org/t/p/w500${props.location.state.poster_path}`}
              alt="movie"
              style={{ width: 500, height: 360 }}
            />
          )}
        </div>
        <div>
          <div>
            <Icon type="star" theme="twoTone" />
            {props.location.state.vote_average + `/10`}
          </div>
        </div>
        <div>
          <p>{props.location.state.overview}</p>
        </div>
        <Icon type="plus-circle" theme="twoTone" />
      </Container>
    </div>
  );
};

export default MovieDetails;
