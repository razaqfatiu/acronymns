FROM node:16

WORKDIR /app

COPY package*.json config ./

RUN npm install

COPY . .

ENV PORT=8001

EXPOSE 8001

CMD [ "npm", "start" ]