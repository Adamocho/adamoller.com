import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/index.css"
import Home from "../components/home"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
import logo from "../images/icon.svg"

const IndexPage: React.FC<PageProps> = () => {

  const [page, setPage] = React.useState("");

  function changeTo(value: string) {
    setPage(value);
  }

  return (
    <main>
      <nav>
        <div className="items">
          <a href="#about">
            <img className="logo" src={logo} onClick={() => setPage("")}></img>
          </a>
        </div>
      </nav>

      <div className="about" id="about">
          <div className="about-desc">
              <span className="about-desc-name fira-code">Adam Oller</span>
              <p className="about-desc-title">Programmer and a jack of all trades</p>
          </div>
        <span className="intro-bio"> I'm Adam - Rust programmer, Linux enthusiast, graphics designer, adventurer, books suck me in for hours, always open to new challenges.</span>
      </div>

      <div className="content">
        <Home/>

        <Portfolio/>

        <Contact/>
      </div>

      <footer>&#169; 2024-2025 Adam Oller</footer>
    </main>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Adam Oller - Programmer and a jack of all trades</title>
