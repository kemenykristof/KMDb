import React, { Component, FormEvent } from "react";
import SearchField from "./SearchField";
import SearchedMovieList from "./SearchedMovieList";
import { Pagination } from "antd";
import { Movie } from "../types/types";

interface Props {}

interface State {
  movies: Movie[];
  searchTerm: string;
  totalResults: number;
  currentPage: number;
  moviesPerPage: number;
  currentMovie: Movie | null;
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

  searchMovies = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`
      ).then(result => result.json());
      this.setState({
        movies: [...data.results],
        totalResults: data.total_results
      });
    } catch (error) {
      console.log(error, "error, something went wrong");
    }
  };

  handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.searchMovies();
  };

  handleChange = (e: { target: { value: string } }) => {
    this.setState({ searchTerm: e.target.value });
  };

  getPage = async (pageNumber: number) => {
    try {
      const rowData = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=en-US&page=${pageNumber}`
      );
      const data = await rowData.json();
      this.setState({
        movies: [...data.results],
        totalResults: data.total_results,
        currentPage: pageNumber
      });
    } catch (error) {
      console.log("error getting the requested page");
    }
  };

  viewMovieInfo = (id: string | number) => {
    let filteredMovie;
    this.state.movies.forEach((movie: { id: string | number }) => {
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
    const numberOfPages = Math.ceil(this.state.totalResults / 20);
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
            total={numberOfPages}
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
