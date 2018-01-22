FROM node:8
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
RUN npm install pm2 -g
COPY . /app
EXPOSE 8081
CMD ["pm2-docker", "start", "process.json"]