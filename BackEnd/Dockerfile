FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
# "dev" porque seu README dizia que o comando é 'npm run dev'
CMD ["npm", "run", "dev"]