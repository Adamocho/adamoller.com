import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/index.css"

const pageStyles = {
  fontSize: "25px",
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1>Adamocho</h1>
      <p>Hello there! This is my personal website!</p>
    </main>
  )
}

export default IndexPage;

export const Head: HeadFC = () => <title>Adam Oller - Programmer and a jack of all trades</title>
