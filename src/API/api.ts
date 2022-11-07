/**
 * MEAL
 **/
export interface Meal {
  id: number
  meal: string
  day: string
  src: string
}

export async function getMealHistories(): Promise<Meal[]> {
  return fetch('/meal-histories.json').then((resp) => resp.json())
}

/**
 * EXERCISE
 **/
export interface Exercise {
  id: number
  name: string
  time: string
  burn: string
}

export async function getExercises(): Promise<Exercise[]> {
  return fetch('/my-exercises.json').then((resp) => resp.json())
}

/**
 * DIARY
 **/
export interface Diary {
  id: number
  title: string
  content: string
  created: number
}

export async function getDiaries(): Promise<Diary[]> {
  return fetch('/my-diaries.json').then((resp) => resp.json())
}

/**
 * NEWS
 **/
export interface News {
  id: number
  title: string
  tags: string[]
  created: number
  img: string
}

export async function getNews(): Promise<News[]> {
  return fetch('/news.json').then((resp) => resp.json())
}
