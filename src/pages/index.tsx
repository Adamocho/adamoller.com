import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import "../styles/index.css"

const pageStyles = {
  backgroundColor: "#211919",
  color: "#f4ebeb",
  fontSize: "25px",
  fontFamily: "Roboto, sans-serif, serif",
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

export const Head: HeadFC = () => <title>adamocho</title>
