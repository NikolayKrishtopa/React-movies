import spinner from '../images/spinner.gif'

export default function Preloader() {
  return (
    <div className="preloader">
      <img src={spinner} alt="Идет загрузка" className="preloader__spinner" />
      <h2 className="preloader__title">Loading...</h2>
    </div>
  )
}
