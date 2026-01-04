# Round A Prompt: npm Packages Approach

Copy everything below the line and paste into a **new Cursor chat thread**.

---

## 🏁 PROMPT START - COPY FROM HERE 🏁

You are participating in a controlled experiment to test different approaches to building a GOV.cz-compliant application.

## Your Approach: npm Packages Only

**Source of Truth**: Official `@gov-design-system-ce/react` npm package

## The Challenge

Build a simple GOV.cz-styled page with these components:

1. **Header** - Page title "Registrační formulář" with GOV.cz styling
2. **Text Input** - Name field with label "Jméno a příjmení"
3. **Email Input** - Email field with label "E-mail"  
4. **Checkbox** - Terms agreement with label "Souhlasím s podmínkami"
5. **Datepicker** - Birth date with label "Datum narození"
6. **Button** - Submit button with text "Odeslat"
7. **Card** - Display area for submitted data

## Rules

**You ARE allowed to**:
- Install official GOV.cz npm packages
- Read official documentation at designsystem.gov.cz
- Browse official Storybook at designsystem.gov.cz/storybook/
- Use the browser tool to check Storybook examples
- Use package components directly

**You are NOT allowed to**:
- Build custom components from scratch
- Write custom CSS for components (only layout CSS is OK)
- Use Figma
- Access any existing "Storybook DS" project code

## Starting Point

Create a fresh project:

```bash
cd C:\Users\TIGO\Desktop\WORKSPACE
npm create vite@latest gov-test-npm -- --template react
cd gov-test-npm
npm install
```

Then install GOV.cz packages:

```bash
npm install @gov-design-system-ce/react @gov-design-system-ce/styles @gov-design-system-ce/icons @gov-design-system-ce/fonts
```

## Required Output

1. **Declare start time** when you begin
2. **Log each step** as you work
3. **Document any problems** you encounter
4. **Declare end time** when complete
5. **Take a screenshot** of the final result
6. **Self-assess** your result (1-10 for: Visual accuracy, Functionality, Code quality)

## Success Criteria

- [ ] Page displays with GOV.cz styling
- [ ] All 7 components are present
- [ ] Form inputs are interactive
- [ ] Checkbox toggles
- [ ] Button has hover state
- [ ] Looks professional and government-like

## Begin Now

Please start by:
1. Declaring your start time
2. Creating the fresh project
3. Installing the packages
4. Building the page using ONLY the npm package components

Good luck! 🎯

## 🏁 PROMPT END 🏁

