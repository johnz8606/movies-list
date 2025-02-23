import React from "react";
import Header from "./components/Header";
import MovieList from './components/MovieList';
import Footer from "./components/Footer";
import Movie from './components/Movie';
import './App.css';

function App () {
  return (
    <div className="App">
      <Header />
      <MovieList />
      <Footer />
    </div>
  )
}

export default App;