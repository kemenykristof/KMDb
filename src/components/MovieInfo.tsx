import React from "react";
import Icon from "antd/lib/icon";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MovieInfo = (props: any) => {
  const releaseYear = props.currentMovie.release_date.substring(0, 4);
  return (
    <div>
      <div
        onClick={props.closeMovieInfo}
        style={{ cursor: "pointer", paddingTop: 50 }}
      >
        <Icon type="left" />
        <span style={{ marginLeft: 10 }}>Go back</span>
      </div>

      <Container>
        <Title>
          <span>
            <span style={{ fontSize: 25, fontWeight: "bold" }}>
              {props.currentMovie.title}
            </span>
            {""} <span>{`(` + releaseYear + `)`}</span>
          </span>
        </Title>
        <div>
          {props.currentMovie.poster_path == null ? (
            <img
              className=""
              src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
              alt="noimg"
              style={{ width: 200, height: 160 }}
            />
          ) : (
            <img
              className=""
              src={`http://image.tmdb.org/t/p/w500${props.currentMovie.poster_path}`}
              alt="movie"
              style={{ width: 500, height: 360 }}
            />
          )}
        </div>
        <div>
          <p>{props.currentMovie.overview}</p>
        </div>
      </Container>
    </div>
  );
};

export default MovieInfo;
