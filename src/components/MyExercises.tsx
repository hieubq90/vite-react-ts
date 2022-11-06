import { useEffect, useMemo, useState } from 'react'
import { getExercises, Exercise } from '~/API/api'
import styles from '~/components/MyExercises.module.scss'
import { formatDate } from '~/utils/DateUtils'

export default function MyExercises() {
  const [exercises, setExercises] = useState<Exercise[]>([])
  const currentDate = useMemo(() => formatDate(), [])
  useEffect(() => {
    getExercises().then(setExercises)
  }, [])

  return (
    <div className={styles.bodyRecordChart}>
      <div className={styles.header}>
        <div className={styles.label}>MY EXERCISES</div>
        <div className={styles.currentDay}>{currentDate}</div>
      </div>
      <div className={styles.recordList}>
        {exercises.map((exercise) => (
          <div key={exercise.id} className={styles.record}>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center justify-start">
                <span className="text-light">●</span>
                <span className={styles.name}>{exercise.name}</span>
              </div>
              <span className={styles.time}>{exercise.time}</span>
            </div>
            <div className={styles.burn}>{exercise.burn}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
