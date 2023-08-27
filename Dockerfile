FROM node:18-alpine as main
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/
COPY package*.json .
RUN npm install
COPY . .

# DEVELOPENT ENVIRONMENT STAGE
FROM main as dev
EXPOSE 3000
CMD [ "npm", "run", "dev:docker" ]

# STAGING ENVIRONMENT STAGE
FROM main as build
RUN npm run build:docker

# PRODUCTION ENVIRONMENT STAGE
FROM nginx:1.21.6-alpine as prod
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]