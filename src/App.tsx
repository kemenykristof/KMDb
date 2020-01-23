import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Watchlist from "./components/Watchlist";
import PopularMovies from "./components/PopularMovies";
import WatchlistContextProvider from "./contexts/WatchlistContext";
import MovieDetails from "./components/MovieDetails";
import SearchHandler from "./components/SearchHandler";

interface Props {}

interface State {}

class App extends Component<Props, State> {
  render() {
    return (
      <div className="App">
        <WatchlistContextProvider>
          <BrowserRouter>
            <Navbar></Navbar>
            <Switch>
              <Route path="/" component={PopularMovies} exact></Route>
              <Route path="/watchlist" component={Watchlist} exact />
              <Route path="/search" component={SearchHandler} exact />
              <Route path="/movie/:id" component={MovieDetails} />
            </Switch>
          </BrowserRouter>
        </WatchlistContextProvider>
      </div>
    );
  }
}
export default App;
