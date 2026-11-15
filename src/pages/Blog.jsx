import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock } from 'lucide-react'

export const posts = [
  {
    slug: 'building-real-time-apps-socketio',
    title: 'Building Real-Time Apps with Socket.io and React',
    date: '2026-10-15',
    readTime: '8 min read',
    excerpt: 'A deep dive into building collaborative, real-time applications using Socket.io on the backend and React on the frontend.',
    tags: ['React', 'Socket.io', 'Node.js'],
    content: `
# Building Real-Time Apps with Socket.io and React

Real-time features—live chat, collaborative editing, live notifications—are table stakes for modern web apps. Socket.io makes this surprisingly straightforward.

## Why Socket.io?

WebSockets give you a persistent, bidirectional connection between client and server. Socket.io wraps WebSockets with automatic reconnection, rooms, namespaces, and fallbacks for environments that block WebSockets.

## Setting Up the Server

\`\`\`js
const { Server } = require('socket.io')
const io = new Server(server, {
  cors: { origin: 'http://localhost:5173' }
})

io.on('connection', (socket) => {
  socket.on('join-room', (roomId) => socket.join(roomId))
  socket.on('message', (data) => io.to(data.room).emit('message', data))
})
\`\`\`

## The React Client

\`\`\`jsx
import io from 'socket.io-client'
const socket = io('http://localhost:5000')

socket.on('message', (data) => setMessages(m => [...m, data]))
socket.emit('message', { room, text, user })
\`\`\`

The key insight: **emit** sends, **on** receives. Everything else is just rooms and event names.

## Handling Reconnections

Socket.io reconnects automatically, but you need to re-join rooms on reconnect:

\`\`\`js
socket.on('connect', () => socket.emit('join-room', roomId))
\`\`\`

## Scaling with Redis

A single Node.js process can't share socket state. For multiple instances, use \`@socket.io/redis-adapter\` to broadcast across all processes.

That's the foundation. Build on top with presence indicators, typing indicators, and optimistic UI updates.
    `
  },
  {
    slug: 'why-typescript-is-worth-it',
    title: 'Why TypeScript Is Worth the Friction',
    date: '2026-09-22',
    readTime: '5 min read',
    excerpt: 'TypeScript adds friction upfront but pays back tenfold. Here\'s a practical case for adopting it even on small projects.',
    tags: ['TypeScript', 'JavaScript', 'DX'],
    content: `
# Why TypeScript Is Worth the Friction

Every developer I know who switched to TypeScript said the same thing: "I wish I'd done this sooner."

## The Upfront Cost

You write more code. \`const name: string\` instead of \`const name\`. You fight the compiler. You learn what \`as unknown as T\` means and hate yourself for it.

## What You Get

**Autocomplete that works.** Not "maybe this method exists" autocomplete — actual knowledge of your object's shape.

**Refactoring without fear.** Rename a function. TypeScript tells you every call site. In JavaScript, grep tells you *most* of them.

**Self-documenting APIs.** A function signature is documentation that can't go out of date.

## Start Small

You don't need to convert everything. Start with:

1. \`tsconfig.json\` with \`"allowJs": true\`
2. Rename one file from \`.js\` to \`.ts\`
3. Fix the errors

Migrate file by file. The compiler's errors are a guided tour of your tech debt.

## The Bottom Line

TypeScript is a force multiplier. The friction is real, but it front-loads the bugs — you'd rather find them at compile time than at 2am.
    `
  },
  {
    slug: 'css-tips-every-dev-should-know',
    title: '10 CSS Tips Every Developer Should Know',
    date: '2026-08-10',
    readTime: '6 min read',
    excerpt: 'CSS is deceptively deep. Here are 10 techniques that will make your layouts more robust and your code cleaner.',
    tags: ['CSS', 'Web Development', 'Frontend'],
    content: `
# 10 CSS Tips Every Developer Should Know

## 1. Use \`gap\` instead of margins for flex/grid layouts

Margins on flex children create edge cases. \`gap\` applies only between items.

## 2. \`min-width: 0\` on flex children

Flex children won't shrink below their content size by default. Add \`min-width: 0\` to allow text truncation inside flex containers.

## 3. \`clamp()\` for responsive typography

\`font-size: clamp(1rem, 2.5vw, 1.5rem)\` — min, ideal, max. No media queries needed.

## 4. \`aspect-ratio\` for consistent sizing

\`aspect-ratio: 16 / 9\` on a container. No more padding-top hacks.

## 5. \`@layer\` for specificity control

Tailwind uses this. It lets you define layers (base, components, utilities) so your utilities always win without \`!important\`.

## 6. \`position: sticky\` with a threshold

\`position: sticky; top: 0\` only sticks when the element would scroll past \`top\`. Nothing else needed.

## 7. \`scroll-margin-top\` for anchor links with sticky headers

Your sticky nav covers anchor targets. \`scroll-margin-top: 80px\` on sections fixes it.

## 8. \`text-wrap: balance\` for headings

Browsers will balance heading line lengths automatically. One line.

## 9. CSS custom properties for theming

\`--color-primary: #6366f1\` at \`:root\`, then \`var(--color-primary)\` everywhere. Swap themes with one variable change.

## 10. \`container queries\` for component-level responsiveness

Media queries respond to viewport. Container queries respond to the component's own size. Perfect for reusable components.
    `
  }
]

export default function Blog({ dark }) {
  const bg = dark ? 'bg-gray-950' : 'bg-white'
  const card = dark ? 'bg-gray-900 border-gray-800 hover:border-indigo-500' : 'bg-gray-50 border-gray-100 hover:border-indigo-300'
  const muted = dark ? 'text-gray-400' : 'text-gray-500'

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`${bg} max-w-4xl mx-auto px-6 py-16`}>
      <h1 className="text-4xl font-extrabold mb-3">Blog</h1>
      <p className={`${muted} mb-10`}>Thoughts on web development, tools, and the craft of building software.</p>
      <div className="space-y-4">
        {posts.map((post, i) => (
          <motion.div key={post.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
            <Link to={`/blog/${post.slug}`}
              className={`block p-6 border rounded-2xl ${card} transition-all group`}>
              <h2 className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">{post.title}</h2>
              <p className={`${muted} text-sm mb-3`}>{post.excerpt}</p>
              <div className={`flex items-center gap-4 text-xs ${muted}`}>
                <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
