FROM node:18-alpine

WORKDIR /app

COPY package.json .
COPY tsconfig.json .

RUN npm install

COPY src ./src
COPY html ./html

RUN npm run build

EXPOSE 80

CMD ["npm", "start"]
