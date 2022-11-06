import React from 'react'
import styles from './RecordCard.module.scss'

interface RecordCardProps {
  bg: string
  label: string
  desc: string
  children?: React.ReactNode
}

const RecordCard = ({ ...props }: RecordCardProps) => (
  <div className={styles.recordCard}>
    <div className={styles.blackMask} />
    <div
      className={styles.background}
      style={{ backgroundImage: `url("${props.bg}")` }}
    />
    <span className={styles.label}>{props.label}</span>
    <div className={styles.desc}>{props.desc}</div>
    {props.children}
  </div>
)

export default RecordCard
