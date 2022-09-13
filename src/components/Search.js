import { useEffect } from 'react'

export default function Search(props) {
  const { search, onSearchChange, onSubmit } = props

  useEffect(() => {
    onSearchChange('')
  }, [])

  return (
    <div className="row">
      <div className="col s12">
        <form
          className="input-field"
          onSubmit={(e) => {
            onSubmit(search)
            e.preventDefault()
          }}
        >
          <input
            id="search"
            type="search"
            className="validate"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <label for="search">Search</label>
        </form>
      </div>
    </div>
  )
}
