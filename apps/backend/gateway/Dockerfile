FROM node:16.14-alpine

WORKDIR /app-backend

COPY package* ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]