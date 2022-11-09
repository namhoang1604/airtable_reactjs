# Base image
FROM --platform=linux/amd64 node:16-alpine as build

RUN apk update; apk add curl
RUN apk add g++ make py3-pip

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN mkdir -p node_modules/node-sass/vendor/linux-x64-72
RUN curl -L https://github.com/sass/node-sass/releases/download/v7.0.3/linux-x64-72_binding.node -o node_modules/node-sass/vendor/linux-x64-72/binding.node

# Install app dependencies
RUN npm install
RUN npm rebuild node-sass

COPY . ./

# CMD [ "npm", "start" ]

RUN npm run build

# production environment
FROM nginx:1.23.2-alpine
COPY --from=build /usr/src/app/build/ /usr/share/nginx/html

COPY --from=build /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]