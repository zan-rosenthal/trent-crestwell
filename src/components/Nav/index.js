import React from 'react'
import styles from '../../styles/main.module.scss'
import ListLink from '../ListLink'

export default function Nav () {
  return (
    <div className={styles.nav} >
      <ul className={styles.navList}>
      <ListLink
        listClass={styles.linkContainer}
        linkClass={styles.navLink}
        to="/classes">Classes</ListLink>
      <ListLink
        listClass={styles.linkContainer}
        linkClass={styles.navLink}
        to="/appointments">Appointments</ListLink>
      <ListLink
        listClass={styles.linkContainer}
        linkClass={styles.navLink}
        to="/about-trent">About Trent</ListLink>
      </ul>
    </div>
  )
}
