FROM node:18
WORKDIR /app
RUN npm install -g @angular/cli
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4200
# O --host 0.0.0.0 é OBRIGATÓRIO para o Docker "conversar" com o seu navegador
CMD ["ng", "serve", "--host", "0.0.0.0"]