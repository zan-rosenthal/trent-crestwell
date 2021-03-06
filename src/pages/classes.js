import React from "react"
import cx from 'classnames'
import Trademark from '../components/Trademark'
import styles from '../styles/index.module.scss'

export default () =>
<div className={styles.contentBody}>
  <div
    className={styles.pageContent}>
      <h1 className={styles.pageTitle}>Awarness Through Movement<Trademark />classes...</h1>
      <p className={styles.content}>
        Are a set of lessons taught in group classes where participants follow verbal
        instructions through slow movement sequences. Feldenkrais created over a thousand
        Awareness Through Movement<Trademark /> lessons. Most are done laying on the floor
        and explore developmental themes such as rolling, crawling, or the process by
        which one brings themselves to stand up from the floor. There are also lessons done
        in sitting and standing.
      </p>
  </div>
  <div className={styles.schedulingLink}>
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
