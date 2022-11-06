import { useMemo } from 'react'
import styles from './AchievementBox.module.scss'

interface AchievementBoxProps {
  total: number
  achieved: number
}

const Achievement = ({ ...props }: AchievementBoxProps) => {
  const percent = useMemo(() => {
    if (props.total === 0) {
      return 0
    }
    return Math.round((props.achieved * 100) / props.total)
  }, [props.total, props.achieved])

  return (
    <div
      className={styles.achievementBox}
      style={{ backgroundImage: `url("/d01-min.jpg")` }}
    >
      <div className="flex flex-row items-end justify-center">
        <div className={styles.stats}>
          <span>{`${props.achieved}/${props.total}`}</span>
        </div>
        <span className={styles.percent}>{percent}%</span>
      </div>
    </div>
  )
}

export default Achievement
