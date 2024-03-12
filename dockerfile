# Use a imagem oficial do Node.js como base
FROM node:20-slim

# Defina o diretório de trabalho
WORKDIR /home/node/app

# Copie o package.json 
COPY package.json ./

# Instale as dependências
RUN yarn install

# Copie o código-fonte do aplicativo
COPY . .

# Execute o build do Next.js
RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]

