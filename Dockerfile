FROM node:14-alpine as build

# Install git
RUN apk update && apk upgrade && \
    apk add --no-cache git

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm config set unsafe-perm true
RUN npm install

COPY . .

RUN npm run build


# production environment
FROM nginx:alpine

# Install bash & curl
RUN apk update && apk upgrade && \
    apk add --no-cache bash curl

# Install Sentry CLI
RUN curl -sL https://sentry.io/get-cli/ | bash

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx

COPY --from=build /usr/src/app/.git ./.git/
COPY --from=build /usr/src/app/uploadSourceMapsToSentry.sh ./
COPY --from=build /usr/src/app/build ./html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
