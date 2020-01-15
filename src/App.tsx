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
  moviesPerPage: number;
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
      moviesPerPage: 20
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
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results
        });
      });
  };

  handleSearch = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    this.fetchMovies();
  };

  handleChange = (e: any) => {
    this.setState({ searchTerm: e.target.value });
  };

  nextPage = pageNumber => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`
    )
      .then(data => data.json())
      .then(data => {
        console.log(data, "DATA");
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
          currentPage: pageNumber
        });
      });
  };

  render() {
    let numOfPages = Math.floor(
      this.state.totalResults / this.state.moviesPerPage
    );
    console.log(numOfPages, "NUM OF PAGES");
    console.log(this.nextPage, "NEXT PAGE");
    console.log(this.state.currentPage, "CURRENT PAGE");
    console.log(this.state.totalResults, "TOTAL RESULTS");

    return (
      <div className="App">
        <Navbar></Navbar>
        <SearchField
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
        ></SearchField>
        <MovieList movies={this.state.movies} />
        {this.state.totalResults > this.state.moviesPerPage ? (
          <Pagination
            pages={numOfPages}
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
