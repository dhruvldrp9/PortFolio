# AI/ML Professional Portfolio

A cutting-edge professional portfolio platform designed for AI and machine learning professionals to showcase technical achievements through a fully responsive and adaptive web application, optimized for GitHub Pages deployment.

## Features

- 🎯 Responsive Design: Mobile-first approach supporting all devices
- 💼 Project Showcase: Detailed project presentations
- 📝 Blog System: Share knowledge and experiences
- 🎓 Education & Certifications: Highlight academic achievements
- 📱 Adaptive UI: Seamless experience across all screen sizes
- 🔧 Modern Tech Stack: Built with the latest web technologies
- 🤖 AI-Powered Insights: Automatic analysis of projects and technical suggestions
- 📊 Content Management: Easy-to-use JSON-based content management

## Prerequisites

- Node.js 18+ or newer
- NPM or Yarn package manager

## Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-platform
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5000
```

## Content Management

The platform uses JSON files for content management. These files are located in the `data` directory:

- `projects.json`: Portfolio projects
- `blog-posts.json`: Blog articles
- `certifications.json`: Professional certifications
- `education.json`: Educational background

To update content, modify the corresponding JSON files following their schema:

### Projects Schema
```json
{
  "projects": [
    {
      "id": number,
      "title": string,
      "description": string,
      "technologies": string,
      "image_url": string,
      "github_url": string (optional),
      "live_url": string (optional),
      "created_at": string (ISO date)
    }
  ]
}
```

### Blog Posts Schema
```json
{
  "posts": [
    {
      "id": number,
      "title": string,
      "content": string,
      "category": string,
      "tags": string[],
      "reading_time": number,
      "created_at": string (ISO date)
    }
  ]
}
```

## Deploying to GitHub Pages

1. Fork this repository or create a new one from it

2. Update the repository settings:
   - Go to Settings > Pages
   - Set the source to "GitHub Actions"

3. Configure your deployment:
   - If your repository is at `username.github.io`, no additional configuration is needed
   - For project repositories (e.g., `username.github.io/portfolio`), update `vite.config.ts`:
     ```typescript
     base: '/<repository-name>/'
     ```

4. Push your changes to the main branch:
```bash
git push origin main
```

GitHub Actions will automatically:
1. Build your project
2. Deploy it to GitHub Pages
3. Make it available at `https://username.github.io` or `https://username.github.io/repository-name`

## Project Structure

```
├── data/               # Content JSON files
│   ├── projects.json
│   ├── blog-posts.json
│   ├── certifications.json
│   └── education.json
├── client/            # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── lib/        # Utilities and constants
│   │   └── hooks/      # Custom React hooks
│   └── public/        # Static assets
└── server/           # Development server
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Update content in the JSON files
4. Commit your changes
5. Push to the branch
6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.