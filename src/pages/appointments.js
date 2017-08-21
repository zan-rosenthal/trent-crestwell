import React from "react"
import styles from '../styles/index.module.scss'

export default () =>
    <div
      className={styles.contentBody}>
      <div className="content">
        <h1 className={styles.pageTitle}>Appointments</h1>
        <h3 className={styles.secondaryTitle}>Functional Integration is...</h3>
        <p>the one-on-one application of the method that uses both touch and verbal instruction from the practitioner. The sessions begin with a brief interview in which the client can identify their interests and goals so the practitioner can create a lesson specific to the clients needs. </p>
      </div>
      <div className={styles.schedulingWidget}>
        <iframe src="https://app.acuityscheduling.com/schedule.php?owner=14154053" width="100%" height="800" frameBorder="0"></iframe>
        <script src="https://d3gxy7nm8y4yjr.cloudfront.net/js/embed.js" type="text/javascript"></script>
      </div>
    </div>
