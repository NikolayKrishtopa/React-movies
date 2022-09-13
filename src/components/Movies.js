import api from '../utils/api'
import { useState, useEffect } from 'react'
import MovieCard from './MovieCard'

export default function Movies(props) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    api.search('matrix').then((res) => setMovies(res.Search))
  }, [])

  console.log(movies)
  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  )
}
