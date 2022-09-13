export default function MovieCard(props) {
  const { Title: title, Year: year, Poster: poster, Type: type } = props
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={poster} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <span className="right">{type}</span>
        <p>{year}</p>
      </div>
    </div>
  )
}
