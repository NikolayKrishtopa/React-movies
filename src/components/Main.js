import Movies from './Movies'

export default function Main(props) {
  return (
    <div className="content">
      <Movies {...props} />
    </div>
  )
}
