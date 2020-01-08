import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SearchArea from "./components/SearchArea";

interface Props {}

interface State {
  movies: any;
  searchTerm: string;
}

class App extends Component<Props, State> {
  apiKey: string | undefined;
  constructor(props: Props) {
    super(props);
    this.state = {
      movies: [],
      searchTerm: ""
    };
    this.apiKey = "794ebc7b38b293ba24990ded99d3d9eb";
  }

  fetchMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: [...data.results] });
      });
  };

  handleSearch = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.fetchMovies();
  };

  handleChange = (e: any) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <SearchArea
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
        ></SearchArea>
      </div>
    );
  }
}
export default App;
