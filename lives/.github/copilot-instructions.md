# Next.js Landing Page Project

## Overview

This is a Next.js project with TypeScript and Tailwind CSS, featuring a landing page based on a Figma design.

## Technology Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Package Manager**: npm

## Project Structure

```
lives/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page component
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── components/
│       └── LandingPage.tsx   # Landing page component
├── public/                   # Static assets
├── package.json
└── tsconfig.json
```

## Development

## Code practices

1. Prioritise code readability and maintainability.
2. Make sure components are reusable where possible.
3. If component is not re-usable but has complicated logic => Make a compoment anyway for better separation of concerns.
4. Use TypeScript types and interfaces to ensure type safety.

## Design

During development and implementation of design:

1. Prioritize responsiveness and accessibility.
2. Use native CSS over tailwind utilities when necessary for better control.
3. If you can see a possibility for common variable or class extraction, do it.
