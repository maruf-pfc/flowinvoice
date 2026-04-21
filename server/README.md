# 🚀 Express DDD Starter

> A production-ready, open-source Express 5 + TypeScript + MongoDB starter using the **Modular / Domain-Driven Design (DDD)** architecture pattern. Built with [Bun](https://bun.sh) as the runtime and package manager.

[![CI](https://github.com/maruf-pfc/express-ddd-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/maruf-pfc/express-ddd-starter/actions/workflows/ci.yml)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5.x-black?logo=express)](https://expressjs.com/)
[![Bun](https://img.shields.io/badge/Bun-1.x-orange?logo=bun)](https://bun.sh/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-green?logo=mongodb)](https://mongoosejs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

---

## ✨ Features

- ⚡ **Bun** — Fast runtime & package manager (no npm/node needed)
- 🔷 **TypeScript** — Strict mode + `verbatimModuleSyntax`
- 🚦 **Express 5** — Latest Express with async error handling
- 🍃 **Mongoose** — MongoDB ODM with typed models
- 🔒 **Helmet** — Secure HTTP headers out of the box
- 🌐 **CORS** — Cross-origin request support
- 📋 **Morgan** — HTTP request logger
- 🛡️ **Centralized error handling** — Global error handler + 404 middleware
- 🧰 **Shared utilities** — `ApiError`, `ApiResponse`, `catchAsync`
- 🧹 **ESLint + Prettier** — TypeScript-aware flat config
- 🐺 **Husky + lint-staged** — Auto-lint & format on every commit
- 🐳 **Docker** — Multi-stage `Dockerfile` + `docker-compose.yml` (API + MongoDB)
- 🧪 **Bun Test** — Built-in test runner, zero config

---

## 📁 Project Structure

```
express-ddd-starter/
├── src/
│   ├── __tests__/                    # Test files (mirrors module structure)
│   │   ├── modules/
│   │   │   ├── health.routes.test.ts
│   │   │   └── health.service.test.ts
│   │   └── utils/
│   │       ├── ApiError.test.ts
│   │       └── ApiResponse.test.ts
│   ├── config/
│   │   └── index.ts                  # Env vars loaded via dotenv
│   ├── constants/
│   │   ├── http.ts                   # HttpStatus codes
│   │   └── messages.ts               # Common response strings
│   ├── db/
│   │   └── connectDB.ts              # Mongoose connection
│   ├── interfaces/
│   │   └── index.ts                  # Shared global interfaces
│   ├── middlewares/
│   │   ├── globalErrorHandler.ts
│   │   ├── notFound.ts
│   │   └── validate.ts               # Zod request validation hook
│   ├── modules/                      # ← Feature modules live here
│   │   └── health/
│   │       ├── health.controller.ts  # HTTP handlers
│   │       ├── health.dto.ts         # Data Transfer Objects shapes
│   │       ├── health.model.ts       # Mongoose DB schema
│   │       ├── health.repository.ts  # Database abstraction layer
│   │       ├── health.routes.ts      # Module-scoped Express Router
│   │       ├── health.schema.ts      # Zod validation schemas
│   │       ├── health.service.ts     # Business logic (depends on repository)
│   │       └── health.types.ts       # Module-scoped custom types
│   ├── routes/
│   │   └── index.ts                  # Central route registry (/api/v1)
│   ├── types/
│   │   └── express.d.ts              # Express augmented types (e.g. req.user)
│   ├── utils/
│   │   ├── ApiError.ts
│   │   ├── ApiResponse.ts
│   │   └── catchAsync.ts
│   ├── app.ts                        # Express app factory
│   └── server.ts                     # Entry point (DB + listen)
├── .env.example
├── .eslint.config.mjs
├── .prettierrc
├── .husky/
│   └── pre-commit
├── Dockerfile
├── docker-compose.yml
├── tsconfig.json
└── package.json
```

---

## 🏗️ Architecture — Modular / DDD Pattern

The key idea: **code is organised by feature domain, not by technical role**.

```
src/modules/<feature>/
  ├── <feature>.controller.ts  # HTTP layer — thin, delegates to service
  ├── <feature>.service.ts     # All business logic, coordinates system
  ├── <feature>.repository.ts  # Infrastructure layer — DB abstraction
  ├── <feature>.model.ts       # DB models/schemas
  ├── <feature>.dto.ts         # Shape of data crossing boundaries
  ├── <feature>.schema.ts      # Validation (e.g., Zod)
  └── <feature>.routes.ts      # Express Router, exported & registered centrally
```

Each module is **self-contained**. You can move, test, or delete a module without touching any other module. The **Repository pattern** is used to decouple the Service layer from the underlying database implementation (e.g., Mongoose).

### vs MVC (Layered) pattern

| | MVC / Layered | Modular / DDD |
|-|---------------|---------------|
| Organisation | By technical role (`controllers/`, `services/`, `models/`) | By feature domain (`modules/users/`, `modules/orders/`) |
| Best for | Small–medium APIs, teams new to backend | Large APIs, multiple domains, microservice migration |
| File location | `src/controllers/user.controller.ts` | `src/modules/user/user.controller.ts` |

---

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh) ≥ 1.0
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/atlas))

### 1. Clone & install

```bash
git clone https://github.com/maruf-pfc/express-ddd-starter.git
cd express-ddd-starter
bun install
```

### 2. Configure environment

```bash
cp .env.example .env
# Edit .env and set DATABASE_URL
```

### 3. Run in development

```bash
bun run dev
```

The API is available at `http://localhost:5000`.

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start with hot-reload (`--watch`) |
| `bun run start` | Start in production mode |
| `bun run lint` | Run ESLint |
| `bun run lint:fix` | Auto-fix lint errors |
| `bun run prettier` | Check formatting |
| `bun run prettier:fix` | Auto-fix formatting |
| `bun run typecheck` | TypeScript type check |
| `bun test` | Run all tests |
| `bun test --watch` | Run tests in watch mode |

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Root ping |
| `GET` | `/api/v1/health` | API + DB health status |

### Example response

```json
{
  "success": true,
  "message": "Service is healthy",
  "data": {
    "status": "ok",
    "timestamp": "2025-01-01T00:00:00.000Z",
    "uptime": "42s",
    "database": "connected"
  }
}
```

---

## 🐳 Docker

```bash
# Start API + MongoDB together
docker compose up --build

# Build image only
docker build -t express-ddd-starter .
```

---

## 🧪 Testing

Tests use **Bun's built-in test runner** — no extra dependencies needed.

```bash
bun test                # Run all tests
bun test --watch        # Watch mode
bun test src/__tests__/modules/health.service.test.ts  # Single file
```

Test structure:
- **Unit tests** — `ApiError`, `ApiResponse`, `healthService`
- **Integration tests** — `/api/v1/health` route, 404 handling

---

## ➕ Adding a New Module

Follow these steps to add a new `users` module:

```bash
mkdir -p src/modules/users
touch src/modules/users/users.service.ts
touch src/modules/users/users.controller.ts
touch src/modules/users/users.routes.ts
touch src/modules/users/users.repository.ts
touch src/modules/users/users.model.ts
touch src/modules/users/users.dto.ts
touch src/modules/users/users.schema.ts

# Register the router in:
# src/routes/index.ts → router.use('/users', usersRoutes);

# Write tests:
mkdir -p src/__tests__/modules/users
touch src/__tests__/modules/users/users.service.test.ts
touch src/__tests__/modules/users/users.routes.test.ts
```

That's it — the module is fully isolated. No other files need to change except `src/routes/index.ts`.

---

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `express` | Web framework |
| `mongoose` | MongoDB ODM |
| `helmet` | Security headers |
| `cors` | Cross-origin support |
| `morgan` | HTTP request logging |
| `zod` | Request payload validation |
| `dotenv` | Environment variable loading |

---

## 🤝 Community

- [Contributing Guide](./CONTRIBUTING.md) — How to contribute
- [Code of Conduct](./CODE_OF_CONDUCT.md) — Community standards
- [Security Policy](./SECURITY.md) — How to report vulnerabilities
- [Changelog](./CHANGELOG.md) — What changed in each version

---

## 📄 License

MIT © [Md. Maruf Sarker](https://github.com/maruf-pfc)
