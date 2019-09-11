import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/main.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgba(102, 0, 255, 0.46)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h2
        style={{
          margin: 0,
        }}
      >
        <Link activeClassName="nav-link-active" to="/" className="nav-link">
          Home
        </Link>
        <Link
          activeClassName="nav-link-active"
          to="/about/"
          className="nav-link"
        >
          About
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
