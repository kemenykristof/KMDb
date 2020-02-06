import { Rate } from "antd";
import React from "react";

class Rater extends React.Component {
  state = {
    value: 3
  };

  handleChange = (value: number) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate onChange={this.handleChange} value={value} />
      </span>
    );
  }
}

export default Rater;
