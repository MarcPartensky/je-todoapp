FROM node:latest

COPY . /app
WORKDIR /app

RUN yarn install
RUN yarn build

ENTRYPOINT ["yarn", "start"]
