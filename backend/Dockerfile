FROM node:14
# FROM keymetrics/pm2:latest-alpine
WORKDIR /backend
COPY package.json .
RUN npm install
# RUN npm i bcrypt
RUN npm install -g nodemon
# RUN npm install pm2 -g
# RUN node server.js
# RUN pm2 start -i 4 --server server.js
# RUN XXX
COPY . .
# CMD npm start
EXPOSE 8080
CMD ["nodemon","server.js"]
# CMD [ "pm2-runtime", "start", "ecosystem.config.js"]
# CMD ["npm start","start","pm2-runtime", "server.js","ecosystem.config.js"]
# 利用兩個ENV檔案去控制開發或是正是檔案，建環境的指令去安裝NODEMON，dockerfile 吃 在.env控制 nodemon  