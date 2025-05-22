# Creative Salon Studio

A modern salon website built with React, TypeScript, Express.js, and PostgreSQL.

## Deploying to Vercel

### Prerequisites

1. A [Vercel](https://vercel.com) account
2. A PostgreSQL database (we recommend [Neon](https://neon.tech) for Vercel deployment)

### Setup Instructions

1. Fork or clone this repository to your GitHub account
2. Connect the repository to Vercel
3. Set up the following environment variables in the Vercel dashboard:
   - `DATABASE_URL`: Your PostgreSQL connection string
   - `DATABASE_AUTH_TOKEN`: If using Neon or similar service that requires a token
   - `SESSION_SECRET`: A random string for session encryption
   - `NODE_ENV`: Set to "production"

4. Deploy the project from the Vercel dashboard

### Local Development

```bash
# Install dependencies
npm install

# Run development server with database
npm run dev 

# Run frontend-only development server (no database required)
npm run dev:frontend
```

## Project Structure

- `/client`: React frontend application
- `/server`: Express.js backend API
- `/shared`: Shared TypeScript types and utilities
- `/dist` (generated): Built application for production

## Features

- Modern salon booking system
- Staff profiles and service listings
- Contact form and gallery
- Responsive design for all devices 