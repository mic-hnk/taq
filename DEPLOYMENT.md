# Deployment to GitHub Pages

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Setup Instructions

To enable GitHub Pages for this repository, follow these steps:

1. **Go to Repository Settings**
   - Navigate to your repository on GitHub
   - Click on "Settings" tab

2. **Configure GitHub Pages**
   - In the left sidebar, click on "Pages" under "Code and automation"
   - Under "Build and deployment":
     - **Source**: Select "GitHub Actions"
   - Click "Save"

3. **Trigger Deployment**
   - The workflow will automatically run on every push to the `main` branch
   - You can also manually trigger it:
     - Go to "Actions" tab
     - Select "Deploy to GitHub Pages" workflow
     - Click "Run workflow"

## How It Works

The deployment process is automated through a GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. **Build Job**:
   - Checks out the code
   - Sets up Node.js 20
   - Installs dependencies with `npm ci`
   - Builds the application with `npm run build`
   - Uploads the `dist` folder as an artifact

2. **Deploy Job**:
   - Deploys the artifact to GitHub Pages
   - Makes the site available at: `https://mic-hnk.github.io/taq/`

## Configuration

The Vite configuration (`vite.config.ts`) is set up with `base: '/taq/'` to ensure all asset paths are correct when deployed to GitHub Pages.

## Troubleshooting

- **Build fails**: Check the Actions tab for detailed error logs
- **404 errors**: Ensure the base path in `vite.config.ts` matches your repository name
- **Changes not reflected**: Clear your browser cache or wait a few minutes for CDN propagation

## Manual Deployment

If you need to deploy manually:

```bash
npm run build
```

Then use the GitHub Pages settings to deploy from a branch if preferred.
