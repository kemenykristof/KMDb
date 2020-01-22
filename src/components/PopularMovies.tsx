import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "antd";

const { Meta } = Card;

const PopularMovies = props => {
  const [popularMovies, setPopularMovies]: any = useState([]);
  let apiKey = process.env.REACT_APP_API;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      );
      setPopularMovies(result.data);
      console.log(result.data);
    };
    fetchData();
  }, [apiKey]);

  return popularMovies.length ? (
    <div>
      <Card
        onClick={() => props.viewMovieInfo(props.movieId)}
        hoverable
        style={{ width: 280, borderRadius: "10px" }}
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
              <a href="/#">View infos</a>
            </p>
          }
        />
      </Card>
    </div>
  ) : (
    <div>
      <h2> No result</h2>
    </div>
  );
};

export default PopularMovies;
