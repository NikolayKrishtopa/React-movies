import api from './utils/api'
import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Search from './components/Search'
import Preloader from './components/Preloader'
import TypeFilter from './components/TypeFilter'

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [search, setSearch] = useState('matt')
  const [isSearchSubmitted, setIsSearchSubmitted] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    setIsLoading(true)
    api
      .search(search)
      .then((res) => {
        setMovies(res.Search)
      })
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
          <TypeFilter value={category} onChangeValue={setCategory} />
          <Main movies={movies} category={category} />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
