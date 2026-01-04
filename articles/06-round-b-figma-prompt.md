# Round B Prompt - Figma + Custom Storybook Approach

**Version**: 1.0  
**Date**: January 4, 2026  
**Agent**: 02

---

## 📋 COPY THE ENTIRE PROMPT BELOW

---

# 🏁 GOV.cz Form Application Challenge

You are participating in a controlled experiment to test different approaches to building a GOV.cz-compliant web application.

## 🎯 Objective

Build a **fully functional, accessible, bilingual web application** for government form submissions.

---

## 🔧 YOUR APPROACH: Figma + Custom Storybook Components

**Source of Truth**: 
1. **Primary**: Custom Storybook with pre-built components (in this workspace)
2. **Secondary**: Figma design files (for any missing components)

---

## 📦 AVAILABLE COMPONENTS IN STORYBOOK

You have access to a **custom Storybook** in this workspace at `C:\Users\TIGO\Desktop\WORKSPACE\Storybook DS`.

### ✅ Ready-to-Use Components

| Component | Import Path | Features |
|-----------|-------------|----------|
| **Button** | `@/components/Button` | 6 colors, 4 types, 5 sizes, icons, disabled |
| **Input** | `@/components/Input` | Text, textarea, sizes, validation, char count |
| **Select** | `@/components/Select` | Dropdown, option groups, validation |
| **Checkbox** | `@/components/Checkbox` | States, indeterminate, validation |
| **Radio** | `@/components/Radio` | RadioGroup, horizontal/vertical layout |
| **Datepicker** | `@/components/Datepicker` | Calendar, CZ/EN localization, validation |
| **FileUpload** | `@/components/FileUpload` | Drag & drop, multiple files, validation |
| **Card** | `@/components/Card` | Vertical/horizontal, image, tags |

### 🛠️ How to Use Storybook Components

You have two options:

#### Option A: Use Storybook MCP Tool (Recommended)
Use the `mcp_storybook_get-ui-building-instructions` tool to get component usage instructions, then use `mcp_storybook_get-story-urls` to browse specific stories.

#### Option B: Copy Component Code
Copy the component files from `C:\Users\TIGO\Desktop\WORKSPACE\Storybook DS\src\components\` into your project.

**Example folder structure in Storybook DS:**
```
src/components/
├── Button/
│   ├── Button.jsx
│   ├── Button.css
│   └── index.js
├── Input/
│   ├── Input.jsx
│   ├── Input.css
│   └── index.js
├── Select/
│   ├── Select.jsx
│   ├── Select.css
│   └── index.js
... etc
```

**Copy the components you need** into your project's `src/components/` folder.

### 📐 Design Tokens

Copy the design tokens from `C:\Users\TIGO\Desktop\WORKSPACE\Storybook DS\src\index.css` - this contains all GOV.cz colors, typography, and spacing variables.

---

## ⚠️ CRITICAL RULES FOR MISSING COMPONENTS

### DO NOT invent or hallucinate components!

For elements **NOT in the Storybook**, use **plain semantic HTML**:

| Missing Element | Solution |
|-----------------|----------|
| **Header** | Plain `<header>` with flex layout |
| **Footer** | Plain `<footer>` with text |
| **Page Title** | Plain `<h1>`, `<h2>`, etc. |
| **Section Headers** | Plain `<h2>` or `<h3>` with styling |
| **Language Switcher** | Use the existing `Button` component |
| **Navigation** | Plain `<nav>` with links |
| **Form Layout** | Plain `<form>`, `<fieldset>`, `<section>` |
| **Text Content** | Plain `<p>`, `<span>`, etc. |

**Exception - Breadcrumbs**: You may build breadcrumbs from Figma using this reference:
- **Figma URL**: https://www.figma.com/design/y7eGsxlnRq29w7wuIjqJNq/gov-materials-4-2-5?node-id=1604-77480&m=dev
- Use the `mcp_figma-desktop_get_design_context` tool with `nodeId: "1604:77480"`

---

## 📱 Application Requirements

### 1. Application Structure

```
/                           → Homepage (Form List)
/form/rekvalifikace         → Working Form (Requalification Interest)
/form/povez                 → Placeholder Card (POVEZ Program)
/form/dotace-vzdelavani     → Placeholder Card (Education Subsidy)
```

### 2. Homepage - Form List

Display a list of 3 form cards using the **Card component from Storybook**:

| Form | Status | Description (CZ) |
|------|--------|------------------|
| **Zájem o zvolenou rekvalifikaci uchazeče o zaměstnání** | ✅ Active | Formulář pro zájemce o rekvalifikaci |
| **Žádost o zařazení do programu POVEZ** | 🔒 Coming Soon | Připravujeme |
| **Žádost o čerpání dotace na vzdělávání** | 🔒 Coming Soon | Připravujeme |

### 3. Main Form: "Zájem o zvolenou rekvalifikaci"

Implement ALL sections from the official form:

#### Section A: Žadatel (Applicant)

| Field | Component | Required |
|-------|-----------|----------|
| Typ žadatele | **Radio** (uchazeč / zájemce) | Yes |
| Jméno | **Input** | Yes |
| Příjmení | **Input** | Yes |
| Rodné číslo v ČR | **Input** (format: XXXXXX/XXXX) | Yes |
| Pohlaví | **Radio** (muž / žena) | Yes |
| Datum narození | **Datepicker** | Yes |
| E-mail | **Input** (type="email") | Yes |
| Telefon | **Input** (type="tel") | Yes |
| ID datové schránky | **Input** | No |

#### Section: Adresa (Address)

| Field | Component | Required |
|-------|-----------|----------|
| Obec | **Input** | Yes |
| Část obce | **Input** | No |
| PSČ | **Input** (5 digits) | Yes |
| Ulice | **Input** | Yes |
| Číslo popisné | **Input** | Yes |
| Číslo evidenční | **Input** | No |
| Číslo orientační | **Input** | No |

#### Section: Vzdělání a dovednosti

| Field | Component | Required |
|-------|-----------|----------|
| Popis | **Input** (multiline) | No |

#### Section: Absolvované rekvalifikace

| Field | Component | Required |
|-------|-----------|----------|
| Název rekvalifikace | **Input** | No |
| Absolvování v roce | **Input** (type="number") | No |
| + Přidat | **Button** (to add more entries) | - |

#### Section: Vykonávané profese a pracovní činnosti

| Field | Component | Required |
|-------|-----------|----------|
| Název profese | **Input** | No |
| Počet roků praxe | **Input** (type="number") | No |
| Počet měsíců praxe | **Input** (type="number") | No |
| + Přidat | **Button** (to add more entries) | - |

#### Section: Mám zájem o zvolenou rekvalifikaci

| Field | Component | Required |
|-------|-----------|----------|
| Název kurzu | **Input** | Yes |

#### Section: Rekvalifikační zařízení

| Field | Component | Required |
|-------|-----------|----------|
| Název | **Input** | Yes |
| Adresa | **Input** | Yes |

#### Section: Zdůvodnění požadované rekvalifikace

| Field | Component | Required |
|-------|-----------|----------|
| Zdůvodnění | **Input** (multiline) | Yes |

#### Section: Plánované uplatnění po rekvalifikaci

| Field | Component | Required |
|-------|-----------|----------|
| Od kdy | **Datepicker** | No |

#### Section: Předpokládaný zaměstnavatel

| Field | Component | Required |
|-------|-----------|----------|
| Zaměstnavatel | **Input** | No |

#### Section: Zahájení samostatné výdělečné činnosti

| Field | Component | Required |
|-------|-----------|----------|
| V jakém oboru | **Input** | No |

#### Section B: Poučení zájemce

| Field | Component | Required |
|-------|-----------|----------|
| Potvrzuji seznámení | **Checkbox** | Yes |
| Podepsáno v | **Input** | Yes |
| Datum podpisu | **Datepicker** | Yes |

#### Elektronické přílohy

| Field | Component | Required |
|-------|-----------|----------|
| Přílohy | **FileUpload** | No |

### 4. Form Actions

| Action | Component |
|--------|-----------|
| **Uložit rozpracovaný formulář** | **Button** (secondary) → Save to localStorage |
| **Vytisknout / Uložit (PDF)** | **Button** (primary) → Export PDF |
| **Kontrola formuláře** | **Button** → Validate fields |
| **Přejít k odeslání** | **Button** (primary) → Submit |

---

## 🌐 Internationalization (i18n)

| Language | Code | Default |
|----------|------|---------|
| Čeština (Czech) | `cs` | Yes |
| English | `en` | No |

- Language switcher in header (use **Button** component as toggle)
- All UI text translatable
- Form field labels in both languages

---

## ♿ Accessibility Requirements (WCAG 2.1 AA)

| Requirement | Implementation |
|-------------|----------------|
| Keyboard navigation | All elements focusable |
| Screen reader | Proper ARIA labels |
| Color contrast | Minimum 4.5:1 |
| Focus indicators | Visible focus states |
| Error identification | Error messages linked to fields |
| Form labels | All inputs labeled |
| Skip links | Skip to main content |
| Responsive | Mobile/tablet/desktop |

---

## 📄 PDF Export

- Export form as PDF
- Include all form data
- Downloadable file
- Filename: `rekvalifikace-formular-{date}.pdf`

---

## 🚀 PROJECT SETUP

**IMPORTANT**: Create your project in a **separate folder** next to Agent 01's project:

```bash
cd C:\Users\TIGO\Desktop\WORKSPACE
npm create vite@latest gov-test-figma --yes -- --template react
cd gov-test-figma
npm install
npm install react-router-dom
npm install jspdf  # for PDF export
npm install prop-types
```

**Your project location**: `C:\Users\TIGO\Desktop\WORKSPACE\gov-test-figma`

### Copy Components from Storybook

After project setup, copy the component files:

```bash
# Create components directory
mkdir src\components

# You need to copy these folders from Storybook DS:
# - Button
# - Input  
# - Select
# - Checkbox
# - Radio
# - Datepicker
# - FileUpload
# - Card

# Also copy the design tokens (index.css) for CSS variables
```

---

## 📊 Deliverables

1. **Working application** via `npm run dev`
2. **Screenshot** of homepage
3. **Screenshot** of form page
4. **Screenshot** of PDF export
5. **Self-assessment** scores (1-10):
   - Visual accuracy
   - Functionality
   - Accessibility
   - Code quality
   - Completeness

---

## ⏱️ Time Tracking

| Milestone | Time |
|-----------|------|
| Start time | [Record] |
| End time | [Record] |
| Total duration | [Calculate] |

---

## ✅ Success Criteria

### Application Structure
- [ ] Homepage displays 3 Cards
- [ ] Active form navigates
- [ ] Placeholder forms show "coming soon"

### Form Implementation  
- [ ] All sections present
- [ ] Correct components used
- [ ] Required field validation
- [ ] Dynamic "add more" works
- [ ] Form data persists

### Features
- [ ] Language switcher (CZ/EN)
- [ ] PDF export works
- [ ] Save draft works
- [ ] Form validation

### Accessibility
- [ ] Keyboard navigation
- [ ] Screen reader compatible
- [ ] Color contrast WCAG AA
- [ ] Focus states visible

### Design
- [ ] Uses Storybook components correctly
- [ ] GOV.cz visual style
- [ ] Responsive design

---

## 🚫 Constraints

**You MUST:**
- Use components from the Storybook DS project
- Use plain HTML for missing structural elements
- NOT invent or hallucinate new component APIs

**You MUST NOT:**
- Access Agent 01's code
- Use official GOV.cz npm packages
- Copy from official Storybook

---

## 🏁 BEGIN NOW

1. Declare **start time**
2. Create fresh project in `gov-test-figma`
3. Copy components from Storybook DS
4. Build the application
5. Document problems encountered
6. Declare **end time**
7. Provide screenshots and self-assessment

Good luck! 🎯

---

# 📋 END OF ROUND B PROMPT
