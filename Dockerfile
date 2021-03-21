# official base image
FROM node:14.16.0

RUN apt update && apt install -y sqlite3 node-sqlite3

# set working directory
WORKDIR /app
COPY package.json ./

# install app dependencies
RUN npm install --build-from-source

# add app
COPY . .

EXPOSE 4000

# run migrations
RUN npm install -g sequelize-cli
RUN sequelize db:migrate
