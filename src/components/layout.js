/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "../css/layout.css"

const style = {
  container: {
    margin: `0 auto`,
    display: "flex",
    // minHeight: "100vh",
    flexDirection: "column",
    padding: `0px 1.0875rem 1.45rem`,
    paddingTop: 0,
  },
  main: {
    flex: 1,
    margin: "2rem",
  },
  footer: {
    textAlign: "center",
    width: "100%",
  },
}
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={style.container}>
        <main style={style.main}>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
