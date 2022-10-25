FROM node:alpine


RUN apk add --no-cache bash



WORKDIR /home/node/app



COPY package*.json ./

# COPY tsconfig.json ./

COPY . .


# CMD ["npm","run","dev"]