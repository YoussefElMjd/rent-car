FROM node:18-alpine as deps

RUN apk add --no-cache libc6-compat python3-dev git
WORKDIR /usr/src/app

COPY . .
RUN npm install

RUN npm run build
EXPOSE 9000
CMD ["npm","run","start"]

