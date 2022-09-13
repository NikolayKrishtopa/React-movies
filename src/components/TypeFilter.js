export default function TypeFilter(props) {
  const { value, onChangeValue } = props

  return (
    <select
      value={value}
      onChange={(e) => onChangeValue(e.target.value)}
      className="input-field col s12 typeFilter"
    >
      <option value="">Choose type</option>
      <option value="movie">Movies</option>
      <option value="game">Games</option>
      <option value="series">Series</option>
    </select>
  )
}
