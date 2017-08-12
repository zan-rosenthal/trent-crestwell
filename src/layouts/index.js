import React from "react"
import Link from "gatsby-link"
import ListLink from '../components/ListLink'

export default ({ children }) =>
  <div style={{ margin: `0 auto`, maxWidth: 1200, padding: `0 1rem` }}>
    <div style={{ margin: `0 auto`, maxWidth: 1200, padding: `1.25rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>Chicago Feldenkrais</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    {children()}
  </div>
</div>
