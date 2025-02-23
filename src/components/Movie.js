import React from 'react'

const Movie = ({title, year, isFavorite, toggleFavorite}) => {
  return (
    <div className='movie'>
      <h2 className='movie-title'>{title}</h2>
      <p className='movie-year'>Year: {year}</p>
      <button className='favorite-btn' onClick={toggleFavorite}>
      {isFavorite ? "❤️ Unfavorite" : "♡ Favorite"}
      </button>
    </div>
  )
}

export default Movie
