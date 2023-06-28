import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const heading = (<div className="banner_outer"><header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">
            <img src="/assets/images/internalize-icon.svg" alt="" className="img-fluid internalize-icon"/><img
              src="/assets/images/internalize-text.svg" alt="" className="img-fluid internalize-text"/>
          </a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
            <span className="navbar-toggler-icon"/>
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#basic-feature">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link try_free_btn" href="https://apps.apple.com/app/internalize/id6446457429"
                   target="_blank">Download</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  </header></div>);
  let header;

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {heading}
      <header className="global-header">
        {header}
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} Blit Labs
      </footer>
    </div>
  )
}

export default Layout
