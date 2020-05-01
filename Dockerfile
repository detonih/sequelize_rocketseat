FROM node:alpine

WORKDIR /usr/app

COPY ./ ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm", "start"]