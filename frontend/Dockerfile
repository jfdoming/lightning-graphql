FROM node:14.19.3-slim

WORKDIR /app

COPY package*.json ./
RUN npm install --silent

COPY . ./

EXPOSE 3000
ENTRYPOINT ["npm", "start"]
