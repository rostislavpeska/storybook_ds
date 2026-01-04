# GOV.cz Implementation Contest - Scoreboard

**Moderator**: Claude (This Thread)  
**Status**: ✅ CONTEST COMPLETE  
**Date**: January 4, 2026  
**Challenge Version**: 2.0 (Full Form Application)

---

## 📋 Challenge Summary

Build a **GOV.cz Form Application** with:
- Homepage with 3 form cards
- Working form: "Zájem o zvolenou rekvalifikaci uchazeče o zaměstnání"
- 2 placeholder forms (POVEZ, Dotace na vzdělávání)
- Czech + English language support
- PDF export
- WCAG 2.1 AA accessibility
- Fully responsive

**Full specification**: See `articles/05-universal-contest-prompt.md`

---

## 🏁 Contest Progress

| Round | Approach | Status | Result |
|-------|----------|--------|--------|
| **A** | npm Packages | ❌ FAILED | Systemic failure - AI cannot use npm packages |
| **B** | Figma + Custom Storybook | ✅ SUCCESS | 42/50 - Excellent result |
| ~~C~~ | ~~Storybook Copy~~ | ⏭️ SKIPPED | Too time-consuming |

**Contest reduced to 2 approaches** - Storybook copy approach skipped due to time constraints.

---

## 📊 Final Scores

### Round A: npm Packages ❌ SYSTEMIC FAILURE

| Criterion | Score (1-10) | Notes |
|-----------|--------------|-------|
| Visual Accuracy | 0 | NO components rendered |
| Functionality | 2 | Default HTML only |
| Accessibility | 1 | No ARIA, no semantics |
| Code Quality | 2 | Backend only |
| Completeness | 1 | Missing everything |
| **TOTAL** | **6/50** | ❌ NON-VIABLE |

**Attempt 1**: Backend + default browser components. Packages installed but NEVER used.  
**Attempt 2**: Even WORSE. Same problems despite explicit instructions.

### Round B: Figma + Custom Storybook ✅ SUCCESS

| Criterion | Score (1-10) | Notes |
|-----------|--------------|-------|
| Visual Accuracy | 8 | GOV.cz styling, proper components |
| Functionality | 9 | All features work |
| Accessibility | 8 | Proper structure, labels |
| Code Quality | 8 | Clean component usage |
| Completeness | 9 | All sections, file upload, dynamic fields |
| **TOTAL** | **42/50** | ✅ EXCELLENT |

**Key achievements:**
- ✅ All Storybook components properly used
- ✅ Complete form with all 12+ sections
- ✅ File upload with drag & drop
- ✅ Dynamic "Add Another" fields
- ✅ Header with language switcher
- ✅ Footer with links
- ✅ Card-based homepage
- ✅ Breadcrumb navigation

---

## 🏆 Final Rankings

| Rank | Approach | Score | Verdict |
|------|----------|-------|---------|
| 🥇 | **Figma + Custom Storybook** | **42/50** | ✅ RECOMMENDED |
| 🥈 | npm Packages Only | 6/50 | ❌ NOT VIABLE |
| - | Storybook Copy | SKIPPED | - |

---

## 📈 Key Findings

### What Works ✅

1. **Pre-built custom components** - AI can effectively USE components that exist in the workspace
2. **Figma as design reference** - Works well when components are already built
3. **Explicit component mapping** - Telling AI exactly which component to use for each field
4. **Copy-paste approach** - Copying existing component files into new project

### What Doesn't Work ❌

1. **npm packages only** - AI cannot properly use npm component libraries
2. **Reading documentation** - AI may read docs but fails to apply them correctly
3. **Implicit understanding** - AI doesn't "know" how to use unfamiliar packages
4. **Complex component APIs** - Official packages have APIs too complex for AI to infer

---

## 🎯 Recommendation for GOV.cz Development

### Use This Workflow:

```
1. BUILD components in Storybook first (human or AI-assisted)
2. COPY component files to new project
3. LET AI wire up the components
4. AI handles: routing, state, form logic, i18n, PDF export
```

### Avoid:

```
❌ Expecting AI to use npm packages directly
❌ Relying on AI to read and understand package documentation
❌ Giving AI vague instructions about styling
```

---

## 📊 Visual Comparison

| Element | npm (Agent 01) | Figma (Agent 02) |
|---------|----------------|------------------|
| Cards | ❌ | ✅ |
| Buttons | ❌ | ✅ |
| Inputs | ❌ (plain) | ✅ (styled) |
| Radio | ❌ (plain) | ✅ (styled) |
| Datepicker | ❌ (native) | ✅ (calendar) |
| File Upload | ❌ (missing) | ✅ (drag & drop) |
| Checkbox | ❌ (plain) | ✅ (styled) |
| Layout | ❌ (messy) | ✅ (clean) |
| Header | ❌ (missing) | ✅ (present) |
| Footer | ❌ (missing) | ✅ (present) |

---

## 🏁 Contest Conclusion

The **Figma + Custom Storybook** approach is the clear winner and the **recommended workflow** for AI-assisted GOV.cz development.

**Key insight**: AI excels at USING pre-built components but FAILS at importing and configuring npm packages.

---

*Contest completed: January 4, 2026*
