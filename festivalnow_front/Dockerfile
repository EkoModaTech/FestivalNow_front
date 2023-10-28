FROM node:20-alpine3.17 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/festivalnow_front/ /usr/share/nginx/html
EXPOSE 80
