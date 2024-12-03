FROM node:16-alpine

COPY . /app

WORKDIR /app

RUN npm install

CMD ["node","index.js"]