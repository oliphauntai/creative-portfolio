import { Project } from './types'

export const projects: Project[] = [
  {
    id: '1',
    slug: 'ai-design-system',
    title: 'AI Design System',
    description: 'An intelligent design system that adapts to user preferences using machine learning.',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop',
    techStack: ['Next.js', 'AI', 'TypeScript', 'Tailwind CSS'],
    role: 'Solo Developer',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gridSize: 'large',
    order: 1,
    featured: true,
    year: '2026',
    fullDescription: `# AI Design System

An intelligent design system that learns from user interactions and automatically adjusts components to match user preferences and accessibility needs.

## The Challenge

Traditional design systems are static and require manual configuration. We wanted to create a system that could adapt in real-time based on user behavior and preferences.

## Solution

Built a machine learning-powered design system that:
- Analyzes user interaction patterns
- Automatically adjusts spacing, colors, and typography
- Learns from accessibility preferences
- Generates component variations on the fly

## Technical Highlights

- **Adaptive Theming**: ML model predicts optimal color schemes based on user preferences
- **Smart Components**: Components that adjust their behavior based on usage patterns
- **Performance**: All AI processing happens on-device using WebAssembly
- **Accessibility**: Automatic WCAG compliance checks and adjustments

## Impact

Reduced design inconsistencies by 80% and improved user satisfaction scores by 45%.`,
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=800&fit=crop',
    ],
  },
  {
    id: '2',
    slug: 'interactive-3d-portfolio',
    title: 'Interactive 3D Portfolio',
    description: 'A 3D web experience showcasing creative projects in an immersive environment.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
    techStack: ['Three.js', 'React', 'WebGL'],
    role: 'Creative Developer',
    liveUrl: 'https://example.com',
    gridSize: 'medium',
    order: 2,
    featured: true,
    year: '2025',
    fullDescription: `# Interactive 3D Portfolio

A fully immersive 3D web experience that transforms traditional portfolio browsing into an interactive journey through a virtual space.

## Concept

Instead of scrolling through flat pages, users navigate through a 3D environment where each project exists as an interactive object in space.

## Features

- Real-time 3D rendering using Three.js
- Physics-based interactions
- Procedurally generated environments
- Responsive 3D layouts
- Mobile-friendly controls

## Performance Optimization

Achieved 60fps on mid-range devices through:
- Level of detail (LOD) systems
- Frustum culling
- Texture compression
- Progressive loading`,
    images: [
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1618005198920-f0cb6201c115?w=1200&h=800&fit=crop',
    ],
  },
  {
    id: '3',
    slug: 'motion-design-library',
    title: 'Motion Design Library',
    description: 'A collection of reusable animation components built with Framer Motion.',
    thumbnail: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=400&fit=crop',
    techStack: ['Framer Motion', 'React', 'Storybook'],
    role: 'Frontend Lead',
    githubUrl: 'https://github.com',
    gridSize: 'small',
    order: 3,
    featured: false,
    year: '2025',
    fullDescription: `# Motion Design Library

A comprehensive library of production-ready animation components with a focus on performance and accessibility.

## Overview

50+ animation components with customizable parameters, built for teams that need consistent, high-quality motion design.

## Key Features

- Physics-based animations
- Accessibility-first approach (respects prefers-reduced-motion)
- TypeScript support
- Comprehensive documentation
- Interactive Storybook demos`,
    images: [
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&h=800&fit=crop',
    ],
  },
  {
    id: '4',
    slug: 'real-time-collaboration',
    title: 'Real-time Collaboration Tool',
    description: 'A collaborative workspace with real-time updates and AI-powered suggestions.',
    thumbnail: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=400&h=400&fit=crop',
    techStack: ['WebSocket', 'Node.js', 'React'],
    role: 'Full Stack Developer',
    liveUrl: 'https://example.com',
    gridSize: 'small',
    order: 4,
    featured: false,
    year: '2025',
    fullDescription: `# Real-time Collaboration Tool

A multiplayer workspace that enables seamless collaboration with AI-powered assistance.

## Technical Architecture

- WebSocket-based real-time sync
- Operational transformation for conflict resolution
- Redis for state management
- AI-powered smart suggestions

## Challenges Solved

- Sub-100ms latency for global teams
- Conflict-free replicated data types (CRDT)
- Offline-first architecture`,
    images: [
      'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=1200&h=800&fit=crop',
    ],
  },
  {
    id: '5',
    slug: 'generative-art-platform',
    title: 'Generative Art Platform',
    description: 'A platform for creating and sharing generative art powered by algorithms.',
    thumbnail: 'https://images.unsplash.com/photo-1618005198920-f0cb6201c115?w=800&h=800&fit=crop',
    techStack: ['Canvas API', 'TypeScript', 'Next.js'],
    role: 'Solo Developer',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    gridSize: 'large',
    order: 5,
    featured: true,
    year: '2024',
    fullDescription: `# Generative Art Platform

A creative coding platform where artists can create, mint, and sell algorithmic art.

## What Makes It Special

- Visual programming interface for non-coders
- Real-time preview with parameter tweaking
- Export to high-resolution formats
- Built-in NFT minting
- Community gallery

## Technical Stack

- Canvas API for rendering
- Web Workers for heavy computation
- IPFS for decentralized storage
- Smart contracts for NFT minting`,
    images: [
      'https://images.unsplash.com/photo-1618005198920-f0cb6201c115?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop',
    ],
  },
  {
    id: '6',
    slug: 'voice-ui-experiment',
    title: 'Voice UI Experiment',
    description: 'Exploring voice interactions and speech recognition in modern web apps.',
    thumbnail: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=800&h=400&fit=crop',
    techStack: ['Web Speech API', 'React', 'AI'],
    role: 'UX Engineer',
    gridSize: 'medium',
    order: 6,
    featured: false,
    year: '2024',
    fullDescription: `# Voice UI Experiment

An experimental interface that explores natural language interactions for complex workflows.

## Research Goals

- Understand when voice is better than touch
- Design conversation flows for UI navigation
- Test accessibility improvements for screen reader users

## Findings

Voice interfaces work best for:
- Hands-free scenarios
- Quick commands
- Accessibility enhancement

But struggle with:
- Precision tasks
- Private environments
- Complex data input`,
    images: [
      'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=1200&h=800&fit=crop',
    ],
  },
  {
    id: '7',
    slug: 'data-visualization-dashboard',
    title: 'Data Visualization Dashboard',
    description: 'Beautiful, interactive dashboards for complex data sets.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop',
    techStack: ['D3.js', 'React', 'TypeScript'],
    role: 'Data Visualization Engineer',
    liveUrl: 'https://example.com',
    gridSize: 'small',
    order: 7,
    featured: false,
    year: '2024',
    fullDescription: `# Data Visualization Dashboard

Interactive dashboards that make complex data accessible and actionable.

## Features

- 20+ chart types
- Real-time data streaming
- Custom filtering and drilling
- Export to multiple formats
- Mobile-responsive layouts`,
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    ],
  },
  {
    id: '8',
    slug: 'ar-shopping-experience',
    title: 'AR Shopping Experience',
    description: 'Augmented reality e-commerce application for virtual product placement.',
    thumbnail: 'https://images.unsplash.com/photo-1617802690658-1173a812650d?w=400&h=400&fit=crop',
    techStack: ['AR.js', 'Three.js', 'React'],
    role: 'AR Developer',
    liveUrl: 'https://example.com',
    gridSize: 'small',
    order: 8,
    featured: false,
    year: '2024',
    fullDescription: `# AR Shopping Experience

Try before you buy with augmented reality product visualization.

## Innovation

Customers can place furniture, decor, and products in their actual space using their phone camera.

## Technical Achievements

- Accurate scale and lighting
- Real-time shadow casting
- Cross-platform AR support
- 3D model optimization for mobile`,
    images: [
      'https://images.unsplash.com/photo-1617802690658-1173a812650d?w=1200&h=800&fit=crop',
    ],
  },
]
