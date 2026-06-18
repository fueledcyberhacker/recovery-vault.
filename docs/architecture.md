# Architecture

The app uses Next.js App Router with server-first pages, colocated API routes, Prisma for PostgreSQL persistence, JWT session cookies, and explicit RBAC helpers.

## Core layers

- `app/` contains pages and API route handlers.
- `components/` contains reusable dashboard and ShadCN-style UI primitives.
- `lib/` contains Prisma, auth, utility, and RBAC helpers.
- `prisma/schema.prisma` defines users, cases, investigations, and vault custody records.
