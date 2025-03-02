import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import MovieList from './components/MovieList';
import Footer from "./components/Footer";
import MoviesDirectoryPage from './pages/MoviesDirectoryPage';
import MovieDetailPage from './pages/MovieDetailPage';
import HomePage from './pages/HomePage';
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesDirectoryPage />} />
          <Route path="/movies/:id" element={<MovieDetailPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;