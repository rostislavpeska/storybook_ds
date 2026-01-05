# Agent 02: Figma + Custom Components Approach

> ✅ **RESULT: SUCCESS** (42/50 points)

## Approach

This agent built GOV.cz components **from scratch** using Figma designs as reference, then copied pre-built components from the Storybook Design System.

### Method

1. Referenced Figma design files (`gov-materials-4-2-5`)
2. Used pre-built components from this Storybook repository
3. Wired up routing, state, form logic, and i18n

### No GOV.cz npm packages used!

All components were custom-built:
- Button, Card, Checkbox, Datepicker, FileUpload
- Footer, Header, Icon, Input, LanguageSwitcher
- Radio, Select, Layout

## What Worked

The AI agent successfully:
- ✅ Used all Storybook components properly
- ✅ Built complete form with 12+ sections
- ✅ Implemented file upload with drag & drop
- ✅ Added dynamic "Add Another" fields
- ✅ Created header with language switcher
- ✅ Added footer with links
- ✅ Built card-based homepage
- ✅ Implemented breadcrumb navigation

## Scores

| Criterion | Score | Notes |
|-----------|-------|-------|
| Visual Accuracy | 8/10 | GOV.cz styling, proper components |
| Functionality | 9/10 | All features work |
| Accessibility | 8/10 | Proper structure, labels |
| Code Quality | 8/10 | Clean component usage |
| Completeness | 9/10 | All sections, dynamic fields |
| **TOTAL** | **42/50** | ✅ Excellent result |

## Running

```bash
npm install
docker-compose up -d
# → http://localhost:5177
```

## Key Insight

> **AI excels at USING pre-built components but fails at using unfamiliar npm packages.**

The recommended workflow:
1. BUILD components in Storybook first
2. COPY component files to new project
3. LET AI wire up the logic (routing, state, forms, i18n)
