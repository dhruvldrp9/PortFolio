# Contributing Guide

This document provides instructions for modifying and adding content to different sections of the portfolio.

## Table of Contents
- [Adding Projects](#adding-projects)
- [Adding Blog Posts](#adding-blog-posts)
- [Adding Certifications](#adding-certifications)
- [Updating Education](#updating-education)

## Adding Projects

Projects are stored in the PostgreSQL database. To add a new project:

1. Connect to the database using the provided DATABASE_URL
2. Insert a new row into the `projects` table with the following structure:
```sql
INSERT INTO projects (
  title,
  description,
  technologies,
  image_url,
  github_url,
  live_url,
  created_at
) VALUES (
  'Project Title',
  'Detailed project description',
  'Technology1, Technology2, Technology3',
  'https://example.com/image.jpg',
  'https://github.com/username/project',
  'https://live-demo.com',
  CURRENT_TIMESTAMP
);
```

### Project Images
- Use high-quality images (recommended: 1200x800 pixels)
- Host images on a reliable CDN or image hosting service
- Keep image sizes under 500KB for optimal performance

## Adding Blog Posts

Blog posts are stored in the database with rich content support:

1. Insert a new row into the `blog_posts` table:
```sql
INSERT INTO blog_posts (
  title,
  content,
  author,
  image_url,
  tags,
  read_time,
  created_at
) VALUES (
  'Blog Post Title',
  'HTML content of the blog post',
  'Author Name',
  'https://example.com/blog-image.jpg',
  'AI, Machine Learning, Neural Networks',
  5, -- reading time in minutes
  CURRENT_TIMESTAMP
);
```

### Blog Content Guidelines
- Use HTML for formatting
- Include code snippets in `<pre><code>` tags
- Use appropriate heading tags (h2, h3, etc.)
- Include relevant images and diagrams
- Add proper attribution for any external content

## Adding Certifications

Certifications can be added to the database:

```sql
INSERT INTO certifications (
  name,
  issuer,
  description,
  credential_url,
  date_achieved,
  expiry_date,
  badge_url
) VALUES (
  'Certification Name',
  'Issuing Organization',
  'Description of the certification',
  'https://verify.cert.org/id',
  '2025-01-01',
  '2027-01-01',
  'https://example.com/badge.png'
);
```

## Updating Education

Education information is stored in `client/src/lib/constants.ts`. To update:

1. Open `constants.ts`
2. Locate the `EDUCATION` array
3. Add or modify education entries:
```typescript
export const EDUCATION = [
  {
    institution: "University Name",
    degree: "Degree Name",
    dates: "2023 - 2025",
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ],
    coursework: [
      "Course 1",
      "Course 2"
    ]
  }
];
```

## Development Guidelines

1. Always run tests before submitting changes
2. Follow the existing code style and formatting
3. Update documentation when adding new features
4. Use meaningful commit messages
5. Create a new branch for each feature or content update

## Need Help?

If you need assistance or have questions:
1. Check the existing documentation
2. Review the codebase for similar examples
3. Contact the maintainers
