import api from '../utils/api'
import { useState, useEffect } from 'react'
import Movies from './Movies'
import Preloader from './Preloader'

export default function Main(props) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    api
      .search('matrix')
      .then((res) => setMovies(res.Search))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="content">
      {isLoading ? <Preloader /> : <Movies movies={movies} />}
    </div>
  )
}
