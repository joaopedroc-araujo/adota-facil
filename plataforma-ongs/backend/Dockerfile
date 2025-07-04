FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev
EXPOSE 4000
CMD ["node", "dist/main.js"]
