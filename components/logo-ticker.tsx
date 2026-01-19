'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'Vercel', width: 100 },
  { name: 'Next.js', width: 80 },
  { name: 'React', width: 70 },
  { name: 'TypeScript', width: 120 },
  { name: 'Tailwind', width: 100 },
  { name: 'Framer', width: 90 },
  { name: 'Supabase', width: 110 },
  { name: 'OpenAI', width: 90 },
]

export function LogoTicker() {
  return (
    <div className="w-full py-12 border-y border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-zinc-900/50">
      <div className="relative flex">
        <motion.div
          className="flex gap-16 pr-16"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              style={{ minWidth: logo.width }}
            >
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
        
        <motion.div
          className="flex gap-16 pr-16 absolute left-[1000px]"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              style={{ minWidth: logo.width }}
            >
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
