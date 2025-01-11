# AI/ML Professional Portfolio

A cutting-edge professional portfolio platform designed for AI and machine learning professionals to showcase technical achievements through a fully responsive and adaptive web application.

## Features

- 🎯 Responsive Design: Mobile-first approach supporting all devices
- 💼 Project Showcase: Detailed project presentations
- 📝 Blog System: Share knowledge and experiences
- 🎓 Education & Certifications: Highlight academic achievements
- 📱 Adaptive UI: Seamless experience across all screen sizes
- 🔧 Modern Tech Stack: Built with the latest web technologies

## Prerequisites

- Node.js 18+ or newer
- PostgreSQL database
- NPM or Yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
```

4. Initialize the database:
```bash
npm run db:push
```

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:5000
```

The application will be running in development mode with hot-reload enabled.

## Project Structure

```
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/      # Page components
│   │   ├── lib/        # Utilities and constants
│   │   └── hooks/      # Custom React hooks
├── server/             # Backend Express application
│   ├── routes.ts       # API routes
│   └── db/            # Database configuration
└── db/                # Database schema and migrations
```

## Technologies Used

### Frontend
- React.js with TypeScript
- TailwindCSS for styling
- Framer Motion for animations
- React Query for data fetching
- Wouter for routing
- shadcn/ui for UI components

### Backend
- Express.js
- PostgreSQL with Drizzle ORM
- TypeScript

## Building for Production

To create a production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## Additional Documentation

- Check `server/routes.ts` for available API endpoints
- See `db/schema.ts` for database schema
- Refer to `client/src/lib/constants.ts` for configuration

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Project Setup Instructions

### 1. Database Setup
1. Ensure PostgreSQL is installed and running
2. Create a new database for the project
3. Update the DATABASE_URL in your .env file
4. Run migrations: `npm run db:push`

### 2. Frontend Development
1. All frontend code is in the `client/` directory
2. Components are organized by feature in `client/src/components/`
3. Pages are in `client/src/pages/`
4. Styles are managed through TailwindCSS

### 3. Backend Development
1. Express server code is in `server/`
2. API routes are defined in `server/routes.ts`
3. Database schema is in `db/schema.ts`

### 4. Development Workflow
1. Start development server: `npm run dev`
2. Make changes to frontend or backend
3. Changes will hot-reload automatically
4. Check console for any errors
5. Run build before deployment: `npm run build`

### 5. Common Issues & Solutions

#### Database Connection Issues
- Verify PostgreSQL is running
- Check DATABASE_URL format
- Ensure database exists
- Run migrations: `npm run db:push`

#### Build Issues
- Clear node_modules: `rm -rf node_modules`
- Reinstall dependencies: `npm install`
- Check for TypeScript errors: `npm run check`

#### Development Server Issues
- Check if port 5000 is available
- Verify all environment variables are set
- Check for console errors