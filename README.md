# 🔥 Storybook Design System

> ⚠️ **EXPERIMENTAL PROJECT** - This is a research experiment for AI-assisted design system development. Not intended for production use.

A design system built with **React**, **Vite**, and **Storybook**, based on the [GOV.cz Design System](https://designsystem.gov.cz/). Features MCP integration for AI-powered component development.

![Storybook](https://img.shields.io/badge/Storybook-8.6-ff4785?logo=storybook&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646cff?logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ed?logo=docker&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-Enabled-dc2626?logo=openai&logoColor=white)

---

## ⚠️ Known Issues

> **Dark Mode / Light Mode Problem**
> 
> This project has **unresolved theming issues**. The GOV.cz design system uses CSS custom properties (e.g., `var(--gov-text-primary)`) that change based on dark/light mode. However:
> 
> - **Not all components use color tokens properly** - Some components have hardcoded colors, others use variables inconsistently
> - **Storybook displays in light mode** but some CSS variables resolve to dark mode values, causing **white text on white background** issues
> - Several CSS files have been patched with explicit hex colors (`#262626`) instead of variables as a workaround
> - **This is a known architectural flaw** that would require systematic refactoring to fix properly

---

## ✨ Features

- 🤖 **MCP Integration** - AI agents can interact with components via `@storybook/addon-mcp`
- 🐳 **Docker Ready** - Development and production Docker configurations
- ⚡ **Hot Reload** - Fast development with Vite and volume mounting
- 📚 **Component Stories** - Storybook stories with controls and documentation

---

## 📦 Components

| Component | Description |
|-----------|-------------|
| **Button** | Action button with variants (primary, secondary, neutral, danger) |
| **Card** | Content container with image, title, description |
| **Checkbox** | Form checkbox with label and validation |
| **Datepicker** | Date selection with calendar popup |
| **FileUpload** | Drag & drop file upload |
| **Footer** | Page footer with links and contact info |
| **Header** | Navigation header with logo and menu |
| **Icon** | SVG icon component |
| **Input** | Text input field with validation |
| **LanguageSwitcher** | Language toggle (CZ/EN) |
| **Radio** | Radio button group |
| **Select** | Dropdown select with options |

### Design Tokens (Documentation)

| Component | Description |
|-----------|-------------|
| **ColorTokens** | GOV.cz color palette documentation |
| **SizeTokens** | Spacing and sizing tokens |
| **TypographyTokens** | Font styles and type scale |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Docker (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/rostislavpeska/storybook_ds.git
cd storybook_ds

# Install dependencies
npm install

# Start Storybook
npm run storybook
```

Storybook will be available at **http://localhost:6006**

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build the React app for production |
| `npm run storybook` | Start Storybook development server |
| `npm run build-storybook` | Build Storybook as static files |
| `npm run lint` | Run ESLint |

---

## 🐳 Docker

### Development Mode (with hot-reload)

```bash
docker-compose --profile dev up --build
```

Access at **http://localhost:6006**

### Production Mode (static build with nginx)

```bash
docker-compose --profile prod up --build
```

Access at **http://localhost:80**

### Individual Build Commands

```bash
# Build development image
docker build -f Dockerfile.dev -t storybook-dev .

# Build production image
docker build -t storybook-prod .

# Run development container
docker run -p 6006:6006 -v $(pwd):/app storybook-dev

# Run production container
docker run -p 80:80 storybook-prod
```

---

## 🤖 MCP Integration

This design system includes the `@storybook/addon-mcp` addon, enabling AI agents (like Cursor, Claude, etc.) to interact with your components.

### MCP Endpoint

When Storybook is running, the MCP server is available at:

```
http://localhost:6006/mcp
```

### Cursor IDE Configuration

Add this to your Cursor settings (`.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "storybook": {
      "url": "http://localhost:6006/mcp"
    }
  }
}
```

Now AI agents can:
- Get story URLs for testing
- Retrieve component documentation
- Access component metadata and controls

---

## 🎨 Design Tokens

The design system uses GOV.cz CSS custom properties:

```css
/* Text colors (problematic - see Known Issues) */
--gov-text-primary      /* Should be dark in light mode, light in dark mode */
--gov-text-secondary
--gov-text-disabled

/* Primary colors */
--gov-primary-500: #2362a2   /* GOV.cz blue */
--gov-primary-600: #1e5086

/* Neutrals */
--gov-neutral-0: #ffffff
--gov-neutral-950: #262626
```

> ⚠️ **Note:** Many components have been patched with hardcoded hex values due to theming issues. See "Known Issues" section.

---

## 📁 Project Structure

```
storybook_ds/
├── .storybook/              # Storybook configuration
│   ├── main.js              # Addons, framework config
│   ├── preview.js           # Global decorators, parameters
│   ├── preview-head.html    # Custom HTML head
│   └── theme.js             # Storybook UI theme
├── src/
│   ├── components/          # React components (GOV.cz based)
│   │   ├── Button/          # Primary action button
│   │   ├── Card/            # Content container
│   │   ├── Checkbox/        # Form checkbox
│   │   ├── ColorTokens/     # Color token documentation
│   │   ├── Datepicker/      # Date selection
│   │   ├── FileUpload/      # File upload input
│   │   ├── Footer/          # Page footer
│   │   ├── Header/          # Page header with navigation
│   │   ├── Icon/            # Icon component
│   │   ├── Input/           # Text input field
│   │   ├── LanguageSwitcher/# Language toggle
│   │   ├── Radio/           # Radio button group
│   │   ├── Select/          # Dropdown select
│   │   ├── SizeTokens/      # Size token documentation
│   │   └── TypographyTokens/# Typography documentation
│   ├── index.css            # Global styles & design tokens
│   └── main.jsx             # React entry point
├── results/                 # AI Agent experiment results
│   ├── agent_01/            # NPM approach (FAILED)
│   └── agent_02/            # Figma approach (SUCCESS)
├── Dockerfile               # Production build (nginx)
├── Dockerfile.dev           # Development (Playwright + hot-reload)
├── docker-compose.yml       # Container orchestration
├── package.json             # Dependencies
└── package-lock.json        # Locked dependency versions
```

---

## 🧪 Experiment Results

This repository includes results from an **AI Agent Implementation Contest** comparing different approaches to building GOV.cz compliant applications.

### The Challenge

Build a complete GOV.cz form application with:
- Homepage with 3 form cards
- Working requalification form with 12+ sections
- Czech + English language support
- PDF export capability
- File upload with drag & drop
- WCAG 2.1 AA accessibility

### Approaches Tested

| Approach | Agent | Method | Result |
|----------|-------|--------|--------|
| **NPM Packages** | agent_01 | Use official `@gov-design-system-ce/react` | ❌ **FAILED** (6/50) |
| **Figma + Custom** | agent_02 | Build components from Figma designs | ✅ **SUCCESS** (42/50) |

### Key Findings

| What Works ✅ | What Doesn't Work ❌ |
|---------------|---------------------|
| Pre-built custom components | npm packages only |
| Figma as design reference | Reading package documentation |
| Explicit component mapping | Implicit understanding |
| Copy-paste approach | Complex component APIs |

### Running the Experiments

```bash
# Agent 01 (NPM approach) - port 5175
cd results/agent_01
npm install
docker-compose up -d
# → http://localhost:5175

# Agent 02 (Figma approach) - port 5177
cd results/agent_02
npm install
docker-compose up -d
# → http://localhost:5177
```

### Conclusion

> **AI excels at USING pre-built components but FAILS at importing and configuring npm packages.**

The recommended workflow for AI-assisted GOV.cz development:
1. BUILD components in Storybook first (human or AI-assisted)
2. COPY component files to new project
3. LET AI wire up the components (routing, state, form logic, i18n)

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-component`)
3. Commit your changes (`git commit -m 'Add amazing component'`)
4. Push to the branch (`git push origin feature/amazing-component`)
5. Open a Pull Request

---

## 📄 License & Attribution

This project is based on the **[GOV.cz Design System](https://designsystem.gov.cz/)** created by the Digital and Information Agency of the Czech Republic.

| Source | License |
|--------|---------|
| GOV.cz Design System components & tokens | [EUPL v1.2](https://eupl.eu/) |
| This Storybook implementation | MIT |

> **Note:** This is an independent experimental project reusing publicly available GOV.cz components. It is not an official GOV.cz product. The original design system is freely available for use by anyone.

---

## 🔗 Links

- [Storybook Documentation](https://storybook.js.org/docs)
- [Storybook MCP Addon](https://storybook.js.org/addons/@storybook/addon-mcp)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
