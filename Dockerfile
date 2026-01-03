# ========================================
# Storybook Design System - Dockerfile
# ========================================

# Stage 1: Dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install

# Stage 2: Development (for local development with hot-reload)
FROM node:20-alpine AS development
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 6006
CMD ["npm", "run", "storybook", "--", "--host", "0.0.0.0"]

# Stage 3: Build Storybook static files
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build-storybook

# Stage 4: Production (static file server)
FROM nginx:alpine AS production
COPY --from=builder /app/storybook-static /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

