# Figma to Storybook: Building a Synthetic Design System with AI

**Project**: GOV.cz Design System → Storybook Component Library  
**Date Started**: January 2026  
**Status**: ✅ Contest Complete - Figma Approach Validated  
**Last Updated**: January 4, 2026

---

## Table of Contents

0. [About the Experiment](#0-about-the-experiment)
1. [Synthetic Component Library from Figma](#1-synthetic-component-library-from-figma)
2. [Contest: Robot 01 vs Robot 02](#2-contest-robot-01-vs-robot-02)
3. [Inventing Own Synthetic Components](#3-inventing-own-synthetic-components)
4. [Reimporting Synthetic Components Back to Figma](#4-reimporting-synthetic-components-back-to-figma) *(TBD)*

---

# 0. About the Experiment

## 🎯 Goal

Test whether AI can effectively build production-quality UI components from Figma designs and use them to create real applications.

## 🧪 Hypothesis

> "AI can successfully translate Figma designs into reusable React components, and these components can be used by AI to build complete applications."

## 📋 Experiment Design

We designed a controlled experiment with multiple approaches:

| Approach | Source of Truth | Hypothesis |
|----------|-----------------|------------|
| **npm Packages** | Official `@gov-design-system-ce/react` | AI can use npm packages directly |
| **Figma + Custom** | Figma designs → Custom Storybook | AI can build and then use custom components |
| ~~Storybook Copy~~ | ~~Official Storybook examples~~ | *(Skipped - too time-consuming)* |

## 🛠️ Technology Stack

| Tool | Purpose |
|------|---------|
| **Figma** | Source of design system (gov-materials-4-2-5) |
| **Cursor** | AI-powered IDE for code generation |
| **Storybook 10.x** | Component documentation & development |
| **Vite** | Build tool & dev server |
| **React 18** | Component framework |
| **Figma Desktop MCP** | Model Context Protocol for Figma integration |
| **Storybook MCP** | Model Context Protocol for Storybook |
| **Docker** | Containerized development environment |

---

# 1. Synthetic Component Library from Figma

## 🏗️ What We Built

We created a **synthetic component library** - components built from Figma designs that don't exist in the official GOV.cz npm packages (or were built independently for learning/testing purposes).

### Project Structure

```
Storybook DS/
├── .storybook/
│   ├── main.js              # Storybook config with MCP addon
│   ├── preview.js           # Global decorators, backgrounds, theme toggle
│   └── preview-head.html    # Bootstrap Icons CDN, light mode forcing
├── articles/                # Project documentation
├── results/                 # Contest results (Agent 01, Agent 02)
├── export/                  # Figma exports
│   └── color_variables.json # Full variable export from Figma
├── src/
│   ├── index.css            # Design tokens (GOV.cz light + dark)
│   └── components/
│       ├── Button/          # 6 colors, 4 types, 5 sizes
│       ├── Card/            # Vertical/horizontal, 2 image sizes
│       ├── Checkbox/        # 3 sizes, validation states
│       ├── Datepicker/      # Auto-format, calendar, localization
│       ├── FileUpload/      # Drag & drop, validation
│       ├── Input/           # Text + Textarea, character count
│       ├── Radio/           # RadioGroup, horizontal/vertical
│       ├── Select/          # Dropdown, option groups
│       ├── Icon/            # 50 built-in + Bootstrap Icons
│       ├── ColorTokens/     # Color token documentation
│       ├── TypographyTokens/# Typography documentation
│       └── SizeTokens/      # Spacing & sizing documentation
└── docker-compose.yml       # Container orchestration
```

### Components Built

| Component | Stories | Key Features |
|-----------|---------|--------------|
| **Button** | 7+ | 6 colors, 4 types, 5 sizes, icons, disabled states |
| **Card** | 15 | Vertical/horizontal layouts, image sizes, tags, clickable |
| **Checkbox** | 15 | 3 sizes, indeterminate, validation, best practices |
| **Datepicker** | 13 | Auto-format input, calendar popup, CZ/EN localization |
| **FileUpload** | 13 | Drag & drop, multiple files, size/type validation |
| **Input** | 11 | Text + Textarea, character count, validation |
| **Radio** | 12 | RadioGroup, horizontal/vertical, validation |
| **Select** | 10 | Dropdown, option groups, disabled options |
| **Icon** | 5+ | 50 built-in SVGs + Bootstrap Icons CDN |

### Design Tokens Extracted

**Total CSS Custom Properties Generated**: 200+

| Category | Light Mode | Dark Mode |
|----------|------------|-----------|
| Primitive Colors | 83 | - |
| Text Tokens | 12 | 12 |
| Background Tokens | 21 | 15 |
| Border Tokens | 11 | 5 |
| Icon Tokens | 10 | 9 |
| Button Tokens | 29 | 24 |
| Spacing Tokens | 18 | - |
| Component Tokens | 10 | 9 |

### Figma Integration Process

1. **Token Extraction**: Used Figma plugin to export `color_variables.json` (2347 lines)
2. **CSS Conversion**: Transformed tokens to CSS custom properties in `src/index.css`
3. **Component Design**: Used Figma MCP to get design context from specific nodes
4. **Implementation**: Built React components with PropTypes and CSS
5. **Documentation**: Created comprehensive Storybook stories

### Key Learnings from Phase 1

| Learning | Details |
|----------|---------|
| **Figma MCP Requirements** | Desktop app + Dev Mode + layer selection required |
| **Variables vs REST API** | REST API requires Enterprise; plugin export works |
| **Anti-Hallucination** | AI must never fabricate data when sources unavailable |
| **Export Format** | Figma exports need transformation for production use |

---

# 2. Contest: Robot 01 vs Robot 02

## 🏁 The Challenge

Build a **complete GOV.cz form application** with:

- Homepage with 3 form cards
- Working form: "Zájem o zvolenou rekvalifikaci uchazeče o zaměstnání" (12+ sections)
- Czech + English language support
- PDF export functionality
- WCAG 2.1 AA accessibility
- Fully responsive design

### Form Requirements

| Section | Fields |
|---------|--------|
| A. Žadatel (Applicant) | 9 fields (name, ID, contact, etc.) |
| Adresa (Address) | 7 fields |
| Vzdělání a dovednosti | 1 textarea |
| Absolvované rekvalifikace | Dynamic add/remove |
| Vykonávané profese | Dynamic add/remove |
| Rekvalifikace zájem | 1 field |
| Rekvalifikační zařízení | 2 fields |
| Zdůvodnění | 1 textarea |
| Plánované uplatnění | 1 datepicker |
| Zaměstnavatel | 1 field |
| Samostatná činnost | 1 field |
| B. Poučení | 3 fields (checkbox, text, date) |
| Elektronické přílohy | File upload |

---

## 🤖 Agent 01: npm Packages Approach

**Approach**: Use official `@gov-design-system-ce/react` npm package only

**Packages Installed**:
```bash
npm install @gov-design-system-ce/react @gov-design-system-ce/styles @gov-design-system-ce/icons @gov-design-system-ce/fonts
```

### Result: ❌ SYSTEMIC FAILURE

| Criterion | Score (1-10) | Notes |
|-----------|--------------|-------|
| Visual Accuracy | **0** | NO components rendered |
| Functionality | 2 | Default HTML only |
| Accessibility | 1 | No ARIA, no semantics |
| Code Quality | 2 | Backend only |
| Completeness | 1 | Missing everything |
| **TOTAL** | **6/50** | ❌ NON-VIABLE |

### What Happened

**Attempt 1**:
- Bot installed packages correctly
- Bot DID NOT use any `GovButton`, `GovFormInput`, etc.
- Output was plain HTML with default browser styling
- Only colors and fonts partially applied

**Attempt 2 (Second Chance)**:
- Explicit instructions to use `<GovButton>`, `<GovFormInput>`, etc.
- Result was **even worse**
- Same fundamental problems persisted

### Verdict

> **AI fundamentally cannot use npm component libraries to produce proper frontend, even with explicit instructions and multiple attempts.**

The failures are **systemic**, not caused by:
- ❌ Bad prompts
- ❌ Insufficient instructions
- ❌ Lack of documentation

---

## 🤖 Agent 02: Figma + Custom Storybook Approach

**Approach**: Use pre-built components from our custom Storybook

**Instructions**:
1. Copy component files from `Storybook DS/src/components/`
2. Copy design tokens from `src/index.css`
3. Use components as documented in Storybook stories
4. For missing elements, use plain semantic HTML

### Result: ✅ SUCCESS

| Criterion | Score (1-10) | Notes |
|-----------|--------------|-------|
| Visual Accuracy | **8** | GOV.cz styling, proper components |
| Functionality | **9** | All features work |
| Accessibility | **8** | Proper structure, labels |
| Code Quality | **8** | Clean component usage |
| Completeness | **9** | All sections, file upload, dynamic fields |
| **TOTAL** | **42/50** | ✅ EXCELLENT |

### What Worked

| Feature | Status |
|---------|--------|
| Homepage with 3 Cards | ✅ Proper card design with icons, badges |
| Active vs Coming Soon distinction | ✅ Blue active, gray disabled |
| Header with language switcher | ✅ Present |
| Footer with links | ✅ Present |
| Breadcrumb navigation | ✅ Present |
| All 12+ form sections | ✅ Complete |
| Input components | ✅ Styled correctly |
| Radio buttons | ✅ Proper design |
| Datepickers | ✅ Calendar component |
| Checkboxes | ✅ Custom checkmarks |
| File upload | ✅ Drag & drop with styling |
| Dynamic "Add Another" | ✅ Working |
| Section cards | ✅ Clean layout |

---

## 📊 Final Comparison

| Metric | Agent 01 (npm) | Agent 02 (Figma) |
|--------|----------------|------------------|
| **Components Used** | 0% | ~95% |
| **Visual Match** | 10% | 85% |
| **Functionality** | 20% | 90% |
| **Completeness** | 30% | 95% |
| **Overall Score** | 6/50 | 42/50 |
| **Verdict** | ❌ FAIL | ✅ SUCCESS |

### Visual Comparison

| Element | npm (Agent 01) | Figma (Agent 02) |
|---------|----------------|------------------|
| Cards | ❌ Missing | ✅ Proper |
| Buttons | ❌ Not used | ✅ Styled |
| Inputs | ❌ Plain HTML | ✅ GOV.cz styled |
| Radio buttons | ❌ Plain | ✅ Custom |
| Datepickers | ❌ Native | ✅ Calendar |
| File Upload | ❌ Missing | ✅ Drag & drop |
| Checkboxes | ❌ Plain | ✅ Styled |
| Layout | ❌ Messy | ✅ Clean |
| Header | ❌ Missing | ✅ Present |
| Footer | ❌ Missing | ✅ Present |

---

## 🎯 Key Insight

> **AI excels at USING pre-built components but FAILS at importing npm packages.**

### Recommended Workflow

```
1. BUILD components in Storybook first (human or AI-assisted)
2. COPY component files to new project
3. LET AI wire up the components
4. AI handles: routing, state, form logic, i18n, PDF export
```

### What to Avoid

```
❌ Expecting AI to use npm packages directly
❌ Relying on AI to understand package documentation
❌ Giving AI vague styling instructions
```

---

# 3. Inventing Own Synthetic Components

## 🎨 What Are Synthetic Components?

**Synthetic components** are UI components that:
1. Don't exist in the official design system (or are built independently)
2. Are inspired by real-world examples but abstracted for reuse
3. Fill gaps in the component library
4. Are designed to be AI-friendly (clear props, good defaults)

## 🏗️ Components Created

We created **3 synthetic structural components** inspired by [portal.gov.cz](https://portal.gov.cz/sluzby-verejne-spravy/?typ=FO):

### 1. Header

A dark blue government-style header with:

| Feature | Description |
|---------|-------------|
| **Logo** | Customizable (default: GOV.cz house icon) |
| **Navigation** | Links with active state |
| **Language Switcher** | Integrated component |
| **Actions** | Login/user buttons |
| **Skip Link** | Accessibility: skip to main content |
| **Accent Bar** | Blue gradient line under header |
| **Sticky** | Optional fixed position |

**Props**:
```jsx
<Header
  logo={{ text: 'GOV.cz', href: '/' }}
  navigation={[
    { label: 'Služby', href: '/sluzby', active: true },
    { label: 'Kontakt', href: '/kontakt' }
  ]}
  currentLanguage="cs"
  onLanguageChange={(code) => setLang(code)}
  actions={[
    { label: 'Přihlásit', href: '/login', icon: <UserIcon /> }
  ]}
  sticky={false}
/>
```

### 2. LanguageSwitcher

A flexible language toggle with three variants:

| Variant | Description | Best For |
|---------|-------------|----------|
| **toggle** | Single button that cycles | 2 languages |
| **buttons** | All options visible | 2-3 languages |
| **dropdown** | Menu on click | 3+ languages |

**Features**:
- Globe icon (optional)
- Full or short labels (EN vs English)
- Light/dark theme variants
- Multi-language support (not limited to CZ/EN)

**Props**:
```jsx
<LanguageSwitcher
  variant="toggle"
  languages={[
    { code: 'cs', label: 'Čeština', shortLabel: 'CZ' },
    { code: 'en', label: 'English', shortLabel: 'EN' }
  ]}
  currentLanguage="cs"
  onChange={(code) => setLang(code)}
  showIcon={true}
  className="gov-lang-switcher--light"
/>
```

### 3. Footer

A comprehensive footer with configurable sections:

| Section | Description |
|---------|-------------|
| **Columns** | Link groups with titles |
| **Contact** | Email and phone |
| **Social Links** | Social media icons |
| **Logos** | Partner/sponsor logos |
| **Bottom Bar** | Copyright + legal links |
| **Back to Top** | Smooth scroll button |

**Props**:
```jsx
<Footer
  columns={[
    {
      title: 'Informace',
      links: [
        { label: 'O nás', href: '/o-nas' },
        { label: 'Kontakt', href: '/kontakt' }
      ]
    }
  ]}
  contact={{
    title: 'Napište nám',
    email: 'info@gov.cz'
  }}
  copyright="© 2026 GOV.cz"
  bottomLinks={[
    { label: 'Ochrana soukromí', href: '/privacy' }
  ]}
  version="1.0.0"
/>
```

## 📋 Design Principles

### 1. Abstraction Over Hardcoding

**Bad** (hardcoded):
```jsx
<header>
  <a href="/">Portal.gov.cz</a>
  <nav>
    <a href="/sluzby">Služby</a>
  </nav>
</header>
```

**Good** (abstracted):
```jsx
<Header
  logo={{ text: 'Any App', href: '/' }}
  navigation={props.navigation}
/>
```

### 2. WCAG 2.1 AA Compliance

All synthetic components include:

| Feature | Implementation |
|---------|----------------|
| Skip link | `<a href="#main-content">Přeskočit...</a>` |
| Landmarks | `role="banner"`, `role="contentinfo"` |
| ARIA labels | `aria-label`, `aria-expanded`, etc. |
| Focus states | Visible outline on focus |
| Keyboard nav | Tab, Enter, Escape support |
| Color contrast | 4.5:1 minimum ratio |

### 3. AI-Friendly API

Components designed for AI consumption:

| Principle | Example |
|-----------|---------|
| **Clear props** | `showLanguageSwitcher={true}` not `options.lang.show` |
| **Good defaults** | Works with zero props: `<Header />` |
| **Flat structure** | Avoid deeply nested objects |
| **Explicit actions** | `onLanguageChange` not `onEvent` |

## 📦 Component Summary

| Component | Variants | Stories | WCAG |
|-----------|----------|---------|------|
| **Header** | Dark/Light, Sticky | 8 | ✅ AA |
| **LanguageSwitcher** | Toggle/Buttons/Dropdown | 10 | ✅ AA |
| **Footer** | Light/Dark | 10 | ✅ AA |

## 🔗 Integration with Agent 02

These components are now available for Agent 02 to use:

```bash
# Copy to new project
cp -r "Storybook DS/src/components/Header" my-project/src/components/
cp -r "Storybook DS/src/components/Footer" my-project/src/components/
cp -r "Storybook DS/src/components/LanguageSwitcher" my-project/src/components/
```

**Updated Component Inventory** (11 total):

| Category | Components |
|----------|------------|
| **Form Inputs** | Input, Select, Checkbox, Radio, Datepicker, FileUpload |
| **Actions** | Button |
| **Layout** | Card, Header, Footer |
| **Utilities** | LanguageSwitcher, Icon |

---

# 4. Reimporting Synthetic Components Back to Figma

*(TBD - Future section)*

## Planned Content

- Converting React components back to Figma designs
- Maintaining design-code synchronization
- Two-way workflow: Figma ↔ Code
- Tools and techniques for bidirectional updates

---

# Appendix A: Technical Details

## Figma MCP Setup

The Figma **Desktop** MCP is required for selection-based workflows:

**Prerequisites**:
- ✅ Figma Desktop app installed and running
- ✅ Design file open in the app
- ✅ Dev Mode enabled (`Shift + D`)
- ✅ Desktop MCP server enabled in Inspect Panel
- ✅ Node IDs specified in tool calls (from URL `?node-id=X-Y`)

**Available Tools**:

| Tool | Returns |
|------|---------|
| `get_design_context` | React + Tailwind code |
| `get_screenshot` | PNG image of node |
| `get_variable_defs` | Variables used in node |
| `get_metadata` | XML structure |

## Problems Encountered

### 1. Figma File Access
- **Problem**: "This figma file could not be accessed"
- **Solution**: User provided new link with proper permissions

### 2. Layer Selection Required
- **Problem**: "You need to select a layer first"
- **Solution**: Open Figma Desktop, enable Dev Mode, select layer

### 3. AI Hallucination Attempt
- **Problem**: AI tried to fabricate color values
- **Solution**: Implemented strict anti-hallucination rules

### 4. Typography Drift
- **Problem**: Implementation used wrong font (DM Sans vs Roboto)
- **Solution**: Documented for future alignment

## Storybook Configuration

### Light Mode Default

```javascript
// .storybook/preview.js
parameters: {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#1a1a1a' },
    ],
  },
},
```

### Force Light Mode

```html
<!-- .storybook/preview-head.html -->
<style>
  :root { color-scheme: light !important; }
  body, html, #storybook-root { background-color: #ffffff !important; }
</style>
```

---

# Appendix B: Official GOV.cz Discovery

During the experiment, we discovered official GOV.cz packages:

| Package | Version | Description |
|---------|---------|-------------|
| `@gov-design-system-ce/react` | 3.4.0 | React component wrappers |
| `@gov-design-system-ce/styles` | 4.2.7 | CSS tokens & styles |
| `@gov-design-system-ce/icons` | 0.2.3 | Icon library |
| `@gov-design-system-ce/fonts` | 0.0.2 | Roboto fonts |

**Key Finding**: Despite these packages existing, **AI cannot effectively use them**. The Figma + Custom Storybook approach remains the recommended workflow for AI-assisted development.

---

# Appendix C: Component API Reference

## Button

```jsx
<Button
  color="primary|secondary|neutral|error|warning|success"
  type="solid|outlined|base|link"
  size="xs|s|m|l|xl"
  disabled={boolean}
  iconLeft="icon-name"
  iconRight="icon-name"
  onClick={function}
/>
```

## Input

```jsx
<Input
  label="Field label"
  type="text|email|tel|number"
  multiline={boolean}
  rows={number}
  size="s|m|l"
  required={boolean}
  disabled={boolean}
  invalid={boolean}
  invalidMessage="Error text"
  helperText="Helper text"
  maxLength={number}
  showCharCount={boolean}
/>
```

## Select

```jsx
<Select
  label="Field label"
  options={[{ value, label, disabled? }]}
  placeholder="Select..."
  size="s|m|l"
  required={boolean}
  disabled={boolean}
  invalid={boolean}
  invalidMessage="Error text"
  onChange={function}
/>
```

## Checkbox

```jsx
<Checkbox
  label="Checkbox label"
  checked={boolean}
  defaultChecked={boolean}
  indeterminate={boolean}
  size="s|m|l"
  disabled={boolean}
  invalid={boolean}
  invalidMessage="Error text"
  required={boolean}
  onChange={function}
/>
```

## Radio / RadioGroup

```jsx
<RadioGroup
  label="Group label"
  name="radio-name"
  value={string}
  direction="vertical|horizontal"
  disabled={boolean}
  invalid={boolean}
  invalidMessage="Error text"
  required={boolean}
  onChange={function}
>
  <Radio label="Option 1" value="1" />
  <Radio label="Option 2" value="2" />
</RadioGroup>
```

## Datepicker

```jsx
<Datepicker
  label="Field label"
  value={Date}
  defaultValue={Date}
  locale="cs|en"
  minDate={Date}
  maxDate={Date}
  disabled={boolean}
  invalid={boolean}
  invalidMessage="Error text"
  required={boolean}
  onChange={function}
/>
```

## FileUpload

```jsx
<FileUpload
  label="Field label"
  accept=".pdf,.doc,.docx"
  multiple={boolean}
  maxFiles={number}
  maxSize={number} // bytes
  disabled={boolean}
  invalid={boolean}
  invalidMessage="Error text"
  required={boolean}
  buttonText="Upload button text"
  dragText="Drag hint text"
  onChange={function}
  onError={function}
/>
```

---

*Document created: January 3, 2026*  
*Last updated: January 4, 2026*  
*Phase 1: ✅ Complete (Design Tokens)*  
*Phase 2: ✅ Complete (Typography & Size Tokens)*  
*Phase 3: ✅ Complete (8 Components)*  
*Phase 4: ✅ Complete (Contest - Figma Approach Validated)*  
*Next: Sections 3 & 4 (Inventing Components, Figma Reimport)*
