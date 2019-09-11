import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const style = {
  textContainer: {
    margin: "0 auto",
    maxWidth: "42rem",
  },
}

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div style={style.textContainer}>
      <p>
        Who are we building technology for? What assumptions about the future of
        this technology or its users are we making? I find direction in my
        projects by considering the actual people that benefit and the stories
        they tell about what's needed.
      </p>
      <p>
        I'm a writer and engineer. The majority of my professional work has been
        as a web developer in Javascript and JS frameworks (React/Angular). At
        the same time, I enjoy being interdisciplinary - working across
        languages and the stack as well as working closely with product teams
        and users.
      </p>
      <p>
        I appreciate organizations that invest in their own people and internal
        processes. I'm intrigued by projects that involve working with users and
        understanding how they think or by projects that involve strategically
        refactoring and improving a codebase over time.
      </p>
    </div>
  </Layout>
)

export default AboutPage
