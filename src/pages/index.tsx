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
          <img src={logo} onClick={() => setPage("")}></img>
          <div onClick={() => setPage("portfolio")}>Portfolio</div>
          <div onClick={() => setPage("contact")}>Contact</div>
        </div>
      </nav>

      <div className="about">
          <div className="about-desc">
              <span className="about-desc-name fira-code">Adam Oller
                { page === "portfolio" && "'s works" }
                { page === "contact" && "'s contact page"  }
                { page === "" && "" }
              </span>
              <p className="about-desc-title">Programmer and a jack of all trades</p>
          </div>

          <span className="about-bio"> Hey there!
                { page === "portfolio" && " This is my personal portfolio. These are just a few examples of what I'm capable of. Please enjoy!" }
                { page === "contact" && " My contact page is waiting for you. Got any questions - let's talk. I'm open and always happy to aid anyone in need."  }
                { page === "" && " I'm Adam - Rust programmer, Linux enthusiast, graphics designer, adventurer, books suck me in for hours. I'm always open to new challenges." }
          </span>
      </div>
        { page === "portfolio" && <div className="separator wave3"></div>  }
        { page === "contact" && <div className="separator wave2"></div>  }
        { page === "" && <div className="separator wave1"></div> }

      <div className="content">
        { page === "portfolio" && <Portfolio/> }
        { page === "contact" && <Contact/>  }
        { page === "" && <Home/> }
      </div>

      <footer>Copyright &#169; Adam Oller 2024-eternity</footer>
    </main>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Adam Oller - Programmer and a jack of all trades</title>
