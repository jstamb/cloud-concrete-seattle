# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the Astro app (static output)
RUN npm run build

# Production stage - nginx for static files
FROM nginx:alpine

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files from Astro
COPY --from=builder /app/dist /usr/share/nginx/html

# Cloud Run uses port 8080
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
