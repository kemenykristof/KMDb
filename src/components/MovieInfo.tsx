import React from "react";
import Icon from "antd/lib/icon";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MovieInfo = (props: any) => {
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
        <div>
          <span>
            {props.currentMovie.title}
            {props.currentMovie.release_date.substring(0, 4)}
          </span>
        </div>
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
              src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
              alt="movie"
              style={{ width: 200, height: 160 }}
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
