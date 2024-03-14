FROM node

# Defina o diretório de trabalho
WORKDIR /usr/src/pesquisa

# Copie os arquivos de pacote.json e package-lock.json
COPY package*.json ./

# Instale as dependências

# Copie os arquivos restantes
COPY . .


RUN npm install


# Defina as variáveis de ambiente
ENV PORT=3333

# Instale o Next.js globalmente
RUN npm install -g next

# Construa a aplicação
RUN npm run build

# Inicie o servidor
CMD ["npm", "run","build"]
