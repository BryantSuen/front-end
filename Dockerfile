FROM node:16-alpine AS builder

WORKDIR /home/node/app

COPY . /home/node/app

RUN yarn install --frozen-lockfile --no-cache --silent

RUN yarn build

# nginx
FROM nginx:1.21.6-alpine
COPY --from=builder /home/node/app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 23333