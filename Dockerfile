FROM node:20-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY /.next ./.next
COPY /node_modules ./node_modules
COPY package.json ./package.json

EXPOSE 80

CMD ["pnpm", "start"]
