import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

export default function App() {
  const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches)

  return (
    <div className={dark ? 'dark' : ''}>
      <div className={`min-h-screen transition-colors ${dark ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-900'}`}>
        <BrowserRouter>
          <Navbar dark={dark} toggleDark={() => setDark(d => !d)} />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home dark={dark} />} />
              <Route path="/blog" element={<Blog dark={dark} />} />
              <Route path="/blog/:slug" element={<BlogPost dark={dark} />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </div>
    </div>
  )
}
