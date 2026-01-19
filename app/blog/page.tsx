import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog'
import { Breadcrumb } from '@/components/breadcrumb'
import { Calendar, Clock } from 'lucide-react'

export const metadata = {
  title: 'Blog | Portfolio',
  description: 'Thoughts on design, technology, and creativity',
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Breadcrumb items={[{ label: 'Blog' }]} />

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
          Blog
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          Thoughts on design, technology, and creativity
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-zinc-600 dark:text-zinc-400">
            No blog posts yet. Drop .mdx or .md files into the content/blog folder to get started.
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border-b border-zinc-200 dark:border-zinc-800 pb-12 last:border-0"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    {post.author && (
                      <span>by {post.author}</span>
                    )}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-accent text-sm font-medium group-hover:underline">
                    Read more →
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
