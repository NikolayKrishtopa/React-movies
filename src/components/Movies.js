import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

export default function Movies(props) {
  const { movies, category } = props
  const [moviesSorted, setMoviesSorted] = useState(
    movies.filter((e) => (category ? e.Type === category : e))
  )
  useEffect(() => {
    setMoviesSorted(movies.filter((e) => (category ? e.Type === category : e)))
  }, [category])
  return (
    <div className="movies">
      {moviesSorted.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  )
}
