import { HashRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Challenge from './pages/Challenge'
import Home from './pages/Home'
import News from './pages/News'
import NotFound from './pages/NotFound'

export function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  )
}
