import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialIcons from "../components/SocialIcons"
import "../css/layout.css"

const style = {
  mainText: {
    marginLeft: "10px",
  },
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="site-title" style={{ ...style.mainText, marginLeft: 0 }}>
      Hana Worku
    </h1>
    <p style={style.mainText}>
      Pardon the mess - I'm rebuilding my personal site. Until then, find me on
      social.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <SocialIcons />
    </div>
  </Layout>
)

export default IndexPage
