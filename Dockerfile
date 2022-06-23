FROM node:16
WORKDIR /app
COPY . .

RUN yarn install --frozen-lockfile

RUN yarn build

ENV NODE_ENV production

EXPOSE 8080

ENV PORT 8080

CMD yarn serve -p 8080 -H 0.0.0.0