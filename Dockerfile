# Stage 1: Build
FROM node:20.18-alpine AS builder

RUN apk update && apk upgrade

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --immutable --mode=production

COPY . .

RUN yarn build && yarn cache clean

# Stage 2: Serve with Next build-in server
FROM node:20.18-alpine
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000
CMD ["yarn", "start"]
