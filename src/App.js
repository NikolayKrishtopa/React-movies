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
  const [search, setSearch] = useState('')
  const [searchSubmitted, setSearchSubmitted] = useState('matt')
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(1)
  const [pageQty, setPageQty] = useState(1)
  const [searchAlert, setSearchAlert] = useState('')

  useEffect(() => {
    {
      setIsLoading(true)
      api
        .search(searchSubmitted, page, category)
        .then((res) => {
          setMovies(res.Search)
          setPageQty(search ? Math.ceil(res.totalResults / 10) : 1)
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false)
          setSearchAlert('')
        })
    }
  }, [searchSubmitted, page, category])

  function handleChangeCategory(category) {
    setCategory(category)
    setPage(1)
  }

  function handleSearchChange(e) {
    setSearchAlert('')
    setSearch(e.target.value)
  }

  function handleSubmitSearch() {
    if (searchSubmitted === search) {
      setSearchAlert('This value match the current search result')
      return
    } else {
      setSearchSubmitted(search)
      setPage(1)
    }
  }

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="App">
          <Header />
          <Search
            search={search}
            onSearchChange={handleSearchChange}
            onSubmit={handleSubmitSearch}
            searchAlert={searchAlert}
          />
          <TypeFilter value={category} onChangeValue={handleChangeCategory} />
          <Main
            movies={movies}
            category={category}
            pageQty={pageQty}
            page={page}
            onChangePage={setPage}
          />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
