FROM node:16 as build


# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN yarn install
RUN yarn run build

FROM nginx:alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html