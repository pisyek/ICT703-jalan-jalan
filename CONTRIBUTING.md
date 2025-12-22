# Contributing to Jalan-Jalan

## Project Overview
This is a collaborative project for ICT703 - Human Centered Informatics at UiTM. All groups will contribute to a single unified codebase.

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/redzwanlatif/ICT703-jalan-jalan.git
   cd ICT703-jalan-jalan
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## Workflow for Contributing

### 1. Create a Branch
Always create a new branch for your work:
```bash
git checkout -b feature/group1-chatbot
# or
git checkout -b fix/dashboard-layout
```

**Branch naming convention:**
- `feature/groupX-description` - For new features
- `fix/description` - For bug fixes
- `docs/description` - For documentation

### 2. Make Your Changes
- Write clean, readable code
- Follow existing code patterns
- Test your changes locally with `npm run build`

### 3. Commit Your Changes
```bash
git add .
git commit -m "Add chatbot component for context-aware planning"
```

### 4. Push and Create Pull Request
```bash
git push origin feature/group1-chatbot
```
Then go to GitHub and create a Pull Request.

### 5. Wait for Approval
All PRs require approval before merging. Do not merge your own PRs.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Language:** TypeScript

## Project Structure
```
src/
├── app/              # Pages and routes
├── components/
│   ├── ui/           # shadcn/ui components
│   └── shared/       # Shared custom components
├── lib/              # Utility functions
├── hooks/            # Custom React hooks
└── types/            # TypeScript types
```

## Groups Reference
| Group | Feature Module |
|-------|----------------|
| 1 | Context-Aware Planning Assistant |
| 2 | Interactive Travel Information Dashboard |
| 3 | Personal Travel Informatics |
| 4 | Social & Community Knowledge Layer |
| 5 | Predictive & Collective Analytics |
