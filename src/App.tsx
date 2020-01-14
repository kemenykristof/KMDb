import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SearchField from "./components/SearchField";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

interface Props {}

interface State {
  movies: any;
  searchTerm: string;
  totalResults: number;
  currentPage: number;
  currentMovie: any;
}

class App extends Component<Props, State> {
  apiKey: string | undefined;
  constructor(props: Props) {
    super(props);
    this.state = {
      movies: [],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
    };
    this.apiKey = process.env.REACT_APP_API;
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

  nextPage = (pageNumber: number) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=en-US&page=${pageNumber}`
    )
      .then(data => data.json())
      .then(data => {
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
          currentPage: pageNumber
        });
      });
  };

  render() {
    let numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div className="App">
        <Navbar></Navbar>
        <SearchField
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
        ></SearchField>
        <MovieList movies={this.state.movies} />
        {this.state.totalResults > 20 && this.state.currentMovie == null ? (
          <Pagination
            pages={numberPages}
            nextPage={this.nextPage}
            currentPage={this.state.currentPage}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default App;
