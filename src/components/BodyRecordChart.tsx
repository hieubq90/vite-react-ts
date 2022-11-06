import { useMemo } from 'react'
import styles from '~/components/BodyRecordChart.module.scss'
import { formatDate } from '~/utils/DateUtils'

export default function BodyRecordChart() {
  const currentDate = useMemo(() => formatDate(), [])

  return (
    <div className={styles.bodyRecordChart}>
      <div className={styles.header}>
        <div className={styles.label}>BODY RECORD</div>
        <div className={styles.currentDay}>{currentDate}</div>
      </div>
      <div className={styles.footer}>
        <button className={styles.button}>日</button>
        <button className={styles.button}>週</button>
        <button className={styles.button}>月</button>
        <button className={styles.buttonActive}>年</button>
      </div>
    </div>
  )
}
