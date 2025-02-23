import React, { useState } from "react";
import Movie from "./Movie";
import moviesData from "../data/movieData";


const MovieList = () => {
    const [movies, setMoives] = useState(moviesData);


    const toggleFavoite = (id) => {
        setMoives(
            (preMovies) =>
                preMovies.map(
                    (movie) =>
                        movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie
                )
        )
    }

    return (
        <div className="movie-list">
            {
                movies.map(
                    (movie) => (
                        <Movie
                            key={movie.id}
                            title={movie.title}
                            isFavorite={movie.isFavorite}
                            toggleFavorite={() => toggleFavoite(movie.id)}
                        />
                    )
                )
            }

        </div>
    )
}

export default MovieList
