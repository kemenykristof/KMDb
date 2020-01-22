import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import Watchlist from "./components/Watchlist";
import PopularMovies from "./components/PopularMovies";

interface Props {}

interface State {
  movies: any;
  searchTerm: string;
  totalResults: number;
  currentPage: number;
  moviesPerPage: number;
  currentMovie: any;
  showSearchResults: boolean;
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
      currentMovie: null,
      showSearchResults: false
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
          totalResults: data.total_results,
          showSearchResults: true
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
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
          currentPage: pageNumber
        });
      });
  };

  viewMovieInfo = (id: any) => {
    const filteredMovie: any = this.state.movies.filter(
      (movie: any) => movie.id === id
    );

    const newCurrentMovie: any =
      filteredMovie.length > 0 ? filteredMovie[0] : null;

    this.setState({ currentMovie: newCurrentMovie });
  };

  closeMovieInfo = () => {
    this.setState({ currentMovie: null });
  };

  render() {
    let numOfPages = Math.floor(
      this.state.totalResults / this.state.moviesPerPage
    );

    return (
      <div className="App">
        <Navbar></Navbar>
        {this.state.showSearchResults && (
          <MovieList
            viewMovieInfo={this.viewMovieInfo}
            movies={this.state.movies}
          />
        )

        /*  <MovieInfo
            closeMovieInfo={this.closeMovieInfo}
            currentMovie={this.state.currentMovie}
          /> */
        }

        {this.state.totalResults > this.state.moviesPerPage &&
        this.state.currentMovie === null ? (
          <Pagination
            pages={numOfPages}
            nextPage={this.getNextPage}
            currentPage={this.state.currentPage}
          />
        ) : (
          ""
        )}
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={PopularMovies} exact />
              <Route path="/watchlist" component={Watchlist} exact />
              <Route path="/results" component={MovieList} exact />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}
export default App;
