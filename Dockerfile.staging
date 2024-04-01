# build stage
FROM node:18.17.0-alpine as build-stage

# Node ENV
ENV GENERATE_SOURCEMAP=false
ENV NODE_OPTIONS=--max-old-space-size=8192

# Project ENV
ENV VITE_IOT_PLATFORM_API_ENDPOINT="http://13.76.193.149:5000"
ENV VITE_E_SERVICE_API_ENDPOINT="http://13.76.193.149:8000/api"

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
