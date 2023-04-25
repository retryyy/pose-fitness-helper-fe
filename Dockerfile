FROM node:18-alpine AS build
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/pose-fitness-helper/ /usr/share/nginx/html
EXPOSE 80
