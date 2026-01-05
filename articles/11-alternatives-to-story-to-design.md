# Alternatives to story.to.design: Code → Figma Sync

**Since story.to.design isn't working, here are the best alternatives for importing React components back to Figma.**

---

## 🏆 Top 3 Alternatives

| Tool | Creates Figma Components? | Cost | Best For |
|------|---------------------------|------|----------|
| **Anima Design System Automation** | ✅ Yes (AI-powered) | $29/mo | Enterprise teams |
| **Manual Recreation + Code Connect** | ✅ Yes | Free | Small teams |
| **Chromatic Connect + Manual** | ❌ Embeds only | Free tier | Visual QA |

---

## 1. Anima Design System Automation (Recommended Alternative)

**Why:** Most comprehensive alternative - actually creates Figma components from code.

### How It Works

1. **Install CLI:** `npm install -g @anima-app/cli`
2. **Authenticate:** `anima init` (connects to Figma)
3. **Sync:** `anima sync` (runs in CI/CD or manually)
4. **Result:** Code changes automatically update Figma components

### Key Features

| Feature | Description |
|---------|-------------|
| **AI Conversion** | Converts React props → Figma variants |
| **CSS → Auto-layout** | Transforms flexbox/grid to Figma auto-layout |
| **Design Tokens** | Syncs colors, typography, spacing |
| **Bidirectional** | Figma changes can sync back to code |
| **CI/CD Integration** | Automated sync on Git push |

### Pricing

| Plan | Price | Features |
|------|-------|----------|
| **Free** | $0 | Limited sync, basic features |
| **Pro** | $29/user/mo | Full sync, unlimited projects |
| **Enterprise** | Custom | SSO, priority support |

### For Your Project

```bash
# Install
npm install -g @anima-app/cli

# Connect to your Figma file
anima init

# Sync components
anima sync

# Components appear in Figma automatically
```

**Pros:** Actually creates components, handles variants, CI/CD ready
**Cons:** Paid, more complex setup

---

## 2. Manual Recreation + Figma Code Connect

**Why:** Free and gives you full control.

### How It Works

1. **Screenshot components** from Storybook in all states
2. **Recreate in Figma** using auto-layout
3. **Link with Code Connect** for documentation

### Step-by-Step

#### Step 1: Build Static Storybook
```bash
# Create static export
npm run build-storybook

# Folder: storybook-static/
```

#### Step 2: Screenshot Components
- Open storybook-static/index.html locally
- Screenshot each component in all variants
- Document props, states, sizes

#### Step 3: Recreate in Figma
1. Create new Figma file: "Synthetic Components"
2. For each component:
   - Create frames with auto-layout
   - Use GOV.cz design tokens
   - Add variants for all props
   - Name consistently

#### Step 4: Link with Code Connect
```tsx
// src/components/Header.figma.tsx
import figma from "@figma/code-connect";

figma.connect(Header, "https://figma.com/file/xxx?node-id=1:23", {
  props: {
    appName: figma.string("App Name"),
    showLogo: figma.boolean("Show Logo", { true: true, false: false }),
  },
  example: (props) => <Header appName={props.appName} showLogo={props.showLogo} />,
});
```

### Tools to Help
- **Figma's Design Tokens plugin** - Manage GOV.cz tokens
- **Anima for Figma** - Convert CSS to Figma styles
- **TeleportHQ** - Code to design converter

### Pricing: Free
**Pros:** Complete control, free, learn design system
**Cons:** Time-consuming, manual maintenance

---

## 3. Chromatic Connect + Manual Components

**Why:** Best free option for visual reference.

### How It Works

1. **Deploy Storybook to Chromatic** (free tier: 5 users, unlimited projects)
2. **Install Chromatic plugin** in Figma
3. **Link components** to Storybook URLs
4. **View live components** in Figma

### Setup

```bash
# Install Chromatic
npm install --save-dev chromatic

# Deploy
npx chromatic --project-token=<token>

# Get token from chromatic.com
```

### In Figma
1. Install "Storybook Connect" plugin
2. Select component → Plugin → Paste Storybook URL
3. Component preview appears in Figma panel

### Pricing: Free tier available
**Pros:** Live previews, free tier, easy setup
**Cons:** No editable components, only previews

---

## 4. Other Tools to Consider

### Storiiblocks
- **What:** Figma plugin for design-to-code
- **Reverse:** Limited code-to-Figma
- **Cost:** Free tier available

### Pygma
- **What:** Export Figma styles to code
- **Reverse:** Limited code-to-Figma
- **Cost:** Free

### Locofy
- **What:** Design to code converter
- **Reverse:** No native Figma sync
- **Cost:** Free tier

---

## 🔄 For Your GOV.cz Components

### Recommended Approach: Anima Free Tier

Since you have synthetic components (Header, Footer, LanguageSwitcher):

1. **Try Anima free tier** - May be sufficient for initial testing
2. **If too expensive** → Manual recreation approach
3. **For quick wins** → Chromatic for visual reference

### Component Mapping

| Your Component | Figma Equivalent |
|----------------|------------------|
| Header (React) | Header frame with variants |
| Footer (React) | Footer frame with auto-layout |
| LanguageSwitcher | Component with toggle/buttons/dropdown variants |

### Design Tokens
Ensure you recreate:
- GOV.cz color palette (--gov-primary-*, --gov-neutral-*)
- Typography (--gov-heading-*, --gov-body-*)
- Spacing (--gov-space-*)
- Border radius (--gov-radius-*)
- Component heights (--gov-component-height-*)

---

## 🚀 Quick Start Recommendations

### Option A: Anima (Fastest)
```bash
npm install -g @anima-app/cli
anima init
anima sync
```

### Option B: Manual (Cheapest)
1. Build static Storybook
2. Screenshot components
3. Recreate in Figma with design tokens
4. Add Code Connect links

### Option C: Chromatic (Simplest)
1. Deploy to Chromatic
2. Install Figma plugin
3. Link components for live preview

---

## 📚 Resources

- **Anima Docs:** https://www.animaapp.com/lp/design-system-automation
- **Figma Code Connect:** https://developers.figma.com/docs/code-connect/
- **Chromatic Figma Plugin:** https://www.chromatic.com/features/figma-plugin
- **Manual Design Systems:** https://www.designsystems.com/

---

## 🤔 Decision Framework

| Criteria | Anima | Manual | Chromatic |
|----------|-------|--------|-----------|
| **Creates Components** | ✅ | ✅ | ❌ |
| **Cost** | $29/mo | Free | Free |
| **Setup Time** | Medium | High | Low |
| **Maintenance** | Automatic | Manual | Manual |
| **Learning Curve** | Medium | Low | Low |

**For your project:** Start with Chromatic (free, quick) + Manual recreation for the components you need most.

