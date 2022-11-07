import { useEffect, useState } from 'react'
import { getNews, News } from '~/API/api'
import NewsCard from '~/components/NewsCard'
import RecommendedCard from '~/components/RecommendedCard'

export default function NewsPage() {
  const [newsData, setNewsData] = useState<News[]>([])

  useEffect(() => {
    getNews().then(setNewsData)
  }, [])
  return (
    <div>
      <div className="my-14 px-40 grid grid-cols-4 gap-8">
        <RecommendedCard label="RECOMMENDED COLUMN" desc="オススメ" />
        <RecommendedCard label="RECOMMENDED DIET" desc="ダイエット" />
        <RecommendedCard label="RECOMMENDED BEAUTY" desc="美容" />
        <RecommendedCard label="RECOMMENDED HEALTH" desc="健康" />
      </div>
      <div className="my-15 px-40 grid grid-cols-4 gap-x-2 gap-y-4">
        {newsData.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
      <div className="mt-6 mb-16 flex flex-row items-center justify-center">
        <button className="gradient-to-bottom w-72 h-14 py-3 rounded hover:opacity-70">
          <span className=" text-lg text-light font-light">
            コラムをもっと見る
          </span>
        </button>
      </div>
    </div>
  )
}
