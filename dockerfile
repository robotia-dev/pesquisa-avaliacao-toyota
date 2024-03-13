# Estágio de builder
FROM node:20 AS builder
WORKDIR /home/node/app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Estágio de produção
FROM node:20 AS production
WORKDIR /home/node/app
COPY --from=builder /home/node/app/.next ./home/node/.next
COPY package.json package-lock.json ./
RUN npm install --production
CMD ["npm", "run", "start"]
