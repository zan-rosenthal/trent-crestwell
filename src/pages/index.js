import React from "react"
import styles from '../styles/index.module.scss'
import ListLink from '../components/ListLink'
import cx from 'classnames'


export default () =>
  <div className={styles.contentBody}>
    <div>
    <h1
      className={cx(styles.title, styles.header)}>
      What is the Feldenkrais Method</h1>
    <p>
      The Feldenkrais Method is a movement method which emphasizes functionality and ease of movement. The method builds an awareness of parasitic habitual patterns in order to find new strategies towards more comfortable movement .
    </p>
    <p>
      The method is useful for anyone with a body. Whether you are recovering from injury, seeking relief from a physical or emotional condition, trying to be more productive at work, or honing athletic or artistic abilities, Feldenkrais (can help/has something to offer/etc?)
    </p>
    <h5
      className={styles.title}
      >The Feldenkrais Method consists of two practices: </h5>
    <div className={styles.boxContainer}>
      <div className={styles.box}>
        <div>
          <h4
            className={cx(styles.title, styles.boxTitle)}>
              <span>Awareness</span>
              <span>Through </span>
              <span>Movement</span>
          </h4>
        </div>
        <ListLink
          listClass={styles.linkContainer}
          linkClass={styles.bodyLink}
          to="/classes">
          See Class Schedule
        </ListLink>
      </div>
      <div className={styles.box}>
        <div>
          <h4
            className={cx(styles.title, styles.boxTitle)}>
            Functional Integration
          </h4>
        </div>
        <ListLink
          listClass={styles.linkContainer}
          linkClass={styles.bodyLink}
          to="/apointments">
          Schedule an Appointment
        </ListLink>
      </div>
    </div>
  </div>
  </div>
