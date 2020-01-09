import React from "react";
import { Card } from "antd";

const { Meta } = Card;

interface Props {
    image:any
}

const Movie = (props: Props) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Movie" description="themoviedb.com" />
    </Card>
  );
};

export default Movie;
