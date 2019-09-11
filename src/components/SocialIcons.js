import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import "../css/main.css"

const style = {
  container: {
    display: "flex",
  },
}

const NETWORKS = {
  github: {
    name: "GitHub",
    link: "https://www.github.com/haworku",
    icon: <FaGithub />,
  },
  linkedin: {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/haworku",
    icon: <FaLinkedin />,
  },
}

const SocialIcon = props => {
  const { network } = props

  const onClick = event => {
    event.preventDefault()
    window.open(NETWORKS[network].link)
  }

  return (
    <button
      aria-label={`Share via ${NETWORKS[network].name}`}
      className="social-icon"
      onClick={onClick}
      href={NETWORKS[network].link}
    >
      {NETWORKS[network].icon}
    </button>
  )
}

const SocialIcons = () => (
  <div style={style.container}>
    <SocialIcon id="linkedin" network="linkedin" />
    <SocialIcon id="github" network="github" />
  </div>
)

export default SocialIcons
