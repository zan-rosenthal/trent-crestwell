import React from "react"
import Link from "gatsby-link"
import ListLink from '../components/ListLink'
import styles from '../styles/main.module.scss'

export default ({ children }) =>
  <div className={styles.outerContainer}>
    <div className={styles.innerContainer} >
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h1 className={styles.siteTitle}>Chicago Feldenkrais</h1>
        </Link>
        <ul className={styles.nav}>
          <ListLink
            listClass={styles.linkContainer}
            to="/classes/">Classes</ListLink>
          <ListLink
            listClass={styles.linkContainer}
            to="/appointments/">Appointments</ListLink>
          <ListLink
            listClass={styles.linkContainer}
            to="/about-trent/">About Trent</ListLink>
        </ul>
      </header>
      </div>
    <div className={styles.contentWrapper}>
      {children()}
    </div>
  </div>
</div>
