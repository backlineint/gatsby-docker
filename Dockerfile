FROM node:16
WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile

RUN yarn build

ENV NODE_ENV production

EXPOSE 9000

ENV PORT 9000

CMD yarn serve -H 0.0.0.0