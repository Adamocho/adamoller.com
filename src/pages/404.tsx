import * as React from "react"
import { HeadFC, PageProps, Link } from "gatsby"
import "../styles/index.css"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="not-found">
      <h1 className="fira-code">Error </h1>
      <p>Sorry, not found. This page probably exists in another universe though :P</p>
      <Link to="/">Goto: Home</Link>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>404 Not found</title>
