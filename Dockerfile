FROM node:16-alpine AS builder

WORKDIR /home/node/app

COPY . /home/node/app

RUN yarn install --frozen-lockfile --no-cache --silent

RUN yarn build


FROM node:16-alpine
ENV NODE_ENV=production
WORKDIR /home/node/app

RUN yarn global add serve

COPY --from=builder /home/node/app/build ./build

EXPOSE 23333

CMD serve -s build -p 23333
