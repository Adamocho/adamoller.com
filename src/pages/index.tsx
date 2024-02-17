import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/index.css"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <header>
        <div>About</div>
        <div>Hobbys</div>
        <div>Contact</div>
      </header>
      <div className="about">
        <img src="../images/icon.png" alt="" />
        <span className="about-name">Adam Oller</span>
        <div className="about-separator"></div>
        <span className="about-title">both learning & programming addict</span>
        <span className="about-bio">A fast bio here! Don't look at me I'm a lorem ipsum. Kind of..</span>
        <span className="signature">Adam Oller</span>
      </div>
      <div className="content">
        <h1 className="ornament">Hello there</h1>
      </div>
      <footer>Copyright Adam Oller &#169; 2024 All rights reserved</footer>
    </main>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Adam Oller - Programmer and a jack of all trades</title>
