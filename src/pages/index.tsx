import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/index.css"
import Home from "../components/home"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
import Hobbys from "../components/hobbys"
import portrait from "../images/me-2.jpg"
import logo from "../images/icon.svg"
import waves_blue_black from "../images/waves-blue-to-black.svg"

const IndexPage: React.FC<PageProps> = () => {

  const [page, setPage] = React.useState("");

  function changeTo(value: string) {
    setPage(value);
  }

  return (
    <main>
      <nav>
        <div className="items">
          <img src={logo} onClick={() => setPage("")}></img>
          <div onClick={() => setPage("portfolio")}>Portfolio</div>
          <div onClick={() => setPage("hobbys")}>Hobbys</div>
          <div onClick={() => setPage("contact")}>Contact</div>
        </div>
      </nav>

      <div className="about">
          <div className="about-desc">
              <span className="about-desc-name fira-code">Adam Oller</span>
              <p className="about-desc-title">Programmer and a jack of all trades</p>
          </div>

          <span className="about-bio">
            Hey there! I'm Adam - Rust programmer, Linux enthusiast, graphics designer, adventurer. Books suck me in for hours.

          </span>
      </div>

      <div className="separator wave1"></div>

      <div className="content">
        { page === "portfolio" && <Portfolio/> }
        { page === "hobbys" && <Hobbys/> }
        { page === "contact" && <Contact/>  }
        { page === "" && <Home/> }
      </div>

      <footer>Copyright &#169; Adam Oller 2024-eternity</footer>
    </main>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Adam Oller - Programmer and a jack of all trades</title>
