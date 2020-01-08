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
    this.apiKey = process.env.REACT_APP_API_KEY;
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

  handleSearch = (e: React.MouseEvent): void => {
    e.preventDefault();
    this.fetchMovies();
  };

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        // @ts-ignore
        <SearchArea handleSearch={this.handleSearch}></SearchArea>
      </div>
    );
  }
}
export default App;
