# Etapa 1: build
FROM node:18-alpine3.19.1 AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Etapa 2: produção
FROM node:18-alpine3.19.1
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["yarn", "dev"]
