import React, { Component } from "react";
import Navbar from "./components/Navbar";
import SearchField from "./components/SearchField";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import MovieInfo from "./components/MovieInfo";

interface Props {}

interface State {
  movies: any;
  searchTerm: string;
  totalResults: number;
  currentPage: number;
  moviesPerPage: number;
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
      moviesPerPage: 20,
      currentMovie: null
    };
    this.apiKey = process.env.REACT_APP_API;
  }

  searchMovies = () => {
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
    this.searchMovies();
  };

  handleChange = (e: any) => {
    this.setState({ searchTerm: e.target.value });
  };

  getNextPage = pageNumber => {
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

  viewMovieInfo = (id: any): void => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id);

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    this.setState({ currentMovie: newCurrentMovie });
  };

  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  };

  render() {
    let numOfPages = Math.floor(
      this.state.totalResults / this.state.moviesPerPage
    );
    console.log(numOfPages, "NUM OF PAGES");
    console.log(this.getNextPage, "NEXT PAGE");
    console.log(this.state.currentPage, "CURRENT PAGE");
    console.log(this.state.totalResults, "TOTAL RESULTS");

    return (
      <div className="App">
        <Navbar></Navbar>
        {this.state.currentMovie === null ? (
          <div>
            <SearchField
              handleSearch={this.handleSearch}
              handleChange={this.handleChange}
            ></SearchField>{" "}
            <MovieList
              viewMovieInfo={this.viewMovieInfo}
              movies={this.state.movies}
            />
          </div>
        ) : (
          <MovieInfo
            closeMovieInfo={this.closeMovieInfo}
            currentMovie={this.state.currentMovie}
          />
        )}

        {this.state.totalResults > this.state.moviesPerPage ? (
          <Pagination
            pages={numOfPages}
            nextPage={this.getNextPage}
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
