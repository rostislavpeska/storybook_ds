# AI Agent Guidelines: Unifying the GOV.cz Storybook

This document serves as the authoritative guide for AI agents working on the "Storybook DS" project. Our goal is a unified, professional, and accessible documentation system for the GOV.cz Design System components.

---

## ⛔ CRITICAL RULE: DOCKER ONLY - NO LOCAL SHORTCUTS

**EVERYTHING MUST RUN INSIDE DOCKER. NO EXCEPTIONS.**

### Forbidden Actions
- ❌ `npm run storybook` (local)
- ❌ `npx storybook dev` (local)
- ❌ `npm install` (local)
- ❌ `npx vitest` (local)
- ❌ ANY npm/npx command run directly on the host

### Required Actions
- ✅ `docker exec <container> npm install ...`
- ✅ `docker exec <container> npm run storybook`
- ✅ `docker-compose --profile dev up`
- ✅ ALL commands must go through Docker

### Why This Matters
1. Local processes pollute the host system
2. Creates confusion about what's running where
3. Breaks reproducibility
4. Causes port conflicts and zombie processes

### Before ANY npm/npx Command
ASK YOURSELF: "Am I running this inside Docker?"
If NO → STOP. Rewrite the command with `docker exec`.

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

## 5. Testing Infrastructure

### A. Unit Tests (Vitest)
- **Command**: `npm run test` (or `npm run test -- --run` for single run)
- **UI Mode**: `npm run test:ui` (opens interactive test browser)
- **Coverage**: `npm run test:coverage`
- **Configuration**: `vite.config.js` contains the vitest configuration
- **Setup File**: `src/setupTests.js` imports `@testing-library/jest-dom`

### B. Storybook Tests (test-runner)
- **Command**: `npm run test-storybook` (requires Storybook to be running)
- **Configuration**: `.storybook/test-runner.js`
- **Purpose**: Validates that all stories render without errors

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

### Container Management
- **Start**: `docker start storybookds-storybook-dev-1`
- **Stop**: `docker stop storybookds-storybook-dev-1`
- **Logs**: `docker logs storybookds-storybook-dev-1`
- **Exec**: `docker exec storybookds-storybook-dev-1 <command>`

### Installing Packages
Always install packages **inside the container** to maintain consistency:
```bash
docker exec storybookds-storybook-dev-1 npm install --save-dev <package> --legacy-peer-deps
```

---
**Last Updated**: Jan 5, 2026

