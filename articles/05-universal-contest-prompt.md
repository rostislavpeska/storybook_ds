# Universal Contest Prompt - GOV.cz Form Application

**Version**: 1.0  
**Date**: January 4, 2026

---

## 📋 COPY THE PROMPT BELOW FOR EACH AGENT

---

# 🏁 GOV.cz Form Application Challenge

You are participating in a controlled experiment to test different approaches to building a GOV.cz-compliant web application.

## 🎯 Objective

Build a **fully functional, accessible, bilingual web application** for government form submissions.

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

Display a list of 3 form cards:

| Form | Status | Description (CZ) |
|------|--------|------------------|
| **Zájem o zvolenou rekvalifikaci uchazeče o zaměstnání** | ✅ Active | Formulář pro zájemce o rekvalifikaci |
| **Žádost o zařazení do programu POVEZ** | 🔒 Coming Soon | Připravujeme |
| **Žádost o čerpání dotace na vzdělávání** | 🔒 Coming Soon | Připravujeme |

- Cards must be clickable (active form navigates, placeholders show "coming soon" message)
- Must follow GOV.cz card design

### 3. Main Form: "Zájem o zvolenou rekvalifikaci"

Implement ALL sections from the official form:

#### Section A: Žadatel (Applicant)

| Field | Type | Required |
|-------|------|----------|
| Typ žadatele | Radio: uchazeč o zaměstnání / zájemce o zaměstnání | Yes |
| Jméno | Text input | Yes |
| Příjmení | Text input | Yes |
| Rodné číslo v ČR | Text input (format: XXXXXX/XXXX) | Yes |
| Pohlaví | Radio: muž / žena | Yes |
| Datum narození | Datepicker | Yes |
| E-mail | Email input | Yes |
| Telefon | Phone input | Yes |
| ID datové schránky | Text input | No |

#### Section: Adresa (Address)

| Field | Type | Required |
|-------|------|----------|
| Obec | Text input | Yes |
| Část obce | Text input | No |
| PSČ | Text input (5 digits) | Yes |
| Ulice | Text input | Yes |
| Číslo popisné | Text input | Yes |
| Číslo evidenční | Text input | No |
| Číslo orientační | Text input | No |

#### Section: Vzdělání a dovednosti

| Field | Type | Required |
|-------|------|----------|
| Popis | Textarea | No |

#### Section: Absolvované rekvalifikace

| Field | Type | Required |
|-------|------|----------|
| Název rekvalifikace | Text input | No |
| Absolvování v roce | Number input (year) | No |
| + Přidat | Button to add more entries | - |

#### Section: Vykonávané profese a pracovní činnosti

| Field | Type | Required |
|-------|------|----------|
| Název profese nebo pracovní činnosti | Text input | No |
| Počet roků praxe | Number input | No |
| Počet měsíců praxe | Number input | No |
| + Přidat | Button to add more entries | - |

#### Section: Mám zájem o zvolenou rekvalifikaci

| Field | Type | Required |
|-------|------|----------|
| Název kurzu | Text input | Yes |

#### Section: Rekvalifikační zařízení

| Field | Type | Required |
|-------|------|----------|
| Název | Text input | Yes |
| Adresa | Text input | Yes |

#### Section: Zdůvodnění požadované rekvalifikace

| Field | Type | Required |
|-------|------|----------|
| Uveďte, jak rekvalifikace přispěje k Vašemu uplatnění na trhu práce | Textarea | Yes |

#### Section: Plánované uplatnění po rekvalifikaci

| Field | Type | Required |
|-------|------|----------|
| Od kdy | Datepicker | No |

#### Section: Předpokládaný zaměstnavatel

| Field | Type | Required |
|-------|------|----------|
| Zaměstnavatel | Text input | No |

#### Section: Zahájení samostatné výdělečné činnosti

| Field | Type | Required |
|-------|------|----------|
| V jakém oboru | Text input | No |

#### Section B: Poučení zájemce o zvolenou rekvalifikaci

| Field | Type | Required |
|-------|------|----------|
| Potvrzuji, že jsem se seznámil(a) s poučením | Checkbox | Yes |
| Podepsáno v | Text input | Yes |
| Datum podpisu | Datepicker | Yes |

### 4. Form Actions

| Action | Functionality |
|--------|---------------|
| **Uložit rozpracovaný formulář** | Save to localStorage |
| **Vytisknout / Uložit (PDF)** | Export form as downloadable PDF |
| **Kontrola formuláře** | Validate all required fields |
| **Přejít k odeslání** | Show submission confirmation |

---

## 🌐 Internationalization (i18n)

The application must support:

| Language | Code | Default |
|----------|------|---------|
| Čeština (Czech) | `cs` | Yes |
| English | `en` | No |

- Language switcher in header
- All UI text must be translatable
- Form field labels in both languages
- Error messages in both languages

---

## ♿ Accessibility Requirements (WCAG 2.1 AA)

| Requirement | Implementation |
|-------------|----------------|
| Keyboard navigation | All interactive elements focusable |
| Screen reader support | Proper ARIA labels |
| Color contrast | Minimum 4.5:1 ratio |
| Focus indicators | Visible focus states |
| Error identification | Clear error messages linked to fields |
| Form labels | All inputs have associated labels |
| Skip links | Skip to main content |
| Responsive | Works on all screen sizes |

---

## 📄 PDF Export

- Export completed form as PDF
- PDF must include all form data
- PDF must be downloadable
- Filename format: `rekvalifikace-formular-{date}.pdf`

---

## 🎨 Design Requirements

- Must follow GOV.cz design system
- Use GOV.cz colors (Primary blue: #2362a2)
- Use GOV.cz typography (Roboto)
- Responsive design (mobile, tablet, desktop)
- Professional government appearance

---

## 🚀 Starting Point

Create a fresh project in the designated workspace folder:

```bash
cd C:\Users\TIGO\Desktop\WORKSPACE
npm create vite@latest [PROJECT_NAME] --yes -- --template react
cd [PROJECT_NAME]
npm install
```

**Replace `[PROJECT_NAME]` with your assigned project name.**

---

## 📊 Deliverables

1. **Working application** accessible via `npm run dev`
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

You MUST record:

| Milestone | Time |
|-----------|------|
| Start time | [Record when you begin] |
| End time | [Record when complete] |
| Total duration | [Calculate] |

---

## ✅ Success Criteria Checklist

### Application Structure
- [ ] Homepage displays 3 form cards
- [ ] Active form is clickable and navigates
- [ ] Placeholder forms show "coming soon"
- [ ] Navigation between pages works

### Form Implementation
- [ ] All sections from original form present
- [ ] All field types correctly implemented
- [ ] Required field validation works
- [ ] Dynamic "add more" sections work
- [ ] Form data persists during session

### Features
- [ ] Language switcher works (CZ/EN)
- [ ] PDF export generates downloadable file
- [ ] Save draft to localStorage works
- [ ] Form validation with error messages

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast meets WCAG 2.1 AA
- [ ] Focus states visible
- [ ] Error messages accessible

### Design
- [ ] Matches GOV.cz visual style
- [ ] Responsive on mobile/tablet/desktop
- [ ] Professional appearance

---

## 🚫 Constraints

**You are NOT allowed to:**
- Access code from other contest participants
- Use the existing "Storybook DS" project code
- Copy from other agents' work

---

## 🏁 BEGIN NOW

1. Declare your **start time**
2. Create the fresh project
3. Build the application
4. Document any problems encountered
5. Declare your **end time**
6. Provide screenshots and self-assessment

Good luck! 🎯

---

# 📋 END OF UNIVERSAL PROMPT

---

## Agent-Specific Additions

When copying this prompt for each agent, add ONE of the following sections at the end:

### For Agent 01 (npm Packages Approach)

```markdown
## 🔧 YOUR APPROACH: npm Packages Only

**Source of Truth**: `@gov-design-system-ce/react` npm package

**You ARE allowed to:**
- Install official GOV.cz npm packages
- Browse official Storybook at designsystem.gov.cz/storybook/
- Use official documentation

**Install these packages:**
npm install @gov-design-system-ce/react @gov-design-system-ce/styles @gov-design-system-ce/icons @gov-design-system-ce/fonts

**Project name**: gov-test-npm
```

### For Agent 02 (Figma + Custom Approach)

```markdown
## 🔧 YOUR APPROACH: Figma + Custom Components

**Source of Truth**: Figma design files

**You ARE allowed to:**
- Access Figma design files
- Use Figma MCP tools
- Build components from scratch
- Create custom CSS based on Figma specs

**Figma Reference:**
- File: gov-materials-4-2-5
- URL: https://www.figma.com/design/y7eGsxlnRq29w7wuIjqJNq/gov-materials-4-2-5

**Project name**: gov-test-figma
```

### For Agent 03 (Storybook Copy Approach)

```markdown
## 🔧 YOUR APPROACH: Official Storybook Examples

**Source of Truth**: Official GOV.cz Storybook

**You ARE allowed to:**
- Browse official Storybook at designsystem.gov.cz/storybook/
- Copy code examples from Storybook
- Adapt examples to the challenge

**Storybook URL**: https://designsystem.gov.cz/storybook/

**Project name**: gov-test-storybook
```

