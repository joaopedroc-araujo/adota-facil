# Etapa base
FROM node:18-alpine AS base

# Etapa de build
FROM base AS builder
WORKDIR /home/node/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

# Etapa de produção
FROM base AS runtime
WORKDIR /home/node/app
ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build
EXPOSE 3000
CMD ["node", "dist/server.js"]
