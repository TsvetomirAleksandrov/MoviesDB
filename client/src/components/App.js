import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "../hoc/auth";

import LoginPage from "./LoginPage/LoginPage";
import RegisterPage from "./RegisterPage/RegisterPage";
import Navbar from './Navbar/Navbar';
import HomePage from './HomePage/HomePage';
import Search from './Search/Search';
import MovieDetails from './MovieDetails/MovieDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${searchValue}&page=1&include_adult=false`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <Router>
      <div className="App">
        <Navbar searchValue={searchValue} setSearchValue={setSearchValue} movies={movies} />

        <Switch>
          <Route exact path="/" component={Auth(HomePage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          {/* <Route exact path="/movie/:movieTitle" component={Auth(MovieDetails, null)} /> */}
          <Route exact path="/search">
            <Search searchValue={searchValue} setSearchValue={setSearchValue} movies={movies} />
          </Route>
        </Switch>

      </div>
    </Router >
  );
}

export default App;
