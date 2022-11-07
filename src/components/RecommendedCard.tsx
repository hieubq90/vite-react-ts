import React from 'react'
import styles from './RecommendedCard.module.scss'

interface RecommendedCardProps {
  label: string
  desc: string
}

const RecommendedCard = ({ ...props }: RecommendedCardProps) => (
  <div className={styles.recommendedCard}>
    <span className={styles.label}>{props.label}</span>
    <div className="w-14 my-2 border-t border-light" />
    <div className={styles.desc}>{props.desc}</div>
  </div>
)

export default RecommendedCard
