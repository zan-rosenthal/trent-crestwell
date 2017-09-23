import React from "react"
import Link from "gatsby-link"
import Nav from '../components/Nav'
import styles from '../styles/main.module.scss'

export default ({ children }) =>
  <div className={styles.outerContainer}>
    <header className={styles.header}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <div className={styles.siteTitle}>
          <h1>Trent</h1>
          <h1>Crestwell</h1>
          <h5>Guild Certified</h5>
          <h5>Feldenkrais Praticioner</h5>
        </div>
      </Link>
      <Nav />
    </header>
    <div className={styles.contentWrapper}>
      {children()}
    </div>
    {/* <footer className={styles.footer}>
    </footer> */}
</div>
