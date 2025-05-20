FROM node:18-alpine3.19.1
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
EXPOSE 4000
CMD ["yarn", "start:prod"]
