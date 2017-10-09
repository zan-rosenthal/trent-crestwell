import React from 'react'
import styles from '../../styles/main.module.scss'
import ListLink from '../ListLink'
import cx from 'classnames'
import windowSize from 'react-window-size'

const renderNavList = () => (
  <ul className={styles.navList}>
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
)


class Nav extends React.PureComponent {

  render () {
    console.log(this.state)
    return (
      <div className={styles.nav} >
        {renderNavList()}
      </div>
    )
  }
}

export default windowSize(Nav)
