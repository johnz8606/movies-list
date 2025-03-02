import { useEffect, useState } from 'react';
import moviesData from '../data/movieData';
import MovieList from '../components/MovieList';
import './MoviesDirectoryPage.scss';

function MoviesDirectoryPage() {
    // Initialize movies state with localStorage or default data
    const [movies, setMovies] = useState(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favoredMovies')) || [];
        return moviesData.map((movie) => ({
            ...movie,
            isFavorite: storedFavorites.some((fav) => fav.id === movie.id),
        }));
    });

    const [showFavorites, setShowFavorites] = useState(false);

    // Save favorited movies to localStorage whenever the movies state changes
    useEffect(() => {
        const favoritedMovies = movies.filter((movie) => movie.isFavorite);
        localStorage.setItem('favoredMovies', JSON.stringify(favoritedMovies));
    }, [movies]);

    // Toggle favorite status
    const toggleFavorite = (id) => {
        setMovies((prevMovies) =>
            prevMovies.map((movie) =>
                movie.id === id ? { ...movie, isFavorite: !movie.isFavorite } : movie
            )
        );
    };

    // Filter movies based on showFavorites state
    const filteredMovies = showFavorites
        ? movies.filter((movie) => movie.isFavorite)
        : movies;

    return (
        <div className="movies-directory">
            <h2>Movies Directory</h2>
            <button onClick={() => setShowFavorites(!showFavorites)}>
                {showFavorites ? 'Show All Movies' : 'Show Favorites'}
            </button>
            <MovieList movies={filteredMovies} toggleFavorite={toggleFavorite} />
        </div>
    );
}

export default MoviesDirectoryPage;