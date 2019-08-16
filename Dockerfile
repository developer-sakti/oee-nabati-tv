FROM node:lts-slim
RUN mkdir -p /frontend
WORKDIR /frontend
RUN apt update \
    && apt upgrade -y \
    && apt install build-essential -y \
    && apt autoremove -y \
    && apt clean \
    && npm i -g npm
COPY . /frontend
RUN npm i
ENV NODE_ENV production
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 3000
RUN npm run build
RUN npm cache clear

EXPOSE 3000
CMD ["npm", "start"]