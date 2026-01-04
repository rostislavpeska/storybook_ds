# story.to.design: Step-by-Step Tutorial

**Purpose**: Import our Storybook components (Header, Footer, LanguageSwitcher, etc.) into Figma  
**Source**: [story.to.design official docs](https://story.to.design/docs)  
**Last verified**: January 2026

---

## Prerequisites

Before starting, ensure you have:

- [ ] Figma account (Free or Pro)
- [ ] Storybook running locally OR deployed to a public URL
- [ ] Components you want to import have Storybook stories

---

## Step 1: Install the Figma Plugin

1. Open **Figma** (browser or desktop app)
2. Click the **Figma logo** (top-left) → **Plugins** → **Browse plugins in Community**
3. Search for **"story.to.design"**
4. Click **Install**

**Alternative**: Go directly to [Figma Community - story.to.design](https://www.figma.com/community/plugin/1183628844124333663)

---

## Step 2: Decide Your Connection Method

story.to.design supports 4 connection methods:

| Method | When to Use | Requirements |
|--------|-------------|--------------|
| **Public Storybook** | Deployed to public URL | URL must be accessible |
| **Private Server Behind Login** | Password-protected server | Username + Password |
| **Cloudflare Service Tokens** | Cloudflare Zero Trust | Client ID + Secret |
| **Private or Local** | localhost or VPN | story.to.design Agent |

### For Our Project

Since our Storybook runs locally in Docker (`localhost:6006`), we need:
- **Option A**: Deploy Storybook to public URL (recommended)
- **Option B**: Use the local agent (more complex)

---

## Step 3A: Deploy Storybook (Recommended)

### Option 1: Deploy to Chromatic (Easiest)

```bash
# Install Chromatic
npm install --save-dev chromatic

# Build and deploy
npx chromatic --project-token=<your-token>
```

Get your project token at [chromatic.com](https://www.chromatic.com/)

### Option 2: Deploy to Vercel

```bash
# Build static Storybook
npm run build-storybook

# The output is in storybook-static/
# Deploy this folder to Vercel
```

### Option 3: Deploy to Netlify

1. Connect your repo to Netlify
2. Set build command: `npm run build-storybook`
3. Set publish directory: `storybook-static`

**After deployment, note your public URL** (e.g., `https://your-storybook.vercel.app`)

---

## Step 3B: Use Local Agent (Alternative)

If you can't deploy publicly:

1. In the plugin, select **"Private or local"**
2. The plugin will show instructions to download the agent
3. Follow the on-screen instructions to install
4. Run the agent while using the plugin

**Note**: This requires the agent to run on your machine during import.

---

## Step 4: Connect Storybook to Plugin

1. Open any Figma file
2. Right-click on canvas → **Plugins** → **story.to.design**
3. The plugin window opens
4. Enter your Storybook URL (e.g., `https://your-storybook.vercel.app`)
5. Click **Connect**

**Wait**: The plugin will scan your Storybook and list all components.

---

## Step 5: Select Components to Import

After connection, you'll see a list of your Storybook stories organized by component.

### For Our Synthetic Components:

Select these:
- [ ] `Components/Header`
- [ ] `Components/Footer`
- [ ] `Components/LanguageSwitcher`
- [ ] Any other custom components

### Tips:

- **Expand each component** to see available variants
- **Select specific stories** to import only certain states
- **Use search** to find components quickly

---

## Step 6: Generate Figma Components

1. After selecting components, click **"Generate components in Figma"**
2. Wait for the plugin to process (may take 30-60 seconds per component)
3. Components will appear on your Figma canvas

### What Gets Generated:

| Storybook Feature | Figma Equivalent |
|-------------------|------------------|
| Story args/controls | Figma variants |
| CSS flexbox/grid | Auto-layout |
| Nested components | Linked instances |
| States (hover, active) | Interactive components |

---

## Step 7: Organize Imported Components

### Recommended Structure:

```
📁 Your Figma File
├── 📄 Cover
├── 📄 Components (from story.to.design)
│   ├── Header
│   ├── Footer
│   └── LanguageSwitcher
├── 📄 Pages
└── 📄 ...
```

### Steps:

1. Create a new page called **"Synthetic Components"** or **"Code Components"**
2. Move generated components to this page
3. Right-click → **Create component** to add to your library
4. Publish to team library if needed

---

## Step 8: Keep Components in Sync

story.to.design can notify you when code changes:

1. Re-run the plugin periodically
2. Plugin shows which components have updates
3. Click **Update** to sync changes from code

### ⚠️ Important Best Practices:

| Do ✅ | Don't ❌ |
|-------|---------|
| Update via plugin | Manually edit generated components |
| Create copies for modifications | Edit originals |
| Use as reference | Treat as source of truth |

**Why?** Manual edits will be overwritten on next sync.

---

## Troubleshooting

### "Cannot connect to Storybook"

- Verify URL is correct and accessible
- Check for CORS issues (may need Storybook config)
- Try the local agent method

### "Component looks wrong"

- Check if CSS is properly scoped
- Verify fonts are web-accessible
- Some complex CSS may not translate perfectly

### "Missing variants"

- Ensure stories have args defined
- Check that story controls are set up
- Complex dynamic stories may need simplification

---

## For Our Project: Specific Steps

### Current Status

- Storybook runs in Docker on `localhost:6006`
- Components to import: Header, Footer, LanguageSwitcher

### Action Plan

```bash
# 1. Build static Storybook
docker exec storybook npm run build-storybook

# 2. Copy to deployment folder
docker cp storybook:/app/storybook-static ./storybook-static

# 3. Deploy to Vercel/Netlify/Chromatic
# (choose one method from Step 3A)

# 4. Run story.to.design plugin in Figma

# 5. Import Header, Footer, LanguageSwitcher

# 6. Create "Synthetic Components" page in Figma
```

---

## Pricing Reference

| Plan | Limit | Notes |
|------|-------|-------|
| **Free** | Limited imports | Good for testing |
| **Pro** | Unlimited | For production use |

**Check current pricing at**: [story.to.design](https://story.to.design/)

---

## Links

- **Official Docs**: [story.to.design/docs](https://story.to.design/docs)
- **Figma Plugin**: [Figma Community](https://www.figma.com/community/plugin/1183628844124333663)
- **Connect Methods**: [story.to.design/docs/connect-your-storybook](https://story.to.design/docs/connect-your-storybook)
- **Workflow Integration**: [story.to.design/docs/incorporate-s2d-in-workflow](https://story.to.design/docs/incorporate-s2d-in-workflow)

---

*Tutorial created: January 4, 2026*  
*Based on official story.to.design documentation*

