import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import "../styles/index.css"

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="not-found">
      <h1>Error 404</h1>
      <p>Sorry, not found. This page probably exists in another universe though :P</p>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>404 Not found</title>
