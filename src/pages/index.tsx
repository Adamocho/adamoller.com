import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/index.css"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <header>
        <div>Portfolio</div>
        <div>Hobbys</div>
        <div>Contact</div>
      </header>
      <div className="about">
        <img src="../images/icon.png" alt="" />
        <div className="about-names">
          <span className="about-name signature">Adam Oller</span>
          <div className="about-separator"></div>
          <p className="about-title">learning && programming addict</p>
        </div>
        <span className="about-bio">
          Hello there! A young, aspiring software developer who loves 
          exploring computer hardware and software from 
          inside out is me. Throughout the years several talents emerged, so
          obviously I have much to offer. Starting with Linux, through SVG
          graphics and Android apps, ending with emulators written in Rust.
          Non-exhaustive list of hobbies: film photography, calistenics, 
          canoeing and books to (truthfuly) name a few. I'm hard-working 
          and can't wait to hear from you soon!</span>
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
