import Movies from './Movies'

export default function Main(props) {
  const { pageQty, page, onChangePage, movies } = props
  const pages = []
  for (let i = 1; i <= pageQty; i++) {
    pages.push(i)
  }
  return (
    <div className="content">
      {pageQty > 0 && pageQty !== 1 && (
        <ul className="pagination">
          <li
            className="waves-effect"
            onClick={() => page > 1 && onChangePage(page - 1)}
          >
            &larr;
          </li>
          {pages.map((e) => (
            <li
              key={e}
              className={`waves-effect ${page === e && 'active'}`}
              onClick={() => onChangePage(e)}
            >
              <a href="#!">{e}</a>
            </li>
          ))}

          <li
            className="waves-effect"
            onClick={() => page < pageQty && onChangePage(page + 1)}
          >
            &rarr;
          </li>
        </ul>
      )}
      {movies ? <Movies {...props} /> : <h2>Nothing found</h2>}
    </div>
  )
}
