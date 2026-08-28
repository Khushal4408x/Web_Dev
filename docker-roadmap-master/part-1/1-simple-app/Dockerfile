FROM node:22 AS dependencies

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm ci --omit=dev
COPY . .

FROM gcr.io/distroless/nodejs22-debian13
WORKDIR /usr/src/app
COPY --from=dependencies /usr/src/app  /usr/src/app
EXPOSE 3000
#before this we are building the image
CMD ["index.js"]

#this only runs when u run the image   



