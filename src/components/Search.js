import { useEffect } from 'react'

export default function Search(props) {
  const { search, onSearchChange, onSubmit, searchAlert } = props

  return (
    <div className="row">
      <div className="col s12 search">
        <form
          className="input-field"
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit()
          }}
        >
          <input
            id="search"
            placeholder="Search"
            type="search"
            className="validate"
            value={search}
            onChange={onSearchChange}
          />
          {/* <label htmlFor="search">Search</label> */}
        </form>
        <p className="search__error-message">{searchAlert}</p>
      </div>
    </div>
  )
}
