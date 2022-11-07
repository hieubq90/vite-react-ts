import React, { useMemo } from 'react'
import { News } from '~/API/api'
import styles from '~/components/NewsCard.module.scss'
import { formatDateTime } from '~/utils/DateUtils'

interface NewsCardProps {
  news: News
}

const NewsCard = ({ ...props }: NewsCardProps) => {
  const dateTime = useMemo(
    () => formatDateTime(props.news.created),
    [props.news]
  )
  const tags = useMemo(
    () => props.news.tags.map((item) => `#${item}`),
    [props.news]
  )
  return (
    <div className={styles.newsCard}>
      <div
        className={styles.imageContainer}
        style={{
          backgroundImage: `url(${props.news.img})`,
        }}
      >
        <div className={styles.dateTime}>{dateTime}</div>
      </div>
      <p className={styles.title}>{props.news.title}</p>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span className="ml-1">{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default NewsCard
