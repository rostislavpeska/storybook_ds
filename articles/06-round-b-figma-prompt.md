# Round B Prompt: Figma + Custom Components Approach

Copy everything below the line and paste into a **new Cursor chat thread**.

---

## 🏁 PROMPT START - COPY FROM HERE 🏁

# 🏁 GOV.cz Form Application Challenge

You are participating in a controlled experiment to test different approaches to building a GOV.cz-compliant web application.

## 🔧 YOUR APPROACH: Figma + Custom Components

**Source of Truth**: Figma design files

**You ARE allowed to:**
- Access Figma design file: https://www.figma.com/design/y7eGsxlnRq29w7wuIjqJNq/gov-materials-4-2-5
- Use Figma MCP tools (`get_design_context`, `get_screenshot`, etc.)
- Build components from scratch based on Figma specs
- Create custom CSS matching Figma designs
- Extract colors, typography, spacing from Figma

**You are NOT allowed to:**
- Use any npm packages from `@gov-design-system-ce/*`
- Copy from official Storybook
- Access existing "Storybook DS" project code

**Project name**: `gov-test-figma`

## 🎯 Objective

Build a **fully functional, accessible, bilingual web application** with:

1. **Homepage** - List of 3 form cards:
   - ✅ "Zájem o zvolenou rekvalifikaci uchazeče o zaměstnání" (working)
   - 🔒 "Žádost o zařazení do programu POVEZ" (placeholder)
   - 🔒 "Žádost o čerpání dotace na vzdělávání" (placeholder)

2. **Main Form** - Full "Rekvalifikace" form with ALL sections:
   - A. Žadatel (personal info: name, birth number, gender, DOB, email, phone)
   - Address (city, postal code, street, house numbers)
   - Vzdělání a dovednosti (education/skills textarea)
   - Absolvované rekvalifikace (dynamic add entries)
   - Vykonávané profese (dynamic add entries)
   - Zájem o rekvalifikaci (course name)
   - Rekvalifikační zařízení (facility name + address)
   - Zdůvodnění (justification textarea)
   - Plánované uplatnění (planned employment date)
   - Předpokládaný zaměstnavatel (expected employer)
   - Zahájení výdělečné činnosti (self-employment field)
   - B. Poučení (checkbox + signature fields)

3. **Features Required**:
   - 🌐 Czech + English language switcher
   - 📄 PDF export of completed form
   - ♿ WCAG 2.1 AA accessible
   - 📱 Fully responsive

## 🎨 Design Extraction from Figma

Use Figma to extract:

| Element | What to Extract |
|---------|-----------------|
| **Colors** | Primary blue, backgrounds, borders, text colors |
| **Typography** | Font family (Roboto), sizes, weights, line heights |
| **Spacing** | Margins, paddings, gaps |
| **Components** | Button styles, input styles, card styles |
| **States** | Hover, focus, disabled, error states |

### Key Figma Nodes to Reference:

- Buttons: Look for "Button" component
- Inputs: Look for "Input" or "Form" components
- Cards: Look for "Card" component
- Checkboxes: Look for "Checkbox" component

## 🚀 Starting Point

```bash
cd C:\Users\TIGO\Desktop\WORKSPACE
npm create vite@latest gov-test-figma --yes -- --template react
cd gov-test-figma
npm install
```

Open the project folder in Cursor:
```
File → Open Folder → C:\Users\TIGO\Desktop\WORKSPACE\gov-test-figma
```

## 📊 Deliverables

1. **Working application** at `npm run dev`
2. **Screenshot** of homepage with 3 cards
3. **Screenshot** of form page
4. **Screenshot** of PDF export (if implemented)
5. **Self-assessment** scores (1-10):
   - Visual accuracy (vs Figma)
   - Functionality  
   - Accessibility
   - Code quality
   - Completeness

## ⏱️ Time Tracking

Record:
| Milestone | Time |
|-----------|------|
| Start time | [Record when you begin] |
| End time | [Record when complete] |

## ✅ Success Criteria

### Visual Requirements (from Figma)
- [ ] GOV.cz blue header (#2362a2 or per Figma)
- [ ] Properly styled buttons (not browser default)
- [ ] Properly styled form inputs
- [ ] Properly styled checkboxes
- [ ] Card components with proper styling
- [ ] Matches Figma design closely

### Functional Requirements
- [ ] All form sections present
- [ ] Dynamic "add more" sections work
- [ ] Language switching works
- [ ] Form validation with error messages
- [ ] PDF export generates file

### Accessibility
- [ ] Keyboard navigation works
- [ ] Proper ARIA labels
- [ ] Color contrast meets WCAG 2.1 AA

## 🚫 Important

Unlike the previous approach, you must **build components from scratch** by:
1. Extracting design specs from Figma
2. Writing custom CSS
3. Creating React components that match the Figma design

Do NOT use placeholder/default HTML styling!

## 🏁 BEGIN NOW

1. Declare your **start time**
2. Create the fresh project
3. Use Figma MCP tools to extract design specs
4. Build components matching Figma
5. Document problems encountered
6. Declare **end time**
7. Provide screenshots

Good luck! 🎯

## 🏁 PROMPT END 🏁

