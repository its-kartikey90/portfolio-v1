import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { posts } from './Blog'

export default function BlogPost({ dark }) {
  const { slug } = useParams()
  const post = posts.find(p => p.slug === slug)
  const muted = dark ? 'text-gray-400' : 'text-gray-500'
  const prose = dark ? 'prose-invert' : ''

  if (!post) return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h1 className="text-2xl font-bold mb-3">Post not found</h1>
      <Link to="/blog" className="text-indigo-500 hover:underline">← Back to blog</Link>
    </div>
  )

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className={`max-w-3xl mx-auto px-6 py-16 ${dark ? 'bg-gray-950' : 'bg-white'}`}>
      <Link to="/blog" className={`inline-flex items-center gap-2 text-sm ${muted} hover:text-indigo-500 transition-colors mb-8`}>
        <ArrowLeft size={14} /> Back to blog
      </Link>
      <h1 className="text-4xl font-extrabold mb-4">{post.title}</h1>
      <div className={`flex items-center gap-4 text-sm ${muted} mb-10`}>
        <span className="flex items-center gap-1"><Calendar size={14} />{post.date}</span>
        <span className="flex items-center gap-1"><Clock size={14} />{post.readTime}</span>
      </div>
      <div className={`prose max-w-none ${prose} prose-indigo`}
        dangerouslySetInnerHTML={{ __html: post.content
          .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
          .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>')
          .replace(/```(\w+)?\n([\s\S]*?)```/gm, '<pre class="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto text-sm my-4"><code>$2</code></pre>')
          .replace(/`([^`]+)`/g, `<code class="bg-gray-100 ${dark ? 'bg-gray-800 text-indigo-300' : 'text-indigo-600'} px-1.5 py-0.5 rounded text-sm">$1</code>`)
          .replace(/\n\n/g, '</p><p class="mb-4">')
          .replace(/^(.+)$/gm, s => s.startsWith('<') ? s : `<p class="mb-4">${s}</p>`)
        }} />
    </motion.div>
  )
}
