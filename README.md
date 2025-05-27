# Pronto Cleanz Website

A Next.js-based website for Pronto Cleanz pressure washing services, featuring city-specific pages with proper SEO optimization.

## Features

- Dynamic city-specific pages
- LocalBusiness Schema markup for enhanced SEO
- Canonical URLs to prevent duplicate content
- Responsive design with Tailwind CSS
- Static site generation for optimal performance

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/pronto-cleanz.git
   cd pronto-cleanz
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Generate city pages:
   ```bash
   npx ts-node -P scripts/tsconfig.json scripts/generate-city-pages.ts
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `/app` - Next.js app directory containing pages and components
- `/utils` - Utility functions for schema and metadata generation
- `/scripts` - Helper scripts for generating city pages
- `/public` - Static assets

## SEO Features

- LocalBusiness Schema markup for each city
- Canonical URLs to prevent duplicate content
- Dynamic metadata generation
- City-specific pages with proper URL structure

## License

MIT 