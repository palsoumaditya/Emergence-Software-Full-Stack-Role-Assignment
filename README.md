<p align="center">
  <h1 align="center">Soumaditya Pal — Portfolio + AI Chat</h1>
  <p align="center">
    A full-stack personal portfolio website with an AI-powered chat assistant that answers questions about the developer's resume, skills, and projects.
  </p>
</p>

<p align="center">
  <a href="#getting-started"><strong>Getting Started</strong></a> ·
  <a href="#api-reference"><strong>API Reference</strong></a> ·
  <a href="#deployment"><strong>Deployment</strong></a>
</p>

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [API Reference](#api-reference)
- [Frontend Components](#frontend-components)
- [Database Schema](#database-schema)
- [Deployment](#deployment)
  - [Backend — Render](#backend--render)
  - [Frontend — Vercel](#frontend--vercel)
- [SEO & Performance](#seo--performance)
- [License](#license)

---

## Overview

This project is a **full-stack portfolio website** built as part of the Emergence Software Full Stack Role Assignment. It features:

- 🎨 **Modern Portfolio UI** — Animated hero section, experience timeline, project showcase, tech stack marquee, and GitHub contribution calendar.
- 🤖 **AI Chat Assistant** — A floating chat widget that lets visitors ask questions about the developer. Powered by **Meta LLaMA 3.3 70B** via OpenRouter.
- 💾 **Persistent Chat History** — Conversations are stored in SQLite and restored across page reloads within the same browser session.
- 🌙 **Dark / Light Theme** — Smooth theme switching with a liquid-fill transition animation.
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile viewports.
- 🔍 **SEO Optimized** — Schema.org structured data, Open Graph tags, sitemap, robots.txt, and PWA manifest.

---

## Architecture

```
┌──────────────────────────────────────────────────────────┐
│                        Client                            │
│  Next.js 15  •  React 19  •  TypeScript  •  Tailwind 4  │
│                                                          │
│  ┌─────────┐  ┌─────────┐  ┌─────────────┐             │
│  │  Pages  │  │   UI    │  │ ChatWidget  │              │
│  │ (SSR)   │  │ Comps   │  │ (Client)    │              │
│  └────┬────┘  └─────────┘  └──────┬──────┘              │
│       │                           │                      │
│       │       REST API (CORS)     │                      │
└───────┼───────────────────────────┼──────────────────────┘
        │                           │
        ▼                           ▼
┌──────────────────────────────────────────────────────────┐
│                       Server                             │
│           FastAPI  •  Python 3.11  •  Uvicorn            │
│                                                          │
│  ┌──────────┐  ┌─────────────┐  ┌──────────────┐       │
│  │  main.py │  │ chat_engine │  │  database.py │        │
│  │ (Routes) │  │ (AI Logic)  │  │  (SQLite)    │        │
│  └──────────┘  └──────┬──────┘  └──────────────┘        │
│                        │                                 │
│                        ▼                                 │
│              ┌──────────────────┐                        │
│              │   OpenRouter AI  │                        │
│              │ (LLaMA 3.3 70B) │                        │
│              └──────────────────┘                        │
└──────────────────────────────────────────────────────────┘
```

---

## Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| **Frontend** | Next.js 15, React 19, TypeScript    |
| **Styling**  | Tailwind CSS 4, Framer Motion       |
| **Backend**  | Python 3.11, FastAPI, Uvicorn       |
| **AI**       | OpenRouter (Meta LLaMA 3.3 70B)     |
| **Database** | SQLite (via aiosqlite)              |
| **Hosting**  | Vercel (frontend), Render (backend) |
| **Icons**    | Lucide React, Tabler Icons          |

---

## Project Structure

```
Emergence-Software-Full-Stack-Role-Assignment/
│
├── backend/                   # Python FastAPI backend
│   ├── main.py                # Application entry point, routes & CORS config
│   ├── chat_engine.py         # OpenRouter AI integration & prompt engineering
│   ├── database.py            # Async SQLite database operations
│   ├── resume_data.py         # Structured resume data & context formatter
│   ├── requirements.txt       # Python dependencies
│   ├── .env                   # Backend environment variables (git-ignored)
│   └── .gitignore
│
├── frontend/                  # Next.js frontend application
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout (metadata, fonts, providers, SEO)
│   │   ├── page.tsx           # Home page (server component)
│   │   ├── globals.css        # Global styles, theme tokens, animations
│   │   ├── about/             # About page route
│   │   ├── projects/          # Projects page route
│   │   ├── manifest.ts        # PWA manifest
│   │   ├── robots.ts          # Robots.txt generator
│   │   └── sitemap.ts         # Sitemap XML generator
│   │
│   ├── components/
│   │   ├── home-client.tsx    # Main client component (sections orchestrator)
│   │   ├── theme-provider.tsx # next-themes provider wrapper
│   │   ├── magicui/           # Special animation components
│   │   └── ui/                # Reusable UI components
│   │       ├── hero.tsx           # Hero section with intro animation
│   │       ├── AboutSection.tsx   # About me section
│   │       ├── Experience.tsx     # Work experience timeline
│   │       ├── Projects.tsx       # Project showcase cards
│   │       ├── TechStack.tsx      # Technology marquee
│   │       ├── GithubContributions.tsx  # GitHub heatmap calendar
│   │       ├── Footer.tsx         # Contact & social links footer
│   │       ├── ChatWidget.tsx     # AI chat floating widget
│   │       ├── NavbarWrapper.tsx  # Responsive navigation bar
│   │       ├── resizable-navbar.tsx # Animated navbar component
│   │       ├── theme-toggle.tsx   # Dark/light mode toggle
│   │       ├── ThemeTransition.tsx # Liquid theme transition overlay
│   │       └── Button.tsx         # Reusable button component
│   │
│   ├── lib/
│   │   ├── utils.ts           # cn() class merge utility
│   │   └── loading-context.tsx # Loading state context provider
│   │
│   ├── public/                # Static assets (images, SVGs)
│   ├── package.json           # Node.js dependencies & scripts
│   ├── next.config.ts         # Next.js configuration
│   ├── tsconfig.json          # TypeScript configuration
│   └── .env.local             # Frontend environment variables (git-ignored)
│
├── .python-version            # Python version specification (3.11.11)
├── .gitignore                 # Root-level git ignore rules
└── README.md                  # ← You are here
```

---

## Getting Started

### Prerequisites

| Requirement             | Version  |
| ----------------------- | -------- |
| **Node.js**             | ≥ 18.x   |
| **npm**                 | ≥ 9.x    |
| **Python**              | 3.11.x   |
| **pip**                 | Latest   |
| **OpenRouter API Key**  | [Get one →](https://openrouter.ai/keys) |

### Backend Setup

```bash
# 1. Navigate to the backend directory
cd backend

# 2. Create and activate a virtual environment
python -m venv venv
# Windows:
venv\Scripts\activate
# macOS / Linux:
source venv/bin/activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Create the .env file
cp .env.example .env   # or create manually
```

Add your API key to `backend/.env`:

```env
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxx
FRONTEND_URL=http://localhost:3000
```

```bash
# 5. Start the development server
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at **http://localhost:8000**.  
Interactive Swagger docs at **http://localhost:8000/docs**.

### Frontend Setup

```bash
# 1. Navigate to the frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Create the .env.local file
```

Add the backend URL to `frontend/.env.local`:

```env
NEXT_PUBLIC_CHAT_API_URL=http://localhost:8000
```

```bash
# 4. Start the development server
npm run dev
```

The frontend will be available at **http://localhost:3000**.

---

## Environment Variables

### Backend (`backend/.env`)

| Variable              | Required | Description                                                                 |
| --------------------- | -------- | --------------------------------------------------------------------------- |
| `OPENROUTER_API_KEY`  | ✅       | API key for OpenRouter AI service                                           |
| `FRONTEND_URL`        | ❌       | Allowed CORS origin for the frontend (production URL)                       |
| `CORS_ORIGIN_REGEX`   | ❌       | Regex pattern for additional CORS origins (e.g., Vercel preview deploys)    |

### Frontend (`frontend/.env.local`)

| Variable                   | Required | Description                              |
| -------------------------- | -------- | ---------------------------------------- |
| `NEXT_PUBLIC_CHAT_API_URL` | ✅       | Full URL of the backend API server       |

---

## API Reference

The backend exposes a RESTful API. Full interactive documentation is auto-generated at `/docs` (Swagger UI).

### `GET /api/health`

Health check endpoint.

**Response** `200 OK`
```json
{
  "status": "healthy",
  "service": "portfolio-chat-api"
}
```

---

### `POST /api/chat`

Send a message to the AI chat assistant.

**Request Body**
```json
{
  "message": "What projects has Soumaditya built?",
  "session_id": "optional-uuid-string"
}
```

| Field        | Type              | Required | Description                                                  |
| ------------ | ----------------- | -------- | ------------------------------------------------------------ |
| `message`    | `string`          | ✅       | The user's message text                                      |
| `session_id` | `string \| null`  | ❌       | Session identifier. Auto-generated if omitted on first call. |

**Response** `200 OK`
```json
{
  "response": "Soumaditya has built several live projects including...",
  "session_id": "550e8400-e29b-41d4-a716-446655440000"
}
```

**Error** `400 Bad Request`
```json
{
  "detail": "Message cannot be empty"
}
```

---

### `GET /api/chat/history/{session_id}`

Retrieve chat history for a specific session.

**Path Parameters**

| Parameter    | Type     | Description             |
| ------------ | -------- | ----------------------- |
| `session_id` | `string` | The session UUID string |

**Response** `200 OK`
```json
{
  "messages": [
    {
      "role": "user",
      "content": "What are his skills?",
      "timestamp": "2026-02-22T03:15:00.000000+00:00"
    },
    {
      "role": "assistant",
      "content": "Soumaditya has a strong full-stack skill set...",
      "timestamp": "2026-02-22T03:15:02.000000+00:00"
    }
  ],
  "session_id": "550e8400-e29b-41d4-a716-446655440000"
}
```

---

## Frontend Components

| Component               | File                            | Description                                            |
| ------------------------ | ------------------------------- | ------------------------------------------------------ |
| **HomeClient**           | `components/home-client.tsx`    | Main client component that orchestrates all homepage sections with a multilingual greeting intro screen |
| **Hero**                 | `components/ui/hero.tsx`        | Animated hero section with name, tagline, and CTA buttons |
| **AboutSection**         | `components/ui/AboutSection.tsx`| "About me" section with developer bio and philosophy   |
| **Experience**           | `components/ui/Experience.tsx`  | Professional experience timeline with role details     |
| **Projects**             | `components/ui/Projects.tsx`    | Project showcase with live demo links and tech badges  |
| **TechStack**            | `components/ui/TechStack.tsx`   | Infinite-scroll marquee displaying technology logos     |
| **GithubContributions**  | `components/ui/GithubContributions.tsx` | GitHub contribution heatmap calendar          |
| **ChatWidget**           | `components/ui/ChatWidget.tsx`  | Floating AI chat panel with message history, typing indicator, and suggested questions |
| **NavbarWrapper**        | `components/ui/NavbarWrapper.tsx`| Responsive navigation bar with page links             |
| **Footer**               | `components/ui/Footer.tsx`      | Contact form (EmailJS), social links, and copyright    |
| **ThemeToggle**          | `components/ui/theme-toggle.tsx`| Dark/light mode switcher with liquid-fill animation    |
| **LoadingProvider**      | `lib/loading-context.tsx`       | React context for managing the initial loading/intro screen state |

---

## Database Schema

The backend uses **SQLite** (via `aiosqlite`) with a single table for chat persistence.

### `chat_messages`

| Column       | Type      | Constraints                              | Description                       |
| ------------ | --------- | ---------------------------------------- | --------------------------------- |
| `id`         | `INTEGER` | `PRIMARY KEY AUTOINCREMENT`              | Unique message identifier         |
| `session_id` | `TEXT`    | `NOT NULL`, indexed                      | Groups messages by browser session |
| `role`       | `TEXT`    | `NOT NULL`, `CHECK(IN ('user','assistant'))` | Sender role                   |
| `content`    | `TEXT`    | `NOT NULL`                               | Message body                      |
| `timestamp`  | `TEXT`    | `NOT NULL`                               | ISO 8601 UTC timestamp            |

The database file (`chat_history.db`) is automatically created on first startup.

---

## Deployment

### Backend — Render

1. **Create a new Web Service** on [Render](https://render.com).
2. **Connect** your GitHub repository.
3. Configure the service:

| Setting          | Value                                      |
| ---------------- | ------------------------------------------ |
| **Root Directory** | `backend`                                |
| **Build Command** | `pip install -r requirements.txt`         |
| **Start Command** | `uvicorn main:app --host 0.0.0.0 --port $PORT` |
| **Python Version** | `3.11.11`                               |

4. **Set environment variables** in the Render dashboard:
   - `OPENROUTER_API_KEY` = your OpenRouter API key
   - `FRONTEND_URL` = your Vercel deployment URL
   - `CORS_ORIGIN_REGEX` = regex for preview deployments (e.g., `https://your-project.*\.vercel\.app`)

### Frontend — Vercel

1. **Import** the repository on [Vercel](https://vercel.com).
2. Configure the project:

| Setting              | Value      |
| -------------------- | ---------- |
| **Root Directory**   | `frontend` |
| **Framework Preset** | Next.js    |
| **Build Command**    | `next build` |
| **Output Directory** | `.next`    |

3. **Set environment variables** in the Vercel dashboard:
   - `NEXT_PUBLIC_CHAT_API_URL` = your Render service URL

### CORS Configuration

The backend automatically allows:
- `http://localhost:3000` and `http://127.0.0.1:3000` (development)
- Any URL specified in the `FRONTEND_URL` environment variable (production)
- Any origin matching the `CORS_ORIGIN_REGEX` pattern (preview deployments)

---

## SEO & Performance

This project implements comprehensive SEO best practices:

| Feature                 | Implementation                                 |
| ----------------------- | ---------------------------------------------- |
| **Structured Data**     | Schema.org `Person` + `WebSite` JSON-LD        |
| **Open Graph**          | Full OG meta tags for social sharing           |
| **Twitter Cards**       | `summary_large_image` card type                |
| **Sitemap**             | Dynamic XML sitemap at `/sitemap.xml`          |
| **Robots.txt**          | Programmatic robots.txt at `/robots.txt`       |
| **PWA Manifest**        | Web app manifest for installability            |
| **Canonical URLs**      | Canonical link tags on all pages               |
| **Domain Redirect**     | Auto-redirect from `soumaditya.vercel.app` to custom domain |
| **Font Optimization**   | Google Fonts loaded via `next/font` (zero layout shift) |
| **Image Optimization**  | Next.js `<Image>` component with lazy loading  |

---

## License

This project was developed as part of the **Emergence Software Full Stack Role Assignment**.

---

<p align="center">
  Built with ❤️ by <a href="https://soumadityapal.in">Soumaditya Pal</a>
</p>
