import React from "react"
import styles from '../styles/index.module.scss'
import ListLink from '../components/ListLink'
import cx from 'classnames'


export default () =>
  <div className={styles.contentBody}>
    <div>
    <h1
      className={cx(styles.pageTitle, styles.header)}>
      What is the Feldenkrais Method</h1>
    <p>
      The Feldenkrais Method is a movement method which emphasizes functionality and ease of movement. The method builds an awareness of parasitic habitual patterns in order to find new strategies towards more comfortable movement .
    </p>
    <p>
      The method is useful for anyone with a body. Whether you are recovering from injury, seeking relief from a physical or emotional condition, trying to be more productive at work, or honing athletic or artistic abilities, Feldenkrais (can help/has something to offer/etc?)
    </p>
    <h5>The Feldenkrais Method consists of two practices: </h5>
    <div className={styles.boxContainer}>
      <div className={styles.box}>
        <ListLink
          listClass={styles.linkContainer}
          linkClass={styles.bodyLink}
          to="/classes">
          <h4
            className={styles.linkTitle}>
            Awareness Through Movement
          </h4>
          See Class Schedule
        </ListLink>
      </div>
      <div className={styles.box}>
        <ListLink
          listClass={styles.linkContainer}
          linkClass={styles.bodyLink}
          to="/apointments">
            <h4
              className={styles.linkTitle}>
              Functional Integration
            </h4>
          Schedule an Appointment
        </ListLink>
      </div>
    </div>
  </div>
  </div>
