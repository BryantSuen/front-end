FROM node:16 AS builder

WORKDIR /home/node/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --no-cache

COPY . .

RUN yarn build


FROM node:16-alpine
ENV NODE_ENV=production
WORKDIR /home/node/app

RUN yarn global add serve

COPY --from=builder /home/node/app/build ./build

EXPOSE 23333

CMD serve -s build -p 23333
