#stage 1
FROM node:10-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod



#stage 2
FROM nginx:1.17.1-alpine
LABEL author="Pedro Dias"
COPY --from=build-step /app/dist/todoapp  /usr/share/nginx/html


# FROM node:13.11.0-alpine as node
# LABEL authors="Pedro Dias"
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build -- --prod

# FROM nginx:1.13.12-alpine
# COPY --from=node /usr/src/app/dist/todoapp /usr/share/nginx/html
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Client App
# FROM johnpapa/angular-cli as client-app
# LABEL authors="John Papa"
# WORKDIR /usr/src/app
# COPY ["package.json", "npm-shrinkwrap.json*", "./"]
# RUN npm install --silent
# COPY . .
# RUN ng build --prod

# # Node server
# FROM node:12-alpine as node-server
# WORKDIR /usr/src/app
# COPY ["package.json", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
# COPY server.js .
# COPY /server /usr/src/app/server

# # Final image
# FROM node:12-alpine
# WORKDIR /usr/src/app
# COPY --from=node-server /usr/src /usr/src
# COPY --from=client-app /usr/src/app/dist ./
# EXPOSE 3000
# # CMD ["node", "server.js"]
# CMD ["npm", "start"]
