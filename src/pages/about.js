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
        Who are we building for? What assumptions about the future of technology
        or its users are we making? I find direction in my projects by
        considering the actual people that benefit and the stories they tell
        about what's needed.
      </p>
      <p>
        I'm a writer, strategist, and developer. The majority of my professional
        work in software has been as a web developer in Javascript and JS
        frameworks (React/Angular). My coworkers say that I’m especially skilled
        at debugging - taking on complicated work and seeing it through to
        completion. I think the secret is just being unafraid to ask questions,
        sometimes a lot of them. Prior to working in tech, I worked in nonprofit
        and civic organizations - interfacing regularly with young people,
        elders, policymakers, families, academics, business owners, and so many
        others. I know what it's like to engage very different kinds of people,
        who often have different language and understanding around a problem and
        its solutions. I know how to navigate complexity and still be
        collaborative.
      </p>
      <p>
        Accordingly, I appreciate workplaces that care about the process of work
        - how/why we work and not only what we create. I think space for
        reflection, disagreement, and ethical discussions at the workplace is
        essential. In this context, I enjoy working across languages and the
        stack, working closely with product teams and users.
      </p>
    </div>
  </Layout>
)

export default AboutPage
