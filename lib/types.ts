export type GridSize = 'small' | 'medium' | 'large'

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  thumbnail: string
  videoUrl?: string
  techStack: string[]
  role: string
  liveUrl?: string
  githubUrl?: string
  gridSize: GridSize
  order: number
  featured: boolean
  fullDescription?: string
  images?: string[]
  year?: string
}
