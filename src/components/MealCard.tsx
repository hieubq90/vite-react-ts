import React from 'react'
import { Meal } from '~/API/api'
import styles from '~/components/MealCard.module.scss'

interface MealCardProps {
  meal: Meal
}

const MealCard = ({ ...props }: MealCardProps) => (
  <div
    className={styles.mealCard}
    style={{
      backgroundImage: `url(${props.meal.src})`,
    }}
  >
    <div className={styles.label}>
      <span>{`${props.meal.day}.${props.meal.meal}`}</span>
    </div>
  </div>
)

export default MealCard
