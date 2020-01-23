import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

interface Props {
  image: any;
  title: string;
}

const MovieCard = (props: any) => {
  return (
    <Card
      onClick={() => props.viewMovieInfo(props.movieId)}
      hoverable
      style={{ width: 380, borderRadius: "10px" }}
      cover={
        props.image === null ? (
          <img
            alt="movie"
            src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
          />
        ) : (
          <img
            src={`http://image.tmdb.org/t/p/w185${props.image}`}
            alt="movie"
            style={{ width: "100%", height: 250 }}
          />
        )
      }
    >
      <Meta
        title={props.title}
        description={
          <p>
            <Link to={`$(props.match.params.id)`}>View infos</Link>
          </p>
        }
      />
    </Card>
  );
};

export default MovieCard;
