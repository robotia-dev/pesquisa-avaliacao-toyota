FROM node:20 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Estágio de produção
FROM node:20 AS production
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY package.json package-lock.json ./
RUN npm install --production
CMD ["npm", "run", "start"]
