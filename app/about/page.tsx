import { Breadcrumb } from '@/components/breadcrumb'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Breadcrumb items={[{ label: 'About' }]} />
      
      <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
        About
      </h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
          Creative technologist with a passion for building innovative digital experiences.
        </p>
        
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2 mb-12">
          {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', '3D', 'AI'].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
            >
              {skill}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
          Contact
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Interested in working together?
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  )
}
