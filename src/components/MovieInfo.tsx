import React from "react";
import Icon from "antd/lib/icon";

const MovieInfo = props => {
  return (
    <div>
      <div
        onClick={props.closeMovieInfo}
        style={{ cursor: "pointer", paddingTop: 50 }}
      >
        <Icon type="left" />
        <span style={{ marginLeft: 10 }}>Go back</span>
      </div>
      <div>
        {props.currentMovie.poster_path == null ? (
          <img
            className=""
            src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
            alt="noimg"
            style={{ width: "100%", height: 360 }}
          />
        ) : (
          <img
            className=""
            src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
            alt="movie"
            style={{ width: "100%", height: 360 }}
          />
        )}
      </div>
      <div>
        <p>{props.currentMovie.title}</p>
        <p>{props.currentMovie.release_date}</p>
        <p>{props.currentMovie.overview}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
