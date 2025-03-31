import { useState } from 'react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a new React project with TypeScript and start building type-safe applications.",
    date: "2025-03-01"
  },
  {
    id: 2,
    title: "Building Modern UIs with Tailwind CSS",
    excerpt: "Explore the power of utility-first CSS with Tailwind and create beautiful user interfaces.",
    date: "2025-02-28"
  },
  // Add more blog posts here
]

export function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map(post => (
          <article key={post.id} className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
            <p className="text-gray-500 mb-4">{post.excerpt}</p>
            <time className="text-sm text-gray-400">{post.date}</time>
          </article>
        ))}
      </div>
    </div>
  )
}