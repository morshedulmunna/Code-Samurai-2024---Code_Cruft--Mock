# Use an official Node.js, and it should be version 16 and above
FROM node:lts-bullseye-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
