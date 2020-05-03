FROM node:12-alpine AS build

ARG BVG_API_KEY
RUN if [ -z ${BVG_API_KEY} ];then \
  >&2 echo "BVG_API_KEY is a required parameter - see the readme for details";\
  fi

WORKDIR /usr/src/app

COPY traffic-information-app/package.json .
RUN npm install

COPY ./traffic-information-app .
COPY ./api /usr/src/api

ENV BVG_API_KEY=${BVG_API_KEY}
RUN npm run build

# Run
FROM nginx:1.17.10
LABEL maintainer="Olof Nord"
COPY --from=build /usr/src/app/dist/traffic-information-app /usr/share/nginx/html
