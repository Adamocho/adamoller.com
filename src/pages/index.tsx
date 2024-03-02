import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/index.css"
import Portfolio from "../components/portfolio"
import Contact from "../components/contact"
import Hobbys from "../components/hobbys"

const IndexPage: React.FC<PageProps> = () => {

  const [page, setPage] = React.useState("portfolio");

  function changeTo(value: string) {
    setPage(value);
  }

  return (
    <main>
      <nav>
        <div className="items">
          <div onClick={() => setPage("portfolio")}>Portfolio</div>
          <div onClick={() => setPage("hobbys")}>Hobbys</div>
          <div onClick={() => setPage("contact")}>Contact</div>
        </div>
      </nav>
      <div className="about">
          <img src="../images/icon.png" alt="" />
          <div className="about-names">
              <span className="about-name signature">Adam Oller</span>
              <div className="about-separator"></div>
              <p className="about-title">Programmer and a jack of all trades</p>
          </div>
          <span className="about-bio">
              Hello there! A young, aspiring software developer who loves
              exploring computer hardware and software from
              inside out is me. Throughout the years several talents emerged, so
              obviously I have much to offer. Starting with Linux, through SVG
              graphics and Android apps, ending with emulators written in Rust.
              A non-exhaustive list of hobbies: film photography, calistenics,
              canoeing and books to (truthfuly) name a few. I'm ready for new adventures and can't wait to hear from you soon!
          </span>
      </div>
      <div className="content">
        { page === "portfolio" && <Portfolio/> }
        { page === "hobbys" && <Hobbys/> }
        { page === "contact" && <Contact/>  }
      </div>
      <footer>Copyright &#169; Adam Oller</footer>
    </main>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Adam Oller - Programmer and a jack of all trades</title>
