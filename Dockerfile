FROM node:16.3.0-alpine as builder

WORKDIR /app

COPY ./package*.json ./

COPY . /app

WORKDIR /app/frontend

RUN yarn
RUN yarn build

ENV NODE_ENV=production

EXPOSE 3000

CMD [ "yarn", "start" ]