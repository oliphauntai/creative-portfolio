'use client'

import { motion } from 'framer-motion'

const logos = [
  'Vercel',
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Supabase',
  'OpenAI',
]

export function LogoTicker() {
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className="w-full py-12 border-y border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-zinc-900/50">
      <div className="relative flex">
        <motion.div
          className="flex shrink-0"
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-[15px] grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 whitespace-nowrap">
                {logo}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
