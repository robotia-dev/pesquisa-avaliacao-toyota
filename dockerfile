FROM node:20 AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# Estágio de produção
FROM node:20 AS production
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY package.json yarn.lock ./
RUN yarn install --production
CMD ["yarn", "start"]