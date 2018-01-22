FROM node:8
WORKDIR /usr/src/app
COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
RUN npm install yarn -g
RUN npm install pm2 -g
RUN yarn
COPY . /usr/src/app
EXPOSE 8081
CMD ["pm2-docker", "start", "process.json"]