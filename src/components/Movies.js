import MovieCard from './MovieCard'

export default function Movies(props) {
  const { movies } = props

  return (
    <div className="movies">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} {...movie} />
      ))}
    </div>
  )
}
