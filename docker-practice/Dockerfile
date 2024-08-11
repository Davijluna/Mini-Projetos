# Definindo a imagem da aplicação
FROM node:16-alpine 

# definindo o diretório de trabalho. onde eu quero salvar 
WORKDIR /app

# comiando para a pasta do projeto.
COPY package*.json ./

# execuntando o comando para instalar
RUN npm install

# copiando tudo para usar na pasta do projeto
COPY . .

#  expondo a porta do container para usar
EXPOSE 3000

# rodando o comando para iniciar a aplicação
CMD [ "npm", "start"]