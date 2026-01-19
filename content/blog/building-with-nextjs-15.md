---
title: "Building with Next.js 15: Key Takeaways"
date: "2026-01-18"
excerpt: "My experience building modern web applications with the latest version of Next.js and what's changed."
author: "Creative Technologist"
tags: ["nextjs", "react", "web development"]
---

# Building with Next.js 15: Key Takeaways

Next.js 15 brings some significant changes to the framework, particularly around how we handle server components and async operations.

## The Async Params Pattern

One of the biggest changes in Next.js 15 is that route parameters are now promises that must be awaited:

```typescript
export default async function Page({ params }: PageProps) {
  const { slug } = await params
  // Now you can use slug
}
```

This change ensures better type safety and prepares the framework for future optimizations.

## Server Components by Default

Next.js 15 doubles down on Server Components being the default. This means:

- Faster initial page loads
- Reduced JavaScript bundle sizes
- Better SEO out of the box

Only add `'use client'` when you actually need client-side interactivity.

## Image Optimization

The `next/image` component continues to be one of the best features, automatically handling:

- Format conversion (WebP, AVIF)
- Responsive image sizing
- Lazy loading
- Blur placeholders

## Conclusion

Next.js 15 is a solid evolution of the framework, making it easier to build performant, modern web applications while maintaining developer experience.
