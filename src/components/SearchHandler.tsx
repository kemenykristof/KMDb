import React, { Component, FormEvent } from "react";
import SearchField from "./SearchField";
import SearchedMovieList from "./SearchedMovieList";
import { Pagination } from "antd";

interface Props {}

interface State {
  movies: any;
  searchTerm: string;
  totalResults: number;
  currentPage: number;
  moviesPerPage: number;
  currentMovie: any;
}

class SearchHandler extends Component<Props, State> {
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
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results
        });
      });
  };

  handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.searchMovies();
  };

  handleChange = (e: { target: { value: string; }; }) => {
    this.setState({ searchTerm: e.target.value });
  };

  getPage = (pageNumber: number) => {
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

  viewMovieInfo = (id: string | number) => {
    let filteredMovie;
    this.state.movies.forEach((movie: { id: string | number; }) => {
      if (movie.id === id) {
        filteredMovie = movie;
      }
    });

    this.setState({ currentMovie: filteredMovie });
  };

  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  };

  render() {
    /* const numberOfPages = Math.ceil(this.state.totalResults / 20); */
    return (
      <div>
        <SearchField
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
        ></SearchField>
        <SearchedMovieList
          viewMovieInfo={this.viewMovieInfo}
          movies={this.state.movies}
        ></SearchedMovieList>
        {this.state.totalResults > this.state.moviesPerPage ? (
          <Pagination
            defaultCurrent={this.state.currentPage}
            total={this.state.totalResults}
            onChange={this.getPage}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default SearchHandler;
