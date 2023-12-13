import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import "../styles/index.css"

const pageStyles = {
  backgroundColor: "#211919",
  color: "#f4ebeb",
  fontSize: "25px",
  fontFamily: "Roboto, sans-serif, serif",
}

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1>Not found. Sorry :C</h1>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
