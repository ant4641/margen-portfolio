# Stage 1: Build the application
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files and install all dependencies (including devDependencies)
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build both front-end (vite build) and back-end (esbuild server.ts)
RUN npm run build

# Stage 2: Run the production application
FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy built assets and server from the builder stage
COPY --from=builder /app/dist ./dist

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port the server listens on
EXPOSE 3000

# Run the production server
CMD ["node", "dist/server.cjs"]
