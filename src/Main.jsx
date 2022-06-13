import { useEffect, useState } from "react";
import Home from "./components/Home";
import MovieInfo from "./MovieInfo";
import FavouriteList from "./components/FavouriteList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from "axios";
import Signup from "./components/Signup";

const Main = (props) => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourite, setFavourite] = useState([]);
  const [desireValue, setDesireValue] = useState("");
  const [desireMovie, setDesireMovie] = useState();

  const getMoviesRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=58cdbabc`;

    const response = await axios.get(url);
    // const responseJson = await response.json();
    //const api_key = f6e40be5d1d55a1cd6d760c159793357;
    console.log(response);
    if (response.data.Search) {
      setMovies(response.data.Search);
    }
  };
  const setDesireData = async (desireValue) => {
    const urls = `http://www.omdbapi.com/?i=${desireValue}&apikey=58cdbabc`;

    const response = await axios.get(urls);

    console.log(response);
    if (response.data) {
      setDesireMovie(response.data);
    }
  };

  //tt3896198
  useEffect(() => {
    getMoviesRequest(searchValue);
  }, [searchValue]);
  useEffect(() => {
    setDesireData(desireValue);
  }, [desireValue]);
  const getFavouriteMovies = (movie) => {
    const updateFavoriteList = [...favourite, movie];
    setFavourite(updateFavoriteList);
  };
  const removeFavouriteMovies = (index) => {
    const newFavouriteList = favourite.filter((favouritee, id) => id !== index);
    setFavourite(newFavouriteList);
  };

  return (
    <>
      <Router>
        <div className="  min-h-screen w-screen">
          <div className="bg-[#354259]">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    movies={movies}
                    getFavouriteMovies={getFavouriteMovies}
                    setDesireValue={setDesireValue}
                  />
                }
              />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/moreInformation"
                element={<MovieInfo desireMovie={desireMovie} />}
              />
              <Route
                path="/favourite"
                element={
                  <FavouriteList
                    movies={favourite}
                    removeFavouriteMovies={removeFavouriteMovies}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Main;
