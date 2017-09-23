import React from 'react'
import styles from '../../styles/main.module.scss'
import ListLink from '../ListLink'
import cx from 'classnames'
import HamburgerMenu from 'react-hamburger-menu'


export default class Nav extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = { open: true }
  }

  handleClick() {
    this.setState({ open: !this.state.open })
  }

  render () {
    return (
      <div className={styles.nav} >
        { this.state.open &&
          (<ul className={styles.navList}>
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
        }
        <div className={styles.menuIcon}>
          <HamburgerMenu
            isOpen={this.state.open}
            menuClicked={this.handleClick.bind(this)}
            width={18}
            height={15}
            strokeWidth={2}
            // rotate={0}
            color='white'
            borderRadius={0}
            animationDuration={0.5} />
        </div>
      </div>
    )
  }
}
