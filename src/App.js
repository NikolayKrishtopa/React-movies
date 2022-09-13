import api from './utils/api'
import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Search from './components/Search'
import Preloader from './components/Preloader'

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('matrix')
  const [isSearchSubmitted, setIsSearchSubmitted] = useState('')

  useEffect(() => {
    setIsLoading(true)
    api
      .search(search)
      .then((res) => setMovies(res.Search))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false))
  }, [isSearchSubmitted])

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="App">
          <Header />
          <Search
            search={search}
            onSearchChange={setSearch}
            onSubmit={setIsSearchSubmitted}
          />
          <Main movies={movies} />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
