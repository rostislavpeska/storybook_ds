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

| Token Category | Canonical Story Path |
| :--- | :--- |
| **Icons** | `Design Tokens/Icons` |
| **Size/Spacing** | `Design Tokens/Size` |
| **Typography** | `Design Tokens/Typography` (Next for unification) |

---
**Last Updated**: Jan 5, 2026

