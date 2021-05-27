FROM node:14.16.1-alpine3.11

WORKDIR /app

ENV DB_HOST = ""
ENV DB_NAME = ""
ENV DB_USER = ""
ENV DB_PASS = ""
ENV DB_ENGINE = ""

COPY package*.json ./
RUN npm install --silent

COPY . .

ENTRYPOINT npm start
