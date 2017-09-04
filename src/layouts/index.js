import React from "react"
import Link from "gatsby-link"
import ListLink from '../components/ListLink'
import styles from '../styles/main.module.scss'

export default ({ children }) =>
  <div className={styles.outerContainer}>
    {/* <script src="https://d3gxy7nm8y4yjr.cloudfront.net/js/embed.js" type="text/javascript"></script> */}
    <div className={styles.innerContainer} >
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <div className={styles.siteTitle}>
            <h1>Trent Crestwell</h1>
            <h5>Guild Certified Feldenkrais Praticioner</h5>
          </div>
        </Link>
        <ul className={styles.nav}>
          <ListLink
            listClass={styles.linkContainer}
            linkClass={styles.navLink}
            to="/classes/">Classes</ListLink>
          <ListLink
            listClass={styles.linkContainer}
            linkClass={styles.navLink}
            to="/appointments/">Appointments</ListLink>
          <ListLink
            listClass={styles.linkContainer}
            linkClass={styles.navLink}
            to="/about-trent/">About Trent</ListLink>
        </ul>
      </header>
      </div>
    <div className={styles.contentWrapper}>
      {children()}
    </div>
  </div>
</div>
