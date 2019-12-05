# Use Node to build the React App.
FROM node:10 as builder

WORKDIR /app

COPY ./package.json /app/package.json
RUN yarn install --prod

COPY ./src /app/src
COPY ./public /app/public
COPY .env /app/

ARG REACT_APP_ENV=production

RUN yarn build

RUN yarn run delete-maps

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html

# Copy the nginx config for setting up the nginx server
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80