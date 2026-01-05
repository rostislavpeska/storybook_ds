# AI Agent Guidelines: Unifying the GOV.cz Storybook

This document serves as the authoritative guide for AI agents working on the "Storybook DS" project. Our goal is a unified, professional, and accessible documentation system for the GOV.cz Design System components.

---

## ⛔⛔⛔ CRITICAL RULE #1: DOCKER ONLY - ABSOLUTELY NO LOCAL EXECUTION ⛔⛔⛔

# THIS IS THE MOST IMPORTANT RULE IN THIS ENTIRE DOCUMENT

**EVERY SINGLE npm, npx, node, AND vitest COMMAND MUST RUN INSIDE DOCKER.**

**THERE ARE ZERO EXCEPTIONS. EVER.**

---

### 🚫 FORBIDDEN COMMANDS (Never Run These Directly)

```powershell
# ❌ FORBIDDEN - These will pollute the host system
npm run storybook
npm install <package>
npm run test
npx storybook dev
npx vitest
npx playwright install
node anything.js
```

### ✅ REQUIRED COMMANDS (Always Use These Instead)

```powershell
# ✅ CORRECT - All commands go through Docker
docker exec storybookds-storybook-dev-1 npm run storybook
docker exec storybookds-storybook-dev-1 npm install <package> --legacy-peer-deps
docker exec storybookds-storybook-dev-1 npm run test -- --run
docker exec storybookds-storybook-dev-1 npx vitest --project=storybook --run
docker-compose --profile dev up -d
docker-compose --profile dev down
docker-compose --profile dev build --no-cache
```

### 🔴 THE INCIDENT (Jan 5, 2026) - Why This Rule Exists

**What Happened:**
1. An AI agent ran `npx storybook dev` locally (not in Docker)
2. This started a LOCAL Storybook server on port 6006
3. The agent ALSO had Docker running with Storybook
4. Both processes were fighting for the same port
5. When Docker was stopped, Storybook was still running (locally)
6. The agent was confused: "Why is Storybook still available?"
7. The user had to manually kill Node processes
8. Hours were wasted debugging

**Root Cause:** The agent took a "shortcut" by running npm locally instead of through Docker.

**Lesson:** SHORTCUTS CREATE CHAOS. ALWAYS USE DOCKER.

### 🛑 BEFORE EVERY TERMINAL COMMAND

**STOP AND ASK YOURSELF:**

1. Does this command start with `npm`, `npx`, `node`, or `vitest`?
2. If YES → Is it wrapped in `docker exec storybookds-storybook-dev-1`?
3. If NO → **REWRITE THE COMMAND BEFORE RUNNING**

### 🔍 HOW TO VERIFY YOU'RE IN DOCKER

```powershell
# Check what's running
docker ps

# Should show:
# CONTAINER ID   IMAGE                       STATUS         PORTS                    NAMES
# xxxxxxxxxxxx   storybookds-storybook-dev   Up X minutes   0.0.0.0:6006->6006/tcp   storybookds-storybook-dev-1
```

If Storybook is accessible but `docker ps` shows no container → **SOMETHING IS WRONG. KILL ALL NODE PROCESSES IMMEDIATELY.**

### 🧹 EMERGENCY CLEANUP (If Local Processes Escape)

```powershell
# Kill all local Node processes
Get-Process -Name "node" | Stop-Process -Force

# Verify port 6006 is free
netstat -ano | findstr :6006

# If something shows, kill that PID
taskkill /PID <number> /F

# Restart Docker container
docker-compose --profile dev down
docker-compose --profile dev up -d
```

---

## 1. Unified Design Language (The "Canonical" Look)

Every documentation story (e.g., Icons, Size Tokens, Typography) should follow this structure:

### A. The "Blue Info Box" (Header)
Place this at the very top of the main story (usually the first one in the section).
- **Style**: A dark blue gradient background (`var(--gov-primary-900)` to `800`).
- **Content**:
    - `<h1>` Title (white text).
    - Paragraph description (light blue text, `var(--gov-primary-200)`).
    - Link to official docs (secondary color, `var(--gov-secondary-400)`).
- **CSS Class**: `.size-info-box` or `.bootstrap-icons-info` (standardize to `.doc-info-box` in future components).

### B. Typography & Sectioning
- **Main Headlines**: Use `<h1>` for every major section headline. 
- **Color**: Headlines must use `var(--gov-neutral-900)`.
- **Spacing**: Use standard tokens (e.g., `marginBottom: 'var(--gov-space-m)'`).
- **Icons**: Remove decorative emojis from section headers for a cleaner, "official" look.

### C. Backgrounds & Mode
- **Strict Light Mode**: Default background must be light (`#ffffff`). 
- **Avoid Dark Mode**: Do not use dark backgrounds for documentation unless it's the specific "Blue Info Box" mentioned above.

## 2. Technical Best Practices & Safety

### A. The "Critical Indexer" Failure (CRITICAL)
**The Mistake**: Mismatched JSX tags (e.g., `<h1>` opening with `</h2>` closing) or unclosed `<section>` tags.
**The Consequence**: Storybook fails to generate the `index.json` file. This results in a completely blank or broken interface where **no pages can load**, often showing a generic "Error fetching `/index.json`".
**How to Avoid**:
- **Double-check replacements**: After any `search_replace` that involves changing tag names (like `h2` to `h1`), verify that both opening and closing tags were updated.
- **Incremental changes**: Avoid massive multi-line replacements that alter the document structure (nesting of `<section>` or `<div>`).
- **Immediate Verification**: If the Storybook UI stops responding or shows an index error, check `browser_console_messages` immediately. Look for `SB_PREVIEW_API_0006 (StoryIndexFetchError)`. It will specify the exact file and line number where the syntax error exists.

### B. Story Ordering & Sidebar Bugs
**The Mistake**: Trying to reorder the sidebar menu by changing the export order in `.stories.jsx` files.
**The Consequence**: This is unreliable and often ignored by Storybook's indexer, leading to confusing menu structures or "missing" stories that are actually just out of order.
**How to Avoid**:
- **Only use `storySort`**: Centralize all ordering logic in `.storybook/preview.js`. Do not waste cycles trying to fix ordering inside individual story files.
- **Standard order** for Token pages: 
    1. Introduction/Overview
    2. Primary Scale/Reference
    3. Usage Examples
    4. "Sandbox" or "Default" playground (always last).

### C. Component Reuse
- **Don't Hallucinate**: Never manually style HTML elements (like `<button>`) to look like the design system. 
- **Use Real Components**: Import and use the actual project components (e.g., `import { Button } from '../Button'`) in your usage examples. This ensures the documentation is a "living" reference.

## 3. Deployment & Environment Stability

### A. Broken Resource/Container Loop
**The Mistake**: Over-complicating `.storybook/manager.js` or `.storybook/preview.js` with complex decorators or themes that haven't been tested.
**The Consequence**: Storybook gets stuck in an infinite loading loop or fails to resolve internal modules (e.g., `@storybook/theming/create` vs `@storybook/theming`).
**How to Avoid**:
- **Keep configuration minimal**: Only add decorators if absolutely necessary.
- **Dependency check**: Ensure imports match the installed Storybook version (v8+ uses different paths for some addons).
- **Restarting the Environment**: If Storybook is unreachable (port 6006), it is often a Docker daemon or network issue. Suggest a container restart to the user rather than trying to fix the internal Docker network.

## 4. Current Design Tokens Reference

| Token Category | Canonical Story Path | Status |
| :--- | :--- | :--- |
| **Icons** | `Design Tokens/Icons` | Unified |
| **Size/Spacing** | `Design Tokens/Size` | Unified |
| **Typography** | `Design Tokens/Typography` | Unified |
| **Color Tokens** | `Design Tokens/Color Tokens` | Unified |

## 5. Testing Infrastructure (ALL COMMANDS VIA DOCKER)

### A. Unit Tests (Vitest)
```powershell
# ✅ CORRECT - Run inside Docker
docker exec storybookds-storybook-dev-1 npm run test -- --run

# ❌ WRONG - Never run locally
npm run test
```

- **Configuration**: `vite.config.js` contains the vitest configuration
- **Setup File**: `src/setupTests.js` imports `@testing-library/jest-dom`

### B. Storybook Browser Tests (Vitest + Playwright)
```powershell
# ✅ CORRECT - Run inside Docker (168 tests)
docker exec storybookds-storybook-dev-1 npx vitest --project=storybook --run

# ❌ WRONG - Never run locally
npx vitest --project=storybook --run
```

- **Configuration**: `vite.config.js` → `test.projects[0]`
- **Setup File**: `.storybook/vitest.setup.js`
- **Requires**: Ubuntu/Playwright Docker image (`mcr.microsoft.com/playwright:v1.57.0-noble`)

### C. CI/CD (GitHub Actions)
- **Workflow File**: `.github/workflows/ci.yml`
- **Jobs**:
  1. **Unit Tests**: Runs vitest on all `*.test.jsx` files
  2. **Storybook Tests**: Builds Storybook, serves it, runs test-runner
  3. **Build Check**: Verifies Storybook builds successfully

### D. Writing Component Tests
When creating new components, add tests following this pattern:
```jsx
// ComponentName.test.jsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />);
    expect(screen.getByRole('...')).toBeInTheDocument();
  });
  
  it('handles user interactions', () => {
    const handler = vi.fn();
    render(<ComponentName onClick={handler} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handler).toHaveBeenCalled();
  });
});
```

## 6. Docker Development Environment

### Container Details
| Property | Value |
|----------|-------|
| **Container Name** | `storybookds-storybook-dev-1` |
| **Base Image** | `mcr.microsoft.com/playwright:v1.57.0-noble` (Ubuntu) |
| **Port** | `6006` (Storybook) |
| **Profile** | `dev` |

### Essential Commands (MEMORIZE THESE)

```powershell
# Start the container
docker-compose --profile dev up -d

# Stop the container
docker-compose --profile dev down

# Rebuild container (after Dockerfile changes)
docker-compose --profile dev build --no-cache
docker-compose --profile dev up -d

# View logs
docker logs -f storybookds-storybook-dev-1

# Execute commands inside container
docker exec storybookds-storybook-dev-1 <command>

# Install packages (ALWAYS use --legacy-peer-deps)
docker exec storybookds-storybook-dev-1 npm install --save-dev <package> --legacy-peer-deps

# Run tests
docker exec storybookds-storybook-dev-1 npm run test -- --run
docker exec storybookds-storybook-dev-1 npx vitest --project=storybook --run
```

### Why Ubuntu/Playwright Image?
- **Alpine Linux** (previous): Lacks glibc → Playwright/Chromium cannot run → Tests fail
- **Ubuntu/Playwright** (current): Has all dependencies → 168 browser tests pass

### Dockerfile.dev Configuration
```dockerfile
FROM mcr.microsoft.com/playwright:v1.57.0-noble
# This image includes:
# - Node.js 20
# - Chromium, Firefox, WebKit browsers
# - All system dependencies for Playwright
```

### Volume Mounting
The `docker-compose.yml` mounts the local directory:
```yaml
volumes:
  - .:/app              # Code syncs to container
  - /app/node_modules   # node_modules stays in container
```

This means:
- ✅ Code changes reflect immediately
- ✅ `package.json` changes sync
- ⚠️ BUT you must run `npm install` INSIDE Docker for new packages

---

## 7. Quick Reference Card

### Starting Development
```powershell
cd "C:\Users\TIGO\Desktop\WORKSPACE\Storybook DS"
docker-compose --profile dev up -d
# Open http://localhost:6006
```

### Running Tests
```powershell
docker exec storybookds-storybook-dev-1 npm run test -- --run
docker exec storybookds-storybook-dev-1 npx vitest --project=storybook --run
```

### Installing a Package
```powershell
docker exec storybookds-storybook-dev-1 npm install --save-dev <package> --legacy-peer-deps
```

### Checking Container Status
```powershell
docker ps --filter "name=storybookds"
```

### Something Wrong? Full Reset
```powershell
docker-compose --profile dev down
docker-compose --profile dev build --no-cache
docker-compose --profile dev up -d
```

---
**Last Updated**: Jan 5, 2026
**Critical Rule Added**: DOCKER ONLY - No local npm/npx execution

