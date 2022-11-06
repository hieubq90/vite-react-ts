import { useEffect, useState } from 'react'
import { getDiaries, Diary } from '~/API/api'
import BodyRecordChart from '~/components/BodyRecordChart'

import DiaryCard from '~/components/DiaryCard'
import MyExercises from '~/components/MyExercises'
import RecordCard from '~/components/RecordCard'

export default function Challenge() {
  const [diaries, setDiaries] = useState<Diary[]>([])

  useEffect(() => {
    getDiaries().then(setDiaries)
  }, [])

  return (
    <div>
      <div className="my-14 px-40 grid grid-cols-3 gap-12">
        <RecordCard
          bg="/mr-1-min.jpg"
          label="BODY RECORD"
          desc="自分のカラダの記録"
        />
        <RecordCard
          bg="/mr-2-min.jpg"
          label="MY EXERCISE"
          desc="自分の運動の記録"
        />
        <RecordCard bg="/mr-3-min.jpg" label="MY DIARY" desc="自分の日記" />
      </div>
      <div className="mb-14 px-40">
        <BodyRecordChart />
      </div>
      <div className="mb-14 px-40">
        <MyExercises />
      </div>
      <div
        className="px-40 flex flex-row content-center justify-start font-normal"
        style={{ fontSize: 22 }}
      >
        MY DIARY
      </div>
      <div className="px-40 grid grid-cols-4 gap-3">
        {diaries.map((diary) => (
          <DiaryCard key={diary.id} diary={diary} />
        ))}
      </div>
      <div className="mt-6 mb-16 flex flex-row items-center justify-center">
        <button className="gradient-to-bottom w-72 h-14 py-3 rounded hover:opacity-70">
          <span className=" text-lg text-light font-light">
            自分の日記をもっと見る
          </span>
        </button>
      </div>
    </div>
  )
}
