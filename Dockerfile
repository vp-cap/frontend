### STAGE 1: Build ###
FROM node:10.23.0-alpine3.9 AS build
RUN apk add g++ make python
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/vp-cap-frontend /usr/share/nginx/html