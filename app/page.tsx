'use client'

import { motion } from 'framer-motion'
import { BentoGrid } from '@/components/bento-grid'
import { projects } from '@/lib/data'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <section className="mb-16 relative overflow-hidden rounded-3xl p-12 md:p-16">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent/20 via-purple-500/20 to-pink-500/20 dark:from-accent/10 dark:via-purple-500/10 dark:to-pink-500/10"
          animate={{
            x: ['0%', '100%', '0%'],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-l from-blue-500/20 via-cyan-500/20 to-accent/20 dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-accent/10"
          animate={{
            x: ['0%', '-100%', '0%'],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-zinc-900 dark:text-zinc-50 mb-6 leading-tight">
            Creative Technologist
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl">
            Building digital experiences at the intersection of design, code, and creativity.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
          Featured Work
        </h2>
        <BentoGrid projects={projects} />
      </section>
    </div>
  )
}
