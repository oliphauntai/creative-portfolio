# Blog Content

Drop your `.md` or `.mdx` files here to create blog posts automatically.

## File Format

Each file should have frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2026-01-19"
excerpt: "A brief description of your post"
author: "Your Name"
tags: ["tag1", "tag2"]
---

# Your content here

Write your blog post content using Markdown or MDX.
```

## Required Fields

- `title`: The post title
- `date`: Publication date (YYYY-MM-DD format)
- `excerpt`: Short description for listing page

## Optional Fields

- `author`: Author name
- `tags`: Array of tags/categories

## File Naming

Files are automatically slugified based on their filename. For example:
- `my-awesome-post.md` → `/blog/my-awesome-post`
- `2026-01-19-hello-world.mdx` → `/blog/2026-01-19-hello-world`
