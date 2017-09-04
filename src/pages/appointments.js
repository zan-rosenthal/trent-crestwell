import React from "react"
import styles from '../styles/index.module.scss'
import ListLink from '../components/ListLink'
import cx from 'classnames'

export default () =>
    <div
      className={styles.contentBody}>
      <div className="content">
        <h1 className={styles.pageTitle}>Appointments</h1>
        <h3 className={styles.secondaryTitle}>Functional Integration is...</h3>
        <p className={styles.content}>the one-on-one application of the method that uses both touch and verbal instruction from the practitioner. The sessions begin with a brief interview in which the client can identify their interests and goals so the practitioner can create a lesson specific to the clients needs. </p>
      </div>
      <div className={styles.schedulingWidget}>
        <a
          className={cx(styles.bodyLink,styles.linkContainer)}
          target="_blank"
          href="https://trent-crestwell.acuityscheduling.com/">
        <h4 className={styles.linkTitle}>
          Schedule an Appointment
        </h4>
      </a>
      </div>
    </div>
