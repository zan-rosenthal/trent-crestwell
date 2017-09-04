import React from "react"
import styles from '../styles/index.module.scss'
import cx from 'classnames'

export default () =>
  <div
    className={styles.contentBody}>
    <h1 className={styles.pageTitle}>Classes</h1>
    <h3 className={styles.secondaryTitle}>Awarness Through Movement is...</h3>
    <p className={styles.content}>A set of lessons taught in group classes where participants follow verbal instructions through slow movement sequences. Feldenkrais created over a thousand  *Awareness Through Movement *lessons. Most are done laying on the floor and explore developmental themes such as rolling, crawling, or the process by which one brings themselves to stand up from the floor.  There are also lessons done in sitting and standing.</p>
    <div className={styles.schedulingWidget}>
      <a
        className={cx(styles.bodyLink,styles.linkContainer)}
        target="_blank"
        href="https://trent-crestwell.acuityscheduling.com/">
      <h4 className={styles.linkTitle}>
        See Class Schedule
      </h4>
    </a>
  </div>
</div>
