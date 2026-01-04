# Figma to Storybook: Building a Design System with AI

**Project**: GOV.cz Design System → Storybook Component Library  
**Date Started**: January 2026  
**Status**: ✅ Phase 3 In Progress - Components Implementation  
**Last Updated**: January 3, 2026

> **Latest**: Card component implemented from Figma design with vertical/horizontal layouts, image sizes, and interactive states. See [Card Component Implementation](#-card-component-implementation) section.

---

## 🎯 Goal

Create a Storybook component library from the **designsystem.gov.cz** Figma files using AI-assisted development tools.

---

## 🛠️ Technology Stack

| Tool | Purpose |
|------|---------|
| **Figma** | Source of design system (gov-materials-4-2-5) |
| **Cursor** | AI-powered IDE for code generation |
| **Storybook 10.x** | Component documentation & development |
| **Vite** | Build tool & dev server |
| **React 18** | Component framework |
| **Figma Desktop MCP** | Model Context Protocol (requires Desktop app + Dev Mode) |
| **Storybook MCP** | Model Context Protocol integration for Storybook |

---

## 📁 Project Structure

```
Storybook DS/
├── .storybook/
│   ├── main.js          # Storybook config with MCP addon
│   └── preview.js       # Global decorators & styles
├── articles/            # Project documentation
│   └── 01-figma-to-storybook-journey.md
├── export/              # Figma exports
│   └── color_variables.json  # Full variable export from Figma
├── src/
│   ├── index.css        # Design tokens (GOV + Ember Blaze themes)
│   └── components/
│       ├── Button/      # Button component with variants
│       ├── Card/        # Card component with variants
│       ├── ColorTokens/ # Color token documentation (19 stories!)
│       └── TypographyTokens/ # Typography documentation (5 stories)
├── docker-compose.yml   # Container orchestration
├── Dockerfile           # Production build
└── Dockerfile.dev       # Development build
```

---

## ✅ What We Accomplished

### 1. Project Setup & Configuration

- Initialized React + Vite project
- Configured Storybook 10 with React-Vite framework
- Set up Docker for development and production builds
- Added ESLint configuration
- Installed `@storybook/addon-mcp` for AI integration

### 2. Figma Variables Export

Successfully extracted design tokens from Figma using plugin export:

**File**: `export/color_variables.json` (2347 lines)

**Contents**:
| Token Type | Count | Examples |
|------------|-------|----------|
| Primary Colors | 13 shades | `#f3f7fc` → `#010409` |
| Secondary Colors | 12 shades | `#fff9e9` → `#241b04` |
| Neutral Colors | 14 shades | `#ffffff` → `#000000` |
| Error Colors | 12 shades | `#fef2f2` → `#240303` |
| Warning Colors | 12 shades | `#fefbe8` → `#2a1b00` |
| Success Colors | 12 shades | `#f3faf3` → `#061b08` |
| Focus Colors | 2 shades | Blue focus ring |
| Visited Colors | 3 shades | Purple visited links |
| Semantic Tokens | 100+ | text, background, border, icon, button |
| Spacing Tokens | 18 | 0px → 120px scale |
| Height Tokens | 20+ | Component & line heights |
| Corner Radius | 11 | 0px → 40px scale |
| Font Sizes | 13 | 12px → 56px |
| Icon Sizes | 9 | 12px → 48px |

**Multi-Mode Support**:
- **Brand modes**: gov, mode 2 (green), mode 3 (green alt), mode 4 (teal)
- **Theme modes**: light, dark
- **Responsive modes**: desktop, tablet, mobile

### 3. CSS Custom Properties

Converted all Figma variables to CSS custom properties in `src/index.css`:

```css
/* GOV Primary Colors */
--gov-primary-50: #f3f7fc;
--gov-primary-500: #337fc4;
--gov-primary-600: #2362a2;
/* ... 10 more shades */

/* Semantic Tokens with Dark Mode Support */
--gov-text-primary: var(--gov-neutral-950);
--gov-bg-page: var(--gov-neutral-50);

[data-theme="dark"] {
  --gov-text-primary: var(--gov-neutral-0);
  --gov-bg-page: var(--gov-primary-1050);
}
```

**Token Categories**:
- Primitive colors (all 4 brand modes)
- Semantic text tokens (light + dark)
- Background tokens (light + dark)
- Border tokens
- Icon tokens
- Button tokens (solid + outlined states)
- Interactive tokens
- Status tokens
- Component-specific tokens (nav, footer)
- Spacing, height, radius, font-size, icon-size

### 4. ColorTokens Stories

Created comprehensive Storybook stories documenting all colors:

| Story | Description |
|-------|-------------|
| `GovPrimary` | 13 shades of blue |
| `GovSecondary` | 12 shades of yellow/gold |
| `GovNeutral` | 14 shades of grayscale |
| `GovError` | 12 shades of red |
| `GovWarning` | 12 shades of yellow |
| `GovSuccess` | 12 shades of green |
| `GovInteractive` | Focus & visited states |
| `GovMode2Green` | Alternative green brand |
| `GovMode3GreenAlt` | Alternative green variant |
| `GovMode4Teal` | Alternative teal brand |
| `GovSemanticStatus` | Status indicator colors |
| `GovTextColors` | Text color tokens |
| `GovBackgroundColors` | Background color tokens |
| `GovButtonSolid` | Button color states |
| `GovBorderColors` | Border color tokens |
| `GovNavigationColors` | Nav component colors |
| `GovFooterColors` | Footer component colors |
| `CompleteOverview` | All core scales together |
| `BrandModesComparison` | Compare 4 brand themes |

### 5. Size Tokens Component

Created `SizeTokens` component documenting spacing, component heights, and other size-related tokens.

### 6. Icon Component

Created `Icon` component with:
- 50 built-in SVG icons from the GOV.cz design system
- Integration with Bootstrap Icons CDN for extended icon library
- Size variants (xs, s, m, l, xl, 2xl, 3xl, 4xl, 5xl)
- Color customization support

### 7. Button Component

Created `Button` component with comprehensive variants:
- **Colors**: primary, secondary, neutral, error, warning, success
- **Types**: solid, outlined, base, link
- **Sizes**: xs, s, m, l, xl
- **States**: default, hover, active, focus, disabled
- Icon support (left/right icons)
- Full Storybook documentation with matrix display

### 8. Card Component Implementation

Created `Card` component based on Figma design (gov-materials-4-2-5, node: 5813:6885):

**Component Structure**:
```
src/components/Card/
├── index.js              # Barrel export
├── Card.jsx              # Main component with PropTypes
├── Card.css              # GOV.cz design token styling
└── Card.stories.jsx      # 15 comprehensive stories
```

**Features**:
| Feature | Description |
|---------|-------------|
| **Vertical Layout** | Image on top, content below (default) |
| **Horizontal Layout** | Image on left, content on right |
| **Image Sizes** | M (198px) and L (280px) variants |
| **Metadata Support** | Date with icon display |
| **Tag Support** | Category tags with yellow background |
| **Interactive States** | default, hover, active, loading |
| **Accessibility** | Semantic HTML (article, button, or anchor) |

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | - | Card heading |
| `description` | string | - | Card text content |
| `image` | string | - | Image URL |
| `imageAlt` | string | '' | Alt text for image |
| `date` | string | - | Date/metadata text |
| `dateIcon` | string | 'calendar' | Icon name for date |
| `direction` | 'vertical' \| 'horizontal' | 'vertical' | Layout direction |
| `imageSize` | 'm' \| 'l' | 'm' | Image size variant |
| `state` | 'default' \| 'hover' \| 'active' \| 'loading' | 'default' | Visual state |
| `showImage` | boolean | true | Whether to show image |
| `tags` | string[] | - | Category tags |
| `onClick` | function | - | Click handler (makes card a button) |
| `href` | string | - | Link URL (makes card an anchor) |

**Stories Created**:
| Story | Description |
|-------|-------------|
| Default | Standard vertical card with image and metadata |
| Vertical | Vertical layout showcase |
| Horizontal | Horizontal layout showcase |
| LargeImage | Large image size variant |
| WithoutImage | Card without image |
| WithoutDate | Card without date metadata |
| WithTags | Card with category tags |
| Clickable | Interactive button card |
| LinkCard | Interactive anchor card |
| States | All state variants displayed |
| DirectionComparison | Vertical vs horizontal side-by-side |
| ImageSizeComparison | M vs L image sizes |
| CardGrid | Grid layout example |
| HorizontalList | List layout example |
| AllVariants | Complete variant matrix |

**Design Tokens Used**:
- `--gov-text-primary-color` (#1e5086) - Title color
- `--gov-text-secondary` (#4f4f4f) - Description color
- `--gov-text-tertiary` (#6d6d6d) - Date/metadata color
- `--gov-bg-block-primary` - Card background
- `--gov-border-subtlest` - Card border
- `--gov-radius-s` - Border radius
- `--gov-space-*` - Spacing tokens

**Dark Mode Ready**: Styles prepared with `[data-theme="dark"]` selectors.

### 9. Checkbox Component Implementation

Created `Checkbox` component based on Figma design (gov-materials-4-2-5, node: 1113:76953):

**Component Structure**:
```
src/components/Checkbox/
├── index.js              # Barrel export
├── Checkbox.jsx          # Main component with PropTypes
├── Checkbox.css          # GOV.cz design token styling
└── Checkbox.stories.jsx  # 12 comprehensive stories
```

**Features**:
| Feature | Description |
|---------|-------------|
| **Check States** | Unchecked, Checked, Indeterminate |
| **Sizes** | Small (s), Medium (m), Large (l) |
| **Validation** | Default, Disabled, Error states |
| **Helper Text** | Descriptive text below checkbox |
| **Error Messages** | Validation feedback with icon |
| **Accessibility** | ARIA attributes, keyboard navigation |

**Props**:
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | - | Label text next to checkbox |
| `helperText` | string | - | Helper text below |
| `checked` | boolean | false | Controlled checked state |
| `indeterminate` | boolean | false | Partial selection state |
| `disabled` | boolean | false | Disabled state |
| `error` | boolean | false | Error state |
| `errorMessage` | string | - | Error message text |
| `size` | 's' \| 'm' \| 'l' | 'm' | Size variant |
| `onChange` | function | - | Change handler |
| `name` | string | - | Input name attribute |
| `value` | string | - | Input value attribute |
| `id` | string | auto | Custom ID |

**Stories Created**:
| Story | Description |
|-------|-------------|
| Default | Basic unchecked checkbox |
| Interactive | Controlled state demo |
| States | All state combinations |
| Sizes | Three size variants |
| WithHelperText | Helper text example |
| WithError | Error validation |
| Indeterminate | Parent/child select all |
| FormGroup | Notification preferences form |
| TermsExample | Real-world terms validation |
| DisabledStates | All disabled variants |
| CompleteMatrix | Full variant matrix table |
| LongLabels | Multi-line label handling |

**Design Tokens Used**:
- `--gov-primary-600` (#2362a2) - Checked background
- `--gov-border-subtle` - Unchecked border
- `--gov-border-error` - Error state border
- `--gov-text-error` - Error text color
- `--gov-focus-600` - Focus ring color
- `--gov-radius-xs` - Border radius

**Dark Mode Ready**: Styles prepared with `[data-theme="dark"]` selectors.

### 10. Typography Tokens Component

Created `TypographyTokens` component with 5 stories documenting text styles:

**Component Structure**:
```
src/components/TypographyTokens/
├── index.js              # Barrel export
├── TypographyTokens.jsx  # Main container + TypeSpecimen subcomponent
├── TypographyTokens.css  # Styles with dark mode support
└── TypographyTokens.stories.jsx  # 5 stories
```

**Stories Created**:
| Story | Description | Scales |
|-------|-------------|--------|
| `DisplayStyles` | Hero/landing page text | 3 scales (L/M/S) |
| `HeadlineStyles` | Page headings (H1-H6) | 5 scales (XL→XS) |
| `BodyStyles` | Content text | 5 scales (XL→XS) |
| `UIStyles` | Buttons, labels, captions | 5 styles |
| `SpecialStyles` | Links, bold, code, quotes | 5 styles |

**Features**:
- Sample text in Czech (authentic GOV.cz context)
- CSS variable display
- Size/weight/line-height metadata
- Usage descriptions
- Dark mode support
- Responsive grid layout

### 6. Anti-Hallucination Rule Implementation

Added a new rule to `GLOBAL_COLLABORATION_RULES.json` (v1.1.0):

**Rule**: `external_data_hallucination_prohibition`

- **Severity**: Absolute prohibition
- **Purpose**: Prevent AI from fabricating data when external sources are inaccessible
- **Applies to**: Figma API, external APIs, database queries, URL fetches, MCP tools

---

## ❌ Problems Encountered

### 1. Figma File Access Issues

**Problem**: Initial attempts to access Figma files failed with:
> "This figma file could not be accessed."

**Cause**: The authenticated user did not have access permissions to the specific Figma file.

**Resolution**: User provided a new Figma link with proper access permissions.

### 2. Figma MCP Selection Requirement

**Problem**: Multiple MCP tool calls failed with:
> "You currently have nothing selected. You need to select a layer first before using this tool."

**Affected Tools**:
- `get_design_context`
- `get_variable_defs`

**Root Cause Discovery**: Through research, we discovered that the Figma MCP tools require:
1. Figma Desktop app to be open
2. A layer to be actively selected in the Figma file
3. Proper file access permissions

### 3. Figma Variables API Limitation

**Problem**: Could not extract color variables programmatically via MCP.

**Research Findings**:
| Method | Availability |
|--------|--------------|
| Figma Plugin API | Requires plugin inside Figma app |
| Figma REST API | **Enterprise plan only** |
| MCP `get_variable_defs` | Requires active layer selection in Figma |

**Solution**: User exported variables using Figma plugin, providing a JSON file.

### 4. AI Hallucination Attempt

**Problem**: AI attempted to fabricate color values when Figma access failed.

**What happened**: When external data retrieval failed, the AI was about to create placeholder/invented color values instead of transparently reporting the failure.

**User feedback**: 
> "Stop and please do not hallucinate!"
> "That must not ever happen in the future."

**Resolution**: 
- Implemented hard anti-hallucination rule in global configuration
- Created `GLOBAL_RULES_CHANGELOG.md` to track rule changes
- Established clear protocol for handling data retrieval failures

### 5. Semantic Token References

**Challenge**: Figma exports semantic tokens as references to other tokens:
```json
"text_text-primary": {
  "modes": {
    "light": "color_neutral_950",  // ← Reference, not a value
    "dark": "color_neutral_0"
  }
}
```

**Solution**: Implemented CSS variable references in the stylesheet:
```css
--gov-text-primary: var(--gov-neutral-950);
```

### 6. Typography Implementation Drift from Official Spec

**Problem**: Typography implementation deviated from official GOV.cz Design System conventions.

**What happened**:
1. Implemented typography based on Figma export format
2. Did not consult official spec (designsystem.gov.cz) until after implementation
3. Used "Ember Blaze" theme's DM Sans font instead of updating to Roboto
4. Created CSS variable naming pattern that differs from official

**Discovered discrepancies**:
- Wrong font family (DM Sans vs Roboto)
- Different CSS variable naming (`--gov-font-*` vs `--gov-text-*-font-size`)
- Missing separate line-height tokens

**Root causes identified**:
1. Initial project theme (Ember Blaze) wasn't fully replaced
2. Figma export doesn't include font-family or line-height as separate tokens
3. Official spec consulted too late in the process

**Status**: Documented for future fix. See [Typography Alignment Audit](#️-typography-alignment-audit-official-govcz-vs-our-implementation).

---

## 🔧 Figma Desktop MCP: Problem & Solution

### The Problem

Initial attempts to use Figma MCP tools failed with two errors:

1. **"This figma file could not be accessed"** - File permission/access issue
2. **"You currently have nothing selected. You need to select a layer first"** - Tool requirement not met

### Root Cause: Desktop MCP vs Remote MCP

Figma offers **two types of MCP servers**:

| Feature | Desktop MCP Server | Remote MCP Server |
|---------|-------------------|-------------------|
| **Context Type** | Selection-based | Link-based |
| **Requires** | Figma Desktop App | Browser + API Token |
| **Layer Selection** | ✅ Understands selected layers | ❌ Requires URL with node-id |
| **Dev Mode** | ✅ Required (Shift+D) | Not required |
| **Security** | Local (design data stays on machine) | Remote (data sent to API) |
| **Best For** | Real-time design-to-code workflows | Automated/CI pipelines |

**Source**: [Figma MCP Collection - Compare Figma's remote and desktop MCP servers](https://help.figma.com/hc/en-us/articles/35281385065751)

### The Solution

To fix the issue, we needed to use **Figma Desktop MCP** correctly:

#### Step 1: Open Figma Desktop App
- Download and install Figma Desktop (not browser version)
- Open the design file (`gov-materials-4-2-5`)

#### Step 2: Enable Dev Mode
- Toggle Dev Mode using toolbar or shortcut: `Shift + D`
- This is **required** for the desktop MCP server

#### Step 3: Enable Desktop MCP Server
- In the **Inspect Panel** (right sidebar in Dev Mode)
- Find the **MCP server section**
- Click **"Enable desktop MCP server"**

#### Step 4: Use Node IDs in Tool Calls
When calling MCP tools, specify the `nodeId` parameter:
- Extract from Figma URL: `?node-id=5098-1112` → `nodeId: "5098:1112"`
- Convert hyphens to colons: `5098-1112` → `5098:1112`

**Source**: [Figma MCP Collection - How to setup the Figma desktop MCP server](https://help.figma.com/hc/en-us/articles/35281186390679)

### Verified Working Tools

After proper setup, all Figma Desktop MCP tools work:

| Tool | Status | Returns |
|------|--------|---------|
| `get_design_context` | ✅ Working | React + Tailwind code |
| `get_screenshot` | ✅ Working | PNG image of node |
| `get_variable_defs` | ✅ Working | Variables used in node |
| `get_metadata` | ✅ Working | XML structure |

### Key Insight

The `get_variable_defs` tool returns **variables used in a specific node**, not all variables in the file. For complete variable extraction:
- Use **Figma Plugin export** (JSON) for all variables
- Use **MCP tools** for per-component variable discovery

---

## 📋 Task Status

| Task | Status |
|------|--------|
| ✅ Extract GOV color palette from Figma | Complete |
| ✅ Generate CSS custom properties | Complete |
| ✅ Create ColorTokens stories | Complete (19 stories) |
| ✅ Verify ColorTokens renders in Storybook | Complete |
| ✅ Add typography tokens documentation | Complete (5 stories) |
| ✅ Add size tokens documentation | Complete |
| ✅ Implement Icon component | Complete (50 icons + Bootstrap Icons) |
| ✅ Implement Button component | Complete (light mode) |
| ✅ Implement Card component | Complete (light mode, 15 stories) |
| ✅ Implement Checkbox component | Complete (light mode, 12 stories) |
| ⚠️ Align typography with official GOV.cz spec | **Pending** |
| ⏳ Implement dark mode for components | Future |
| ⏳ Build more GOV components | Future |

---

## 🔑 Key Learnings

### 1. Figma Desktop MCP Requirements

The Figma **Desktop** MCP (not browser/remote) is required for selection-based workflows:

**Prerequisites**:
- ✅ Figma Desktop app installed and running
- ✅ Design file open in the app
- ✅ Dev Mode enabled (`Shift + D`)
- ✅ Desktop MCP server enabled in Inspect Panel
- ✅ Node IDs specified in tool calls (from URL `?node-id=X-Y`)

**Capabilities**:
- `get_design_context` - Full React/Tailwind code generation
- `get_screenshot` - Visual PNG of any node
- `get_variable_defs` - Variables used per-node
- `get_metadata` - Layer hierarchy structure

**Recommendation**: Use Figma plugin exports for comprehensive token extraction, Desktop MCP for component-level design-to-code.

### 2. Variables vs. Styles

Figma's **Variables** (design tokens) are different from **Styles**:
- Variables are the modern approach (2023+)
- REST API access requires Enterprise
- Plugin API works but needs in-app execution

### 3. Transparent Failure Handling

When external data cannot be retrieved:
1. **Stop immediately**
2. **Explain what failed and why**
3. **Offer concrete alternatives**
4. **Never fabricate data**

### 4. Export Format Quality

The Figma plugin export provided:
- ✅ All primitive colors with exact hex values
- ✅ All 4 brand theme modes
- ✅ Semantic token references
- ✅ Non-color tokens (spacing, typography, etc.)
- ✅ Mode-specific values (desktop, tablet, mobile)

This was **superior** to what MCP could have provided.

### 5. Documentation is Critical

Documenting the journey—including failures—provides:
- Learning material for future attempts
- Clear record of what works and what doesn't
- Foundation for troubleshooting

---

## 📊 Token Statistics

**Total CSS Custom Properties Generated**: 200+

| Category | Light Mode | Dark Mode |
|----------|------------|-----------|
| Primitive Colors | 83 | - |
| Text Tokens | 12 | 12 |
| Background Tokens | 21 | 15 |
| Border Tokens | 11 | 5 |
| Icon Tokens | 10 | 9 |
| Button Solid | 17 | 12 |
| Button Outlined | 12 | 12 |
| Interactive | 4 | 3 |
| Status | 5 | 3 |
| Component Nav | 5 | 5 |
| Component Footer | 5 | 4 |

---

## 📚 Resources

**Figma Documentation**:
- [Working with Variables (Plugin API)](https://developers.figma.com/docs/plugins/working-with-variables/)
- [Variables REST API](https://developers.figma.com/docs/rest-api/variables/)

**Project Files**:
- Figma: `gov-materials-4-2-5` (node-id: 515-11342)
- Source: designsystem.gov.cz

**Export Files**:
- `export/color_variables.json` - Complete Figma variable export

---

## ✅ Verification Results

**Date Verified**: January 3, 2026  
**Storybook URL**: `http://localhost:6006`

### All 19 Stories Rendered Successfully

| Story | Status | Description |
|-------|--------|-------------|
| Gov Primary | ✅ Pass | 13 blue shades with swatches |
| Gov Secondary | ✅ Pass | 12 yellow/gold shades |
| Gov Neutral | ✅ Pass | 14 grayscale shades |
| Gov Error | ✅ Pass | 12 red shades |
| Gov Warning | ✅ Pass | 12 yellow shades |
| Gov Success | ✅ Pass | 12 green shades |
| Gov Interactive | ✅ Pass | Focus & visited states |
| Gov Mode 2 Green | ✅ Pass | Green brand theme |
| Gov Mode 3 Green Alt | ✅ Pass | Alternative green |
| Gov Mode 4 Teal | ✅ Pass | Teal brand theme |
| Gov Semantic Status | ✅ Pass | Status indicators |
| Gov Text Colors | ✅ Pass | Text color tokens |
| Gov Background Colors | ✅ Pass | Background tokens |
| Gov Button Solid | ✅ Pass | Button states |
| Gov Border Colors | ✅ Pass | Border tokens |
| Gov Navigation Colors | ✅ Pass | Nav component |
| Gov Footer Colors | ✅ Pass | Footer component |
| Complete Overview | ✅ Pass | All scales combined |
| Brand Modes Comparison | ✅ Pass | 4 themes side-by-side |

### Visual Verification

Screenshots captured during testing:
- `storybook-gov-primary-colors.png` - Color swatches with CSS vars
- `storybook-complete-overview.png` - All color scales
- `storybook-brand-modes-comparison.png` - 4 brand themes

### Features Confirmed

- ✅ Color swatch previews render correctly
- ✅ CSS variable names display in orange badges
- ✅ Hex values show for each color
- ✅ Names and usage descriptions visible
- ✅ Grid layout responsive
- ✅ Dark background provides good contrast
- ✅ Controls panel shows editable props

---

## ⚠️ Typography Alignment Audit: Official GOV.cz vs Our Implementation

**Date**: January 3, 2026  
**Source Compared**: [designsystem.gov.cz/principy/typografie.html](https://designsystem.gov.cz/principy/typografie.html)

### Comparison Summary

After comparing our implementation with the official GOV.cz Design System typography page, we identified several discrepancies:

| Aspect | Official GOV.cz | Our Implementation | Status |
|--------|-----------------|-------------------|--------|
| **Font Family** | Roboto (Regular, Medium, Bold) | DM Sans (global) + Roboto (stories) | ⚠️ Conflict |
| **CSS Variable Pattern** | `--gov-text-{style}-font-size` | `--gov-font-{style}` | ⚠️ Different |
| **Line Height Tokens** | Separate `--gov-text-{style}-line-height` | Hardcoded in components | ⚠️ Missing |
| **CSS Class Pattern** | `.gov-text--{style}` | Not implemented | ⚠️ Missing |
| **Font Sizes** | Match (12px-56px scale) | Match | ✅ Aligned |
| **Responsive Behavior** | 768px breakpoint | 768px breakpoint | ✅ Aligned |
| **Weight Values** | 400/500/700 | 400/500/700 | ✅ Aligned |

### Detailed Findings

#### 1. Font Family Conflict

**Problem**: Mixed font families in the codebase.

| File | Font | Origin |
|------|------|--------|
| `src/index.css:419` | `'DM Sans'` | Initial "Ember Blaze" theme |
| `src/components/TypographyTokens/TypeScale.css:479` | `'Roboto'` | Added during typography implementation |
| `src/components/TypographyTokens/TypographyTokens.stories.jsx` | `'Roboto'` (in code examples) | Matches official spec |

**Official Requirement**: Roboto is the only authorized typeface for GOV.cz.

#### 2. CSS Variable Naming Pattern

**Our Pattern**:
```css
--gov-font-display-l: 56px;
--gov-font-body-m: 16px;
```

**Official Pattern** (from designsystem.gov.cz):
```css
--gov-text-display-l-font-size: 3.5rem;
--gov-text-display-l-line-height: 1.3;
```

**Difference**: Official uses `--gov-text-{style}-font-size` with separate line-height tokens.

#### 3. Missing Line Height Tokens

Our implementation hardcodes line heights in components. Official spec requires separate tokens:
```css
/* Official pattern (missing in our implementation) */
--gov-text-headline-l-line-height: 1.3;
--gov-text-body-m-line-height: 1.5;
```

### Root Cause Analysis

**Why did these discrepancies occur?**

| Root Cause | Evidence | Explanation |
|------------|----------|-------------|
| **Initial Theme Mismatch** | Git commit `7467318`: "Ember Blaze theme" | Project started with a different design theme (DM Sans) before GOV.cz integration |
| **Figma Export Limitations** | `export/color_variables.json` contains `font-size_*` tokens only | The Figma export did not include font-family or line-height information |
| **Naming Convention Choice** | My transformation of `font-size_display-l` → `--gov-font-display-l` | I chose a simpler naming pattern without consulting the official spec |
| **Missing Source of Truth** | Official spec accessed only after implementation | The official designsystem.gov.cz page was consulted at the end, not the beginning |

### Evidence Trail

**1. Initial Project Setup (Ember Blaze Theme)**
```
Git history shows:
commit 7467318 - "Initial commit: Storybook Design System with Ember Blaze theme and MCP integration"
```

The "Ember Blaze" theme used DM Sans as its primary font. This was set in `src/index.css`:
```css
--font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**2. Figma Export Content**

The `export/color_variables.json` file (lines 1221-1369) contains font-size tokens:
```json
"font-size_body-xs": { "type": "number", "modes": { "desktop": 12, "tablet": 12, "mobile": 12 } },
"font-size_display-l": { "type": "number", "modes": { "desktop": 56, "tablet": 56, "mobile": 52 } }
```

**Not included in export**: font-family, line-height, letter-spacing, or CSS class naming conventions.

**3. Figma MCP Tool Output**

When using `get_design_context`, the generated code included:
```css
font-family: 'Roboto', sans-serif;
```

This is where Roboto was correctly identified, but it was only applied to the TypeScale component, not the global `--font-family` variable.

### What Needs Investigation

The following items require further research before implementation:

1. **Official Token Export Source**: Where does the official GOV.cz team export their tokens from? Their CSS variable pattern differs from our Figma export.

2. **REM vs PX**: The official spec uses `rem` units (`3.5rem`), while our Figma export uses `px` (`56px`). Need to determine if this is a build-time transformation or source-level decision.

3. **Class Name Generation**: The `.gov-text--{style}` pattern suggests a utility class system. Is this auto-generated or manually maintained?

### Recommended Fixes

If alignment with official GOV.cz is required:

| Fix | Priority | Effort |
|-----|----------|--------|
| Change `--font-family` from DM Sans to Roboto | High | Low |
| Rename CSS variables to `--gov-text-{style}-font-size` | Medium | Medium |
| Add separate `--gov-text-{style}-line-height` tokens | Medium | Medium |
| Create `.gov-text--{style}` utility classes | Low | Medium |
| Convert px to rem units | Low | High (affects entire codebase) |

---

## 🔮 Next Steps (Phase 4)

1. **Implement Dark Mode** - Complete dark mode styling for Button, Card, Icon components
2. **Align with Official Spec** - Fix font family and CSS variable naming
3. **Build More GOV Components** - Form inputs, navigation, footer, etc.
4. **Dark Mode Toggle** - Add story demonstrating `data-theme="dark"` switching
5. **Brand Mode Switcher** - Add interactive demo for `data-brand-mode` switching

---

## 🏆 Project Summary

This experiment successfully demonstrated:

1. **AI-assisted Figma integration** works but has limitations requiring manual exports
2. **Design token extraction** is possible via Figma plugin JSON export
3. **CSS custom properties** provide excellent token storage with multi-mode support
4. **Storybook documentation** makes tokens discoverable and testable
5. **Anti-hallucination rules** are essential for data-dependent workflows
6. **Official spec validation is critical** - comparing against the authoritative source revealed discrepancies
7. **Figma-to-code workflow** - Successfully implemented Card component from Figma design using MCP tools

**Total Effort**: ~8 hours  
**Tokens Generated**: 200+ CSS custom properties  
**Components Created**: 5 (Button, Card, Checkbox, Icon, ColorTokens)
**Stories Created**: 70+ total (19 color + 5 typography + 15 card + 12 checkbox + button + icon stories)

---

## 📝 Lessons Learned

### 1. Consult Official Spec First

**Mistake**: We implemented typography based on Figma export alone, only consulting the official designsystem.gov.cz page at the end.

**Lesson**: Always verify against the official design system documentation before implementation, not after.

### 2. Figma Exports ≠ Production Tokens

**Observation**: The Figma plugin export provided raw values in a specific format (`font-size_display-l`), but the official implementation uses a different pattern (`--gov-text-display-l-font-size`).

**Lesson**: Figma exports are a starting point, not the final format. A transformation layer exists between design tools and production code.

### 3. Theme Migration Requires Full Audit

**Mistake**: When adding GOV.cz tokens to a project with an existing theme (Ember Blaze), we didn't audit all theme-related properties.

**Lesson**: When migrating design systems, systematically review: fonts, colors, spacing, and all CSS variables—not just the new additions.

### 4. Document Before, During, and After

**Success**: This article captured problems in real-time, making it possible to trace root causes.

**Recommendation**: Maintain living documentation throughout design system development.

---

*Document created: January 3, 2026*  
*Last updated: January 3, 2026*  
*Phase 1 Status: ✅ Complete (Design Tokens)*  
*Phase 2 Status: ✅ Complete (Typography & Size Tokens)*  
*Phase 3 Status: ✅ In Progress (Components - Button, Card, Icon)*  
*Phase 4: Pending (Dark Mode & More Components)*
