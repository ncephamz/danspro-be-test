# syntax=docker/dockerfile:1

FROM node:14.17.6

ENV NODE_ENV=development

WORKDIR /home/restify/danspro-be-test

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "dev" ]