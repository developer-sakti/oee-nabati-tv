FROM node:lts-slim

# ARG NODE_ENV
ARG TV_PORT
ARG API_URL

# ENV NODE_ENV=${NODE_ENV}
ENV NODE_ENV=development
ENV API_URL=${API_URL}
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=${TV_PORT}

RUN mkdir -p /frontend
WORKDIR /frontend

RUN apt update
RUN apt upgrade -y
RUN apt install python -y
RUN npm config set python /usr/bin/python
RUN npm i -g npm

COPY package.json .
RUN npm i

COPY . .
RUN npm run build

EXPOSE ${TV_PORT}
CMD ["npm", "start"]
