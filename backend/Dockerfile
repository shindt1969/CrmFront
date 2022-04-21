FROM node:14

WORKDIR /backend
COPY package.json .
RUN npm install
# RUN XXX
COPY . .
CMD npm start