import React from 'react'
import MovieCard from '../../component/MovieCard/MovieCard'

function MoviesListPage(props) {
  return (
    <>
    <h1>Cineplex EVENT</h1>
    <MovieCard movies={props.movies} />
    </>
  )
}

export default MoviesListPage