import { useState, useEffect } from 'react'
import { getMealHistories, Meal } from '~/API/api'
import Achievement from '~/components/AchievementBox'
import GraphBox from '~/components/GraphBox'
import HexagonButton from '~/components/HexagonButton'
import MealCard from '~/components/MealCard'

export default function Home() {
  const [meals, setMeals] = useState<Meal[]>([])

  useEffect(() => {
    getMealHistories().then(setMeals)
  }, [])

  return (
    <div>
      <div className="flex flex-row">
        <Achievement total={25} achieved={21} />
        <GraphBox />
      </div>
      <div className="my-6 flex flex-row items-center justify-center">
        <HexagonButton>
          <MyIconsKnife className="x-large" />
          <span>Morning</span>
        </HexagonButton>
        <HexagonButton>
          <MyIconsKnife className="x-large" />
          <span>Lunch</span>
        </HexagonButton>
        <HexagonButton>
          <MyIconsKnife className="x-large" />
          <span>Dinner</span>
        </HexagonButton>
        <HexagonButton>
          <MyIconsCup className="x-large" />
          <span>Snack</span>
        </HexagonButton>
      </div>
      <div className="my-4 px-40 grid grid-cols-4 gap-2">
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
      <div className="mt-6 mb-16 flex flex-row items-center justify-center">
        <button className="gradient-to-bottom w-72 h-14 py-3 rounded hover:opacity-70">
          <span className=" text-lg text-light font-light">
            記録をもっと見る
          </span>
        </button>
      </div>
    </div>
  )
}
