import React from "react"
import Link from "gatsby-link"
import cx from 'classnames'
import styles from '../../styles/listLink.module.scss'

export const ListLink = props =>
  <li className={cx(styles.listItem, props.listClass)}>
    <Link
      className={props.linkClass}
      to={props.to}>
      {props.children}
    </Link>
  </li>

export default ListLink
