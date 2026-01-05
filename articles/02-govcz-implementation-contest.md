# GOV.cz Implementation Contest

**Purpose**: Compare different approaches to building a GOV.cz-compliant application  
**Date**: January 4, 2026  
**Status**: 🏁 Ready to Start

---

## 🎯 Objective

Build the **same mini-application** using three different approaches and compare:
- Development speed
- Visual accuracy
- Code quality
- Ease of implementation

---

## 📋 The Challenge

Build a simple GOV.cz-styled page with the following components:

### Required Components

| Component | Description | Acceptance Criteria |
|-----------|-------------|---------------------|
| **Header** | Page title with GOV.cz styling | Blue background, white text, proper typography |
| **Text Input** | Name field | Label, placeholder, GOV.cz styling |
| **Email Input** | Email field | Label, placeholder, validation styling |
| **Checkbox** | Terms agreement | Label, checkmark, GOV.cz colors |
| **Datepicker** | Birth date selection | Calendar popup or date input |
| **Button** | Submit button | Primary blue, hover state |
| **Card** | Display submitted data | GOV.cz card styling with border |

### Functional Requirements

1. Form inputs must be interactive
2. Checkbox must toggle
3. Button must have hover state
4. Card should display placeholder or submitted data
5. Page must be responsive (basic)

### Visual Requirements

1. Must use GOV.cz blue (#2362a2 or similar)
2. Must use proper typography (Roboto preferred)
3. Must have proper spacing
4. Must look professional and government-like

---

## 🏁 Starting Conditions

All approaches must start from the same base:

```bash
# Create fresh React + Vite project
npm create vite@latest gov-test-[approach-name] -- --template react
cd gov-test-[approach-name]
npm install

# Clear the default content
# Remove App.css content
# Remove default App.jsx content
```

### Starting File Structure

```
gov-test-[approach-name]/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx          # Start fresh here
│   ├── App.css          # Start empty
│   ├── main.jsx         # Keep default
│   └── index.css        # Can modify
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧪 Approaches to Test

### Round A: npm Packages Only

**Source of Truth**: `@gov-design-system-ce/react` npm package

**Allowed**:
- Install official GOV.cz npm packages
- Read official documentation
- Browse official Storybook for reference
- Use package components directly

**Not Allowed**:
- Copy CSS from Figma
- Build custom components from scratch
- Use our existing Storybook DS code

**Install Command**:
```bash
npm install @gov-design-system-ce/react @gov-design-system-ce/styles @gov-design-system-ce/icons @gov-design-system-ce/fonts
```

---

### Round B: Figma + Custom Components

**Source of Truth**: Figma design files

**Allowed**:
- Access Figma design files
- Use Figma MCP tools
- Build components from scratch based on Figma
- Create custom CSS

**Not Allowed**:
- Use any npm packages from GOV.cz
- Copy from official Storybook
- Use our existing Storybook DS code

**Figma Reference**:
- File: gov-materials-4-2-5
- URL: https://www.figma.com/design/y7eGsxlnRq29w7wuIjqJNq/gov-materials-4-2-5

---

### Round C: Storybook Copy Approach

**Source of Truth**: Official GOV.cz Storybook

**Allowed**:
- Browse official Storybook
- Copy code examples from Storybook
- Adapt examples to the challenge
- Use any packages shown in examples

**Not Allowed**:
- Use Figma directly
- Use our existing Storybook DS code

**Storybook URL**: https://designsystem.gov.cz/storybook/

---

## ⏱️ Time Tracking

Each round must track:

| Metric | How to Record |
|--------|---------------|
| **Start time** | Note when challenge begins |
| **End time** | Note when challenge is declared complete |
| **Total duration** | Calculate difference |
| **Blockers** | Document any issues that caused delays |

---

## 📊 Evaluation Criteria

| Criterion | Weight | Score 1-10 | Description |
|-----------|--------|------------|-------------|
| **Time to complete** | 25% | | Faster = higher score |
| **Visual accuracy** | 25% | | Matches GOV.cz = higher score |
| **Code quality** | 20% | | Clean, readable, maintainable |
| **Functionality** | 20% | | All features work correctly |
| **Developer experience** | 10% | | Easy to implement, good docs |

### Scoring Guide

| Score | Meaning |
|-------|---------|
| 10 | Perfect, exceeds expectations |
| 8-9 | Excellent, minor issues |
| 6-7 | Good, some issues |
| 4-5 | Acceptable, notable issues |
| 2-3 | Poor, major issues |
| 1 | Failed, doesn't work |

---

## 📁 Project Locations

```
C:\Users\TIGO\Desktop\WORKSPACE\
├── Storybook DS/                    # Existing project (DO NOT USE)
├── gov-test-npm/                    # Round A: npm packages
├── gov-test-figma/                  # Round B: Figma + custom
└── gov-test-storybook-copy/         # Round C: Storybook copy
```

---

## 📝 Required Documentation per Round

Each round must produce:

1. **Start declaration**: "Starting Round [X] at [time]"
2. **Step-by-step log**: What was done, in order
3. **Problems encountered**: Any issues and how resolved
4. **End declaration**: "Completed Round [X] at [time]"
5. **Screenshot**: Final result
6. **Self-assessment**: Score against criteria

---

## 🏆 Final Comparison

After all rounds complete, create comparison:

| Metric | Round A (npm) | Round B (Figma) | Round C (Storybook) |
|--------|---------------|-----------------|---------------------|
| Time | | | |
| Visual Score | | | |
| Code Score | | | |
| Function Score | | | |
| DX Score | | | |
| **TOTAL** | | | |

---

## ✅ Checklist Before Starting

- [ ] Fresh Cursor window/thread for each round
- [ ] No access to other round's code
- [ ] Timer ready
- [ ] This document open for reference
- [ ] Screenshot tool ready

---

## 🚀 Ready to Begin

Start each round with its specific prompt (see separate prompts document).

Good luck! 🎯

---

*Document created: January 4, 2026*


