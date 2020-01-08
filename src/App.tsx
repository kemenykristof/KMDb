import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SearchArea from "./components/SearchArea";

interface Props {}

interface State {
  movies: [];
}

class App extends Component<Props, State> {
  apiKey: string | undefined;
  constructor(props: Props) {
    super(props);
    this.state = {
      movies: []
    };
    this.apiKey = process.env.REACT_APP_API_KEY;
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <SearchArea></SearchArea>
      </div>
    );
  }
}
export default App;
