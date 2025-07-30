FROM node:20-alpine

WORKDIR /app

ARG NEXT_PUBLIC_SITE_NAME
ARG API_URL

ENV NEXT_PUBLIC_SITE_NAME=$NEXT_PUBLIC_SITE_NAME
ENV API_URL=$API_URL

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]