FROM node:lts as dependencies
WORKDIR /humoq-fe
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /humoq-fe
COPY . .
COPY --from=dependencies /humoq-fe/node_modules ./node_modules
RUN yarn build

FROM node:lts as runner
WORKDIR /humoq-fe
ENV NODE_ENV production

COPY --from=builder /humoq-fe/next.config.js ./
COPY --from=builder /humoq-fe/public ./public
COPY --from=builder /humoq-fe/.next ./.next
COPY --from=builder /humoq-fe/node_modules ./node_modules
COPY --from=builder /humoq-fe/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
