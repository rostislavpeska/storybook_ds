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
| **Button** | Primary UI interaction component with multiple variants (primary, secondary, ghost, danger) and sizes |
| **Card** | Content container with various visual styles (elevated, outlined, ghost) |

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
├── .storybook/          # Storybook configuration
│   ├── main.js          # Addons, framework config
│   └── preview.js       # Global decorators, parameters
├── src/
│   ├── components/      # React components
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.css
│   │   │   ├── Button.stories.jsx
│   │   │   └── index.js
│   │   └── Card/
│   │       └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css        # Global styles & design tokens
├── Dockerfile           # Multi-stage production build
├── Dockerfile.dev       # Development with hot-reload
├── docker-compose.yml   # Docker Compose configuration
├── nginx.conf           # Nginx config for production
└── package.json
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-component`)
3. Commit your changes (`git commit -m 'Add amazing component'`)
4. Push to the branch (`git push origin feature/amazing-component`)
5. Open a Pull Request

---

## 📄 License

MIT License - feel free to use this design system in your projects!

---

## 🔗 Links

- [Storybook Documentation](https://storybook.js.org/docs)
- [Storybook MCP Addon](https://storybook.js.org/addons/@storybook/addon-mcp)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
