# Elemental Sound

Professional audio solutions for every creator, from emerging artists to established studios.

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-netlify-site-id/deploy-status)](https://app.netlify.com/sites/your-netlify-site-name/deploys) <!-- Replace with your actual Netlify site ID and name after deployment -->

## Getting Started

First, set up your environment variables:

```bash
cp .env.example .env.local
```

Then, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to Netlify

### Method 1: Deploy using the Netlify CLI

1. Install the Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to your Netlify account:
   ```bash
   netlify login
   ```

3. Initialize a new Netlify site:
   ```bash
   netlify init
   ```

4. Deploy your site:
   ```bash
   netlify deploy --prod
   ```

### Method 2: Deploy via Netlify Web Interface

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Log in to [Netlify](https://app.netlify.com/)

3. Click "New site from Git"

4. Select your repository and configure the following settings:
   - Branch to deploy: `main`
   - Build command: `npm run build:netlify`
   - Publish directory: `.next`

5. Click "Deploy site"

### Continuous Deployment

After initial setup, Netlify will automatically deploy your site whenever you push to your repository's main branch.

### Environment Variables

Make sure to set up the following environment variables in your Netlify site settings:

- `SITE_URL`: Your production site URL
- `NEXT_PUBLIC_SITE_URL`: Same as your production site URL
- Any other environment variables required by your application

## Performance Optimization

This project includes image optimization scripts to ensure fast page loads. You can manually run this with:

```bash
npm run optimize-images
```

This will compress and resize large images to improve performance.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
