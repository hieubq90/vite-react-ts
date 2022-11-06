export interface Meal {
  id: number
  meal: string
  day: string
  src: string
}

export async function getMealHistories(): Promise<Meal[]> {
  return fetch('/meal-histories.json').then((resp) => resp.json())
}
