import React, { useMemo } from 'react'
import styles from './DiaryCard.module.scss'
import { Diary } from '~/API/api'
import { formatDateTime } from '~/utils/DateUtils'

interface DiaryCardProps {
  diary: Diary
}

const DiaryCard = ({ ...props }: DiaryCardProps) => {
  const dateTime = useMemo(
    () => formatDateTime(props.diary.created),
    [props.diary]
  )
  return (
    <div className={styles.diaryCard}>
      <div className={styles.time}>
        <p>{dateTime}</p>
      </div>
      {/*<p className={styles.label}>{props.diary.title}</p>*/}
      <p className={styles.content}>{props.diary.content}</p>
    </div>
  )
}

export default DiaryCard
