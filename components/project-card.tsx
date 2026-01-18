'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
  index?: number
}

const sizeClasses = {
  small: 'col-span-1 row-span-1',
  medium: 'col-span-1 md:col-span-2 row-span-1',
  large: 'col-span-1 md:col-span-2 row-span-2',
}

export function ProjectCard({ project, index }: ProjectCardProps & { index?: number }) {
  const { title, description, thumbnail, techStack, gridSize, liveUrl, githubUrl, slug } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index || 0) * 0.1 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className={`${sizeClasses[gridSize]} relative group overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800`}
    >
      <div className="relative h-full min-h-[300px]">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <Link href={`/project/${slug}`} className="absolute inset-0 z-10">
          <span className="sr-only">View {title} project</span>
        </Link>
        
        <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none z-20">
          <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              {title}
            </h3>
            <p className="text-sm text-zinc-300 mb-4 line-clamp-2">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20"
                >
                  {tech}
                </span>
              ))}
              {techStack.length > 3 && (
                <span className="px-2 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20">
                  +{techStack.length - 3}
                </span>
              )}
            </div>

            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-white hover:text-accent transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-white hover:text-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-accent/50 rounded-2xl transition-all duration-300 pointer-events-none z-30" />
      </div>
    </motion.div>
  )
}
