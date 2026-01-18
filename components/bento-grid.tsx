import { ProjectCard } from './project-card'
import type { Project } from '@/lib/types'

interface BentoGridProps {
  projects: Project[]
}

export function BentoGrid({ projects }: BentoGridProps) {
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-4">
      {sortedProjects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}
