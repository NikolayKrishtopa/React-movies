export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper green darken-1 header">
        <a href="#" className="brand-logo">
          React-movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/NikolayKrishtopa/React-movies"
              target="blank"
            >
              Project Repo
            </a>
          </li>
          <li>
            <a href="https://github.com/NikolayKrishtopa" target="blank">
              My github page
            </a>
          </li>
          <li>
            <a href="mailto:nikolay.krishtopa@gmail.com" target="blank">
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
