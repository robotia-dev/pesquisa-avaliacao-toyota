# Use a imagem oficial do Node.js como base
FROM node:14 AS build

# Defina o diretório de trabalho
WORKDIR /app

# Copie o package.json e o yarn.lock para o diretório de trabalho
COPY package.json json.lock.json ./

# Instale as dependências
RUN npm install

# Copie o código-fonte do aplicativo
COPY . .

# Execute o build do Next.js
RUN npm run build

# Use a imagem oficial do NGINX como base
FROM nginx:alpine

# Copie os arquivos de build do Next.js para o diretório de publicação do NGINX
COPY --from=build /app/out /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80

# Inicie o NGINX
CMD ["nginx", "-g", "daemon off;"]