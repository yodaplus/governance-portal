FROM node:14

EXPOSE 3000

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

WORKDIR /app

RUN yarn --no-progress --non-interactive --frozen-lockfile

COPY ./lib/ /app/lib
COPY ./modules/ /app/modules
COPY ./pages/ /app/pages
COPY ./public/ /app/public
COPY ./public/ /app/public
COPY ./types/ /app/types

COPY ./.babelrc /app/.babelrc
COPY ./codecov.yml /app/codecov.yml
COPY ./codegen.yml /app/codegen.yml
COPY ./.eslintignore /app/.eslintignore
COPY ./.eslintrc /app/.eslintrc
COPY ./graphql.schema.json /app/graphql.schema.json
COPY ./next.config.js /app/next.config.js
COPY ./next-env.d.ts /app/next-env.d.ts
COPY ./.prettierrc /app/.prettierrc
COPY ./sentry.client.config.js /app/sentry.client.config.js
COPY ./sentry.properties /app/sentry.properties
COPY ./sentry.server.config.js /app/sentry.server.config.js
COPY ./server.js /app/server.js
COPY ./tsconfig.json /app/tsconfig.json

RUN yarn build

CMD [ "yarn", "start" ]