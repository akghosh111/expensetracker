# Expense Tracker

A modern, full-stack expense tracking application built with cutting-edge web technologies for optimal performance and developer experience.

## 🚀 Features

- **Complete expense management** - Track, categorize, and analyze your expenses with ease
- **Type-safe development** - 100% TypeScript implementation across frontend and backend
- **Real-time data validation** - Zod schema validation for bulletproof data integrity
- **Seamless authentication** - Secure user management powered by Kinde Auth
- **Optimized user experience** - Lightning-fast SPA with Tanstack Router, Query, and Form
- **Modern database layer** - Drizzle ORM for type-safe SQL interactions
- **Production-ready hosting** - Deployed on fly.io VPS for reliability and performance
- **Beautiful UI** - Clean, responsive design using Tailwind CSS and shadcn-ui components

## 🛠️ Tech Stack

### Backend
- **[Hono](https://hono.dev/)** - Ultra-fast web framework with TypeScript RPC
- **[Bun](https://bun.sh/)** - High-performance JavaScript runtime and package manager
- **[Drizzle ORM](https://orm.drizzle.team/)** - Type-safe SQL database toolkit
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation

### Frontend
- **[React 18/19](https://react.dev/)** - Modern React with concurrent features
- **[TanStack Router](https://tanstack.com/router)** - Type-safe routing
- **[TanStack Query](https://tanstack.com/query)** - Powerful data synchronization
- **[TanStack Form](https://tanstack.com/form)** - Performant form management
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible UI components

### Infrastructure & Tools
- **[Kinde Auth](https://kinde.com/)** - Authentication and user management
- **[fly.io](https://fly.io/)** - Application hosting and deployment
- **TypeScript** - End-to-end type safety

## 🏗️ Architecture

This application follows modern full-stack patterns with:

- **Type-safe API layer** using Hono's RPC capabilities
- **Database-first approach** with Drizzle ORM migrations and schema
- **Client-side state management** optimized with TanStack Query
- **Form handling** with validation and error management via TanStack Form
- **Authentication flow** integrated throughout the application stack

## 📦 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (latest version)
- [Node.js](https://nodejs.org/) 18+ (for compatibility)
- Database (PostgreSQL/SQLite/MySQL - configure in Drizzle)

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd expense-tracker
```

2. Install dependencies
```bash
bun install
```

3. Set up environment variables
```bash
cp .env.example .env
```

Fill in your environment variables:
- Database connection string
- Kinde Auth credentials
- fly.io deployment settings

4. Set up the database
```bash
bun run db:migrate
bun run db:seed # Optional: seed with sample data
```

5. Start the development server
```bash
bun run dev
```

## 🚀 Deployment

This application is configured for deployment on fly.io:

```bash
# Deploy to production
fly deploy

# Set up database on fly.io
fly postgres create

# Set environment variables
fly secrets set DATABASE_URL=your_database_url
fly secrets set KINDE_CLIENT_ID=your_kinde_client_id
# ... other environment variables
```

## 📝 Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run db:generate` - Generate database migrations
- `bun run db:migrate` - Run database migrations
- `bun run db:studio` - Open Drizzle Studio
- `bun run type-check` - Run TypeScript type checking
- `bun run lint` - Run ESLint
- `bun run test` - Run test suite

## 🏃‍♂️ Development

The development setup provides:

- **Hot reloading** for both frontend and backend
- **Type checking** in real-time
- **Database introspection** with Drizzle Studio
- **API route testing** with built-in RPC client
- **Form validation** with immediate feedback

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built with modern web technologies that prioritize developer experience and application performance. Special thanks to the maintainers of the open-source libraries that make this stack possible.