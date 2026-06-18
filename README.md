# Recovery Vault

Recovery Vault is a Next.js 15 SaaS foundation for asset recovery firms. It includes TypeScript, Tailwind CSS, ShadCN UI conventions, Prisma, PostgreSQL, JWT authentication, RBAC, and dashboards for clients, admins, investigators, and vault managers.

## Getting started

1. Copy `.env.example` to `.env` and set `DATABASE_URL` and `JWT_SECRET`.
2. Install dependencies: `npm install`.
3. Generate Prisma client: `npm run prisma:generate`.
4. Run migrations: `npm run prisma:migrate`.
5. Start development: `npm run dev`.

## Dashboards

- `/client` - client case and vault overview.
- `/admin` - user, case, and SLA management.
- `/investigations` - investigation queue and evidence overview.
- `/recovery-vault` - recovered asset custody dashboard.

## API routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/admin/users`
- `GET /api/investigations`
- `GET /api/recovery-vault`
