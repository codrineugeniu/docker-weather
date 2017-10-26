FROM node:latest

WORKDIR /src

COPY package.json .

RUN npm i

ENV APIKEY <WU API KEY>
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

