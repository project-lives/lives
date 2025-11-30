# Next.js Landing Page Project

## Overview

This is a Next.js project with TypeScript and Tailwind CSS, featuring a landing page based on a Figma design.

## Technology Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
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

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project.

### Building for Production

```bash
npm run build
npm start
```

## Features

The landing page includes:

- Hero section with navigation bar
- Six feature sections:
  - Active Pauses
  - Safe Conversations
  - Zero Bullying Policy
  - Multicultural Friends
  - Communication with Families
  - Open Communication

## Design

The design is based on a Figma file and uses:

- Dark background (#1a1a1a)
- White borders and text
- Arimo font family
- Responsive layout with centered content
