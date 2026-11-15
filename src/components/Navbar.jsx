import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun, Github, Linkedin } from 'lucide-react'

export default function Navbar({ dark, toggleDark }) {
  const { pathname } = useLocation()
  const link = (href, label) => (
    <Link to={href} className={`text-sm font-medium transition-colors hover:text-indigo-500 ${pathname === href ? 'text-indigo-500' : dark ? 'text-gray-300' : 'text-gray-600'}`}>
      {label}
    </Link>
  )

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-md ${dark ? 'bg-gray-950/80 border-gray-800' : 'bg-white/80 border-gray-100'}`}>
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg text-indigo-500">KD</Link>
        <nav className="flex items-center gap-6">
          {link('/', 'Home')}
          {link('/blog', 'Blog')}
          <a href="https://github.com/its-kartikey90" target="_blank" rel="noopener noreferrer"
            className={`transition-colors hover:text-indigo-500 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/kartikey-dev/" target="_blank" rel="noopener noreferrer"
            className={`transition-colors hover:text-indigo-500 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
            <Linkedin size={18} />
          </a>
          <button onClick={toggleDark} aria-label="Toggle dark mode"
            className={`transition-colors hover:text-indigo-500 ${dark ? 'text-gray-400' : 'text-gray-500'}`}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  )
}
