import type { FC } from 'react'

import './App.css'

const App: FC = () => (
  <div className="gradient-card ">
    <h1 className="text-3xl font-bold text-bubble-gum">Hello world!</h1>
    <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
      <MyIconsKnife />
      <MyIconsCup />
    </button>
  </div>
)

export default App
