# ChatGPT Troubleshooting Prompt: story.to.design Setup

## 🎯 Context

I'm trying to import synthetic React components (Header, Footer, LanguageSwitcher) from my Storybook back into Figma to maintain a single source of truth. I'm confused about story.to.design and need help troubleshooting the setup.

## 📋 Project Details

**Tech Stack:**
- React components in Storybook (localhost:6006 via Docker)
- GOV.cz design system implementation
- Components: Header, Footer, LanguageSwitcher (all with comprehensive stories)

**Current Status:**
- Storybook runs locally in Docker container
- Components have full Storybook stories with controls/args
- Need to deploy publicly for story.to.design OR use local agent
- Goal: Create Figma components from existing Storybook components

## 🔍 Research Summary

I've researched multiple approaches for code → Figma sync:

### 1. story.to.design (Primary Choice)
**What it does:** Imports Storybook stories as real Figma components with auto-layout and variants
**Pricing:** Free tier (3 components/month), Pro (~$15/mo)
**Connection methods:**
- Public Storybook URL
- Private server (login required)
- Cloudflare Zero Trust
- Private/Local (requires agent)

### 2. Figma Code Connect (Official)
**What it does:** Links code to existing Figma components, shows snippets in Dev Mode
**Limitation:** Requires Figma components to exist first - doesn't CREATE them

### 3. Anima Design System Automation
**What it does:** Bidirectional sync with CI/CD integration
**Pricing:** ~$30/mo, enterprise options
**Features:** AI-powered conversion, design tokens sync

### 4. Chromatic Storybook Connect
**What it does:** Embeds live Storybook in Figma
**Limitation:** Only embeds, doesn't create editable components

## 📖 Official Documentation Links

- **Main site:** https://story.to.design/
- **Docs:** https://story.to.design/docs/
- **Connection methods:** https://story.to.design/docs/connect-your-storybook
- **Workflow integration:** https://story.to.design/docs/incorporate-s2d-in-workflow

## 🛠️ Step-by-Step Tutorial (From Official Docs)

### Prerequisites
- Figma account
- Storybook running (public URL OR local agent)

### Steps
1. Install plugin from Figma Community → search "story.to.design"
2. Choose connection method based on Storybook accessibility
3. Enter Storybook URL in plugin
4. Select components and variants to import
5. Click "Generate components in Figma"
6. Components appear with auto-layout, variants, nested components
7. Re-run plugin to sync future updates

### What Gets Generated
- Story args → Figma variants
- CSS flexbox → Auto-layout
- Nested components → Linked instances
- States (hover, active) → Interactive components

### Best Practices
- Create dedicated Figma page for imported components
- Don't manually edit generated components (will be overwritten on sync)
- Use as reference, modify copies if needed

## 🤔 Current Confusion Points

**Main Issue:** I'm confused about the entire process. Need clarity on:

1. **Deployment:** How to deploy local Storybook to public URL for free?
2. **Local Agent:** How to install/run the story.to.design agent for local Storybook?
3. **Plugin Installation:** Step-by-step Figma plugin setup
4. **Component Selection:** How to choose which components/variants to import
5. **Sync Process:** How updates flow back from code to Figma
6. **Troubleshooting:** What to do if components don't import correctly

## 📝 Project-Specific Requirements

**Components to Import:**
- Header (multiple variants: with/without logo, navigation, language switcher)
- Footer (columns, contact, social links, bottom links)
- LanguageSwitcher (toggle, buttons, dropdown variants)

**Constraints:**
- Storybook runs in Docker on localhost:6006
- Need free/low-cost solution
- Components must maintain GOV.cz design tokens
- Need to preserve accessibility features

## ❓ Help Needed

Please help me:

1. **Clarify the workflow** - What are the exact steps from start to finish?
2. **Troubleshoot deployment** - Best free way to make Storybook public?
3. **Guide through plugin setup** - Screenshots/detailed steps if possible
4. **Explain component selection** - How to choose what gets imported?
5. **Address common issues** - CORS, styling problems, missing variants?
6. **Recommend alternatives** - If story.to.design doesn't work, what next?

## 📚 Additional Context Files

I have created comprehensive documentation:
- `articles/08-research-code-to-figma.md` - Full research on all approaches
- `articles/09-story-to-design-tutorial.md` - Step-by-step tutorial
- `articles/01-figma-to-storybook-journey.md` - Project journey documentation

---

**Please provide detailed, step-by-step guidance with troubleshooting tips for each potential issue.**
