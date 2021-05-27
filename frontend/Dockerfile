FROM node:14.16.1-alpine3.11 as build

WORKDIR /app

COPY package*.json ./
RUN npm install --silent

COPY src src
COPY public public

RUN npm run build

FROM nginx:1.17.1-alpine

ENV REACT_APP_API_URL = ""

COPY --from=build /app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
