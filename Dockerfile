FROM node:8.16-alpine
# CLEANUP: docker rmi $(docker images | grep '<none>' | awk '{print $3}')
# docker build -t npm/tests:local .

WORKDIR /sandbox/test

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["npm", "start"]

EXPOSE 4000