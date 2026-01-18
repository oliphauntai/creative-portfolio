import { notFound } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ExternalLink, Github } from 'lucide-react'
import { getProjectBySlug, getAllProjects } from '@/lib/projects'
import { ImageGallery } from '@/components/image-gallery'
import { Breadcrumb } from '@/components/breadcrumb'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Breadcrumb
          items={[
            { label: 'Projects', href: '/' },
            { label: project.title },
          ]}
        />

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50">
              {project.title}
            </h1>
            {project.year && (
              <span className="text-lg text-zinc-600 dark:text-zinc-400">
                {project.year}
              </span>
            )}
          </div>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div>
              <span className="text-sm text-zinc-600 dark:text-zinc-400">Role:</span>
              <span className="ml-2 text-sm font-medium text-zinc-900 dark:text-zinc-50">
                {project.role}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                View Live
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-800 text-white rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors"
              >
                <Github className="w-5 h-5" />
                View Code
              </a>
            )}
          </div>
        </div>

        {project.fullDescription && (
          <div className="prose prose-zinc dark:prose-invert max-w-none mb-12">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {project.fullDescription}
            </ReactMarkdown>
          </div>
        )}

        {project.images && project.images.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
              Gallery
            </h2>
            <ImageGallery images={project.images} alt={project.title} />
          </div>
        )}

      </div>
    </div>
  )
}
