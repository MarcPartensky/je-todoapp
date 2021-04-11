FROM node:latest

RUN npm i -g serve

COPY /build /build

ENTRYPOINT ["serve", "-s", "build"]
