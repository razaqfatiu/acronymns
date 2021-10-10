FROM node:14

RUN mkdir -p /app && chown -R node:node /app

WORKDIR /app

COPY package*.json config acronyms.json .babelrc ./

USER node

RUN npm install

COPY --chown=node:node . .

ENV PORT=8001

EXPOSE 8001

CMD [ "npm", "start" ]