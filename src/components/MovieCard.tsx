import React from "react";
import { Card } from "antd";

const { Meta } = Card;

interface Props {
  image: any;
  title: string;

}

const MovieCard = (props: Props) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
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
            style={{ width: "100%", height: 360 }}
          />
        )
      }
    >
      <Meta title={props.title} description={<p><a href="#" onClick={()=> props.viewMovieInfo(props.movieId)}>View infos</a></p>} />
    </Card>
  );
};

export default MovieCard;
