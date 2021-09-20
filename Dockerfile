FROM node:latest

RUN mkdir -p /msg-app/src

WORKDIR /msg-app/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3005

CMD ["npm", "start"]