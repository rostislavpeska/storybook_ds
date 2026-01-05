# AI Agent Guidelines: Unifying the GOV.cz Storybook

This document serves as the authoritative guide for AI agents working on the "Storybook DS" project. Our goal is a unified, professional, and accessible documentation system for the GOV.cz Design System components.

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

### A. JSX Integrity (CRITICAL)
When performing `search_replace` on large `.stories.jsx` files:
- **Tag Matching**: Ensure every `<h1/2/3>` has a matching closing tag.
- **Section Wrappers**: Always check that `<section className="size-section">` or similar wrappers are properly closed.
- **Verification**: If you break the Storybook index (causing "Error fetching index.json"), check the browser console immediately. It will point to the exact line with the syntax error.

### B. Story Ordering
Do NOT rely on export order to organize the sidebar menu. 
- Use `.storybook/preview.js` -> `storySort` to programmatically define the order.
- Standard order for Token pages: 
    1. Introduction/Overview
    2. Primary Scale/Reference
    3. Usage Examples
    4. "Sandbox" or "Default" playground (always last).

### C. Component Reuse
- **Don't Hallucinate**: Never manually style HTML elements (like `<button>`) to look like the design system. 
- **Use Real Components**: Import and use the actual project components (e.g., `import { Button } from '../Button'`) in your usage examples. This ensures the documentation is a "living" reference.

## 3. Tool-Specific Knowledge

### A. Browser Tool
- If `browser_navigate` fails with `getURL` errors, it usually means the Storybook dev server is restarting or the build is broken.
- Use `browser_console_messages` to diagnose "blank page" or "loading error" bugs.

### B. Docker & Environment
- Storybook runs on `http://localhost:6006`.
- If the port is unreachable, the user may need to restart the Docker container manually. Do not attempt to fix the Docker daemon yourself.

## 4. Current Design Tokens Reference

| Token Category | Canonical Story Path |
| :--- | :--- |
| **Icons** | `Design Tokens/Icons` |
| **Size/Spacing** | `Design Tokens/Size` |
| **Typography** | `Design Tokens/Typography` (Next for unification) |

---
**Last Updated**: Jan 5, 2026

