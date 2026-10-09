# Automated Traffic Fine System

A Vercel-ready starter project for an automated traffic violation and fine management platform inspired by digital enforcement systems used in Dubai.

## Features

- AI-style traffic violation workflow
- Vehicle and plate tracking
- Fine generation and payment flow
- Citizen portal for viewing fines
- Admin dashboard with summary metrics
- API routes for violation ingestion and payment updates
- Easy deployment to Vercel

## Tech stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Vercel serverless API routes

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npm run dev
```

3. Open:

```bash
http://localhost:3000
```

## Vercel deployment

1. Push this project to GitHub.
2. Import it into Vercel.
3. Set environment variables from `.env.example`.
4. Deploy.

## Notes

This is a starter project designed for demo and MVP use. For a production traffic enforcement platform, replace the mock storage layer with a real database, compliance-grade evidence storage, secure authentication, and payment/integration providers.
