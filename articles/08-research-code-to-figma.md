# Research: Reimporting Synthetic Components Back to Figma

**Date**: January 4, 2026  
**Status**: Deep Research Complete  
**Topic**: How to sync React/Storybook components back to Figma

---

## 🎯 The Challenge

We have built **synthetic components** in React/Storybook (Header, Footer, LanguageSwitcher, etc.) that don't exist in the original Figma file. 

**Question**: How can we reimport these back to Figma to maintain a single source of truth?

---

## 📊 Research Summary

| Approach | Type | Direction | Effort | Best For |
|----------|------|-----------|--------|----------|
| **Figma Code Connect** | Official | Link only | Medium | Documentation |
| **story.to.design** | Plugin | Code → Figma | Low | Component sync |
| **Anima DSA** | SaaS | Bidirectional | Low | Enterprise teams |
| **Chromatic Connect** | Plugin | Embed | Low | Visual QA |
| **Storybook-to-Figma** | Open Source | Code → Figma | Medium | Full control |
| **Manual Recreation** | Manual | Code → Figma | High | One-time |

---

## 1. Figma Code Connect (Official)

**What it is**: Figma's official feature to link code components to Figma components.

**Source**: [developers.figma.com/docs/code-connect/react](https://developers.figma.com/docs/code-connect/react/)

### How it Works

Code Connect doesn't generate Figma components - it **links** existing code to existing Figma components so developers can see the correct code snippets in Dev Mode.

```bash
# Install CLI
npm install -g @figma/code-connect

# Initialize in your project
figma connect init

# Create connection file
figma connect create
```

**Connection file example**:
```tsx
// src/components/Button.figma.tsx
import figma from "@figma/code-connect";
import { Button } from "./Button";

figma.connect(Button, "https://figma.com/file/xxx?node-id=1:23", {
  props: {
    label: figma.string("Label"),
    variant: figma.enum("Variant", {
      Primary: "primary",
      Secondary: "secondary",
    }),
  },
  example: (props) => <Button variant={props.variant}>{props.label}</Button>,
});
```

**Publish to Figma**:
```bash
figma connect publish
```

### Verdict

| Pros | Cons |
|------|------|
| ✅ Official Figma solution | ❌ Requires Figma component to exist first |
| ✅ Shows code in Dev Mode | ❌ Doesn't CREATE Figma components |
| ✅ Keeps docs in sync | ❌ Requires manual component creation |
| ✅ Free for public files | ❌ Figma Pro/Org for private files |

**Best for**: Documentation and developer handoff, NOT component creation.

---

## 2. story.to.design (Recommended)

**What it is**: Figma plugin that imports Storybook stories as real Figma components.

**Source**: [story.to.design](https://story.to.design/)

### How it Works

1. Connect plugin to your Storybook URL
2. Select components and variants to import
3. Plugin generates Figma components with:
   - Auto-layout
   - Nested components
   - Variants from story args
   - Proper naming

### Key Features

| Feature | Description |
|---------|-------------|
| **Auto-layout** | Converts CSS flexbox to Figma auto-layout |
| **Variants** | Creates Figma variants from Storybook args |
| **Nested Components** | Preserves component hierarchy |
| **Change Detection** | Notifies when code changes |
| **State Simulation** | Supports hover, active, focus states |

### Requirements

- Storybook must be publicly accessible (or use their proxy)
- Components must render in an iframe
- Works with React, Vue, Angular, Svelte

### Pricing

| Plan | Price | Features |
|------|-------|----------|
| Free | $0 | 3 components/month |
| Pro | ~$15/month | Unlimited components |
| Team | Custom | Team management |

### Verdict

| Pros | Cons |
|------|------|
| ✅ CREATES Figma components | ❌ Storybook must be public |
| ✅ Maintains auto-layout | ❌ Paid for serious use |
| ✅ Syncs variants | ❌ Complex components may need tweaking |
| ✅ Change notifications | |

**Best for**: Our use case! Import synthetic components from Storybook to Figma.

---

## 3. Anima Design System Automation

**What it is**: AI-powered bidirectional sync between Figma and Storybook.

**Source**: [animaapp.com/lp/design-system-automation](https://www.animaapp.com/lp/design-system-automation)

### How it Works

Anima's CLI runs in your CI/CD pipeline and:
1. Detects component changes in Storybook
2. Automatically updates Figma components
3. Converts code props → Figma variants
4. Converts CSS → Figma Auto Layout
5. Syncs design tokens

### Setup

```bash
# Install CLI
npm install -g @anima-app/cli

# Configure
anima init

# Sync to Figma
anima sync
```

### Key Features

| Feature | Description |
|---------|-------------|
| **Bidirectional** | Figma ↔ Code sync |
| **AI Conversion** | Smart prop-to-variant mapping |
| **CI/CD Integration** | Automated sync on push |
| **Design Tokens** | Syncs colors, typography, spacing |
| **Multi-framework** | React, Vue, Angular, Svelte |

### Pricing

| Plan | Price | Features |
|------|-------|----------|
| Free | $0 | Limited sync |
| Pro | ~$30/month | Full features |
| Enterprise | Custom | SSO, support |

### Verdict

| Pros | Cons |
|------|------|
| ✅ Full bidirectional sync | ❌ More expensive |
| ✅ CI/CD integration | ❌ More complex setup |
| ✅ AI-powered | ❌ Learning curve |
| ✅ Design tokens | |

**Best for**: Enterprise teams with continuous design-dev workflow.

---

## 4. Chromatic's Storybook Connect

**What it is**: Figma plugin that embeds live Storybook stories in Figma.

**Source**: [chromatic.com/features/figma-plugin](https://www.chromatic.com/features/figma-plugin)

### How it Works

1. Publish Storybook to Chromatic
2. Install Figma plugin
3. Link Figma components to Storybook URLs
4. View live components in Figma

### Key Features

| Feature | Description |
|---------|-------------|
| **Live Embed** | See actual rendered component |
| **Auto-update** | Reflects latest build |
| **Visual Diff** | Compare design vs implementation |
| **Branch Support** | Link to specific branches |

### Verdict

| Pros | Cons |
|------|------|
| ✅ Live preview in Figma | ❌ Requires Chromatic hosting |
| ✅ Automatic updates | ❌ Doesn't CREATE Figma components |
| ✅ Visual comparison | ❌ Embed only, not editable |

**Best for**: Visual QA and design review, NOT component creation.

---

## 5. Storybook-to-Figma (Open Source)

**What it is**: Open source tool to import Storybook components into Figma.

**Source**: [github.com/bem/storybook-to-figma](https://github.com/bem/storybook-to-figma)

### How it Works

1. Run tool alongside Storybook
2. Open Figma plugin
3. Drag-and-drop components into Figma
4. Generate variants from story args

### Key Features

| Feature | Description |
|---------|-------------|
| **Open Source** | Free, self-hosted |
| **Drag-and-drop** | Visual import |
| **Variant Generation** | From story args |
| **Full Control** | Modify as needed |

### Limitations

- Early beta
- May require manual fixes
- Less polished than paid options

### Verdict

| Pros | Cons |
|------|------|
| ✅ Free and open source | ❌ Early beta |
| ✅ Full control | ❌ May need manual work |
| ✅ Self-hosted | ❌ Less support |

**Best for**: Teams with technical capacity who want free solution.

---

## 6. Manual Recreation

**What it is**: Manually recreate components in Figma based on code.

### Process

1. Screenshot component in all states
2. Extract design tokens (colors, spacing, typography)
3. Rebuild in Figma using Auto-layout
4. Create variants for all props
5. Link using Code Connect

### When to Use

- One-time import
- Simple components
- Learning exercise
- No budget for tools

### Verdict

| Pros | Cons |
|------|------|
| ✅ No external tools | ❌ Time consuming |
| ✅ Full control | ❌ Error prone |
| ✅ Learning opportunity | ❌ Hard to maintain |

---

## 🎯 Recommendation for Our Project

### Best Approach: story.to.design

For our synthetic components (Header, Footer, LanguageSwitcher), **story.to.design** is the best choice because:

1. **Creates real Figma components** - Not just links or embeds
2. **Works with Storybook** - We already have comprehensive stories
3. **Handles variants** - Our components have many props/variants
4. **Auto-layout support** - Preserves responsive behavior
5. **Reasonable cost** - Free tier for testing, affordable pro

### Implementation Plan

```
Step 1: Publish Storybook to public URL
        - Deploy to Vercel, Netlify, or Chromatic
        
Step 2: Install story.to.design plugin in Figma

Step 3: Connect to our Storybook URL

Step 4: Import components one by one:
        - Header (all variants)
        - Footer (all variants)
        - LanguageSwitcher (toggle, buttons, dropdown)
        
Step 5: Organize in Figma
        - Create "Synthetic Components" page
        - Add to component library
        
Step 6: Set up Code Connect for documentation
        - Link Figma components back to code
        - Show usage examples in Dev Mode
```

### Alternative: If story.to.design doesn't work well

1. **Anima** - For enterprise-grade sync
2. **Manual** - For simple components
3. **Storybook-to-Figma** - For free open source option

---

## 📚 Resources

### Documentation

- [Figma Code Connect (React)](https://developers.figma.com/docs/code-connect/react/)
- [story.to.design Docs](https://story.to.design/docs)
- [Anima Design System Automation](https://www.animaapp.com/lp/design-system-automation)
- [Chromatic Figma Plugin](https://www.chromatic.com/features/figma-plugin)

### Tutorials

- [How to import Storybook stories into Figma (YouTube)](https://www.youtube.com/watch?v=-9jnucUnWvk)
- [Figma Code Connect Setup Guide](https://developers.figma.com/docs/code-connect)

### GitHub

- [bem/storybook-to-figma](https://github.com/bem/storybook-to-figma)
- [storybookjs/addon-designs](https://github.com/storybookjs/addon-designs)

---

## 🔮 Future Considerations

### 1. Figma Make (AI)

Figma is developing AI-powered code generation. The reverse (code → Figma) may come soon.

### 2. Design Tokens

Using design tokens (Style Dictionary, Tokens Studio) can help maintain sync:
- Export tokens from Figma
- Import tokens to code
- Changes flow both ways via tokens

### 3. Component Libraries

As component libraries mature, expect better bidirectional sync tools from Figma and third parties.

---

*Research completed: January 4, 2026*


