import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 } }
const stagger = { animate: { transition: { staggerChildren: 0.1 } } }

const projects = [
  { title: 'DevFlow', desc: 'Real-time Kanban SaaS with Socket.io and sprint analytics.', tags: ['React', 'Node.js', 'MongoDB'], href: 'https://github.com/its-kartikey90/devflow', color: '#6366f1' },
  { title: 'Luminary', desc: 'Open-source React component library — 60+ accessible components.', tags: ['React', 'TypeScript', 'Storybook'], href: 'https://github.com/its-kartikey90/luminary', color: '#8b5cf6' },
  { title: 'Shopwave', desc: 'Next.js e-commerce with Stripe payments and sub-second loads.', tags: ['Next.js', 'Stripe', 'Tailwind'], href: 'https://github.com/its-kartikey90/shopwave', color: '#06b6d4' },
  { title: 'Aura', desc: 'AI writing assistant Chrome extension powered by GPT-4o-mini.', tags: ['JavaScript', 'Chrome Extension', 'OpenAI'], href: 'https://github.com/its-kartikey90/aura', color: '#ec4899' },
  { title: 'Pulse', desc: 'Developer dashboard with GitHub, weather, tasks, and Pomodoro.', tags: ['React', 'PWA', 'GitHub API'], href: 'https://github.com/its-kartikey90/pulse', color: '#10b981' },
]

const skills = ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'Python', 'Socket.io', 'REST APIs', 'Git', 'Figma', 'AWS']

export default function Home({ dark }) {
  const bg = dark ? 'bg-gray-950' : 'bg-white'
  const card = dark ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-100'
  const muted = dark ? 'text-gray-400' : 'text-gray-500'

  return (
    <motion.div {...fade} className={`${bg} max-w-4xl mx-auto px-6 pb-24`}>
      {/* Hero */}
      <motion.section variants={stagger} initial="initial" animate="animate" className="pt-20 pb-16">
        <motion.p variants={fade} className="text-indigo-500 font-semibold mb-3">Hi, I'm Kartikey 👋</motion.p>
        <motion.h1 variants={fade} className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-5">
          I build things<br />for the web.
        </motion.h1>
        <motion.p variants={fade} className={`text-xl ${muted} max-w-2xl mb-8 leading-relaxed`}>
          Full-stack developer from Lucknow, India. I craft fast, accessible, and beautiful digital experiences.
          Currently pursuing BCA at MUIT.
        </motion.p>
        <motion.div variants={fade} className="flex flex-wrap gap-3">
          <Link to="/blog" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-medium transition-colors">
            Read Blog <ArrowRight size={16} />
          </Link>
          <a href="https://www.canva.com/design/DAHS6G7bN_4/Hkps8-76lP7_YpnzkHt3gA/view"
            target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 border ${dark ? 'border-gray-700 hover:border-indigo-500' : 'border-gray-200 hover:border-indigo-300'} px-5 py-2.5 rounded-xl font-medium transition-colors`}>
            <Download size={16} /> Resume
          </a>
        </motion.div>
      </motion.section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <motion.a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className={`group block p-5 border rounded-2xl ${card} hover:border-indigo-400 transition-all`}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                <h3 className="font-semibold group-hover:text-indigo-500 transition-colors">{p.title}</h3>
              </div>
              <p className={`text-sm ${muted} mb-3`}>{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(t => (
                  <span key={t} className={`text-xs px-2 py-0.5 rounded-full ${dark ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <motion.span key={s} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.03 }}
              className={`px-3 py-1.5 rounded-full text-sm font-medium ${dark ? 'bg-gray-800 text-gray-300' : 'bg-indigo-50 text-indigo-700'}`}>
              {s}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
        <p className={`${muted} mb-5`}>Available for freelance projects and collaborations.</p>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:dixitkartikey172@gmail.com" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors">
            <Mail size={16} /> Email me
          </a>
          <a href="https://github.com/its-kartikey90" target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 border ${dark ? 'border-gray-700' : 'border-gray-200'} px-4 py-2 rounded-xl text-sm font-medium hover:border-indigo-400 transition-colors`}>
            <Github size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/kartikey-dev/" target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 border ${dark ? 'border-gray-700' : 'border-gray-200'} px-4 py-2 rounded-xl text-sm font-medium hover:border-indigo-400 transition-colors`}>
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </section>
    </motion.div>
  )
}
