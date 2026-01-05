# Agent 01: NPM Packages Approach

> ❌ **RESULT: FAILED** (6/50 points)

## Approach

This agent attempted to build a GOV.cz form application using **only official npm packages**.

### Installed Packages

```bash
npm install @gov-design-system-ce/react @gov-design-system-ce/styles
```

| Package | Version | Purpose |
|---------|---------|---------|
| `@gov-design-system-ce/react` | ^3.4.0 | Official GOV.cz React components |
| `@gov-design-system-ce/styles` | ^4.2.7 | Official GOV.cz CSS styles |
| `i18next` | ^25.7.3 | Internationalization |
| `react-i18next` | ^16.5.1 | React i18n bindings |
| `jspdf` | ^4.0.0 | PDF export |
| `react-router-dom` | ^7.11.0 | Routing |

## What Went Wrong

The AI agent:
1. ✅ Successfully installed the packages
2. ❌ Failed to actually USE the imported components
3. ❌ Rendered only default HTML elements (plain inputs, native checkboxes)
4. ❌ No GOV.cz styling appeared despite having styles imported

### Root Cause

> **AI cannot properly use unfamiliar npm component libraries.**
> 
> Even with documentation available, the AI failed to understand the component APIs and how to integrate them correctly.

## Scores

| Criterion | Score | Notes |
|-----------|-------|-------|
| Visual Accuracy | 0/10 | No GOV.cz components rendered |
| Functionality | 2/10 | Default HTML only |
| Accessibility | 1/10 | No ARIA, no semantics |
| Code Quality | 2/10 | Backend-focused, no styling |
| Completeness | 1/10 | Missing almost everything |
| **TOTAL** | **6/50** | ❌ Non-viable approach |

## Running

```bash
npm install
docker-compose up -d
# → http://localhost:5175
```

## Lesson Learned

Don't rely on AI to use npm packages it hasn't seen before. Pre-build components in Storybook first.
