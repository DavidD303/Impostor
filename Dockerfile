FROM mcr.microsoft.com/dotnet/core/sdk:latest AS build-client
WORKDIR /build
COPY ./client client
COPY ./Hazel-dotNETCore Hazel-dotNETCore
WORKDIR /build/client
RUN dotnet publish -r linux-x64 --self-contained true -c release -o /out

FROM node:latest AS build-bot
WORKDIR /build
COPY ./bot .
RUN npm install
RUN ./node_modules/.bin/tsc

FROM node:latest
LABEL org.opencontainers.image.source=https://github.com/aPinat/Impostor
WORKDIR /app
COPY --from=build-client /out ./client
COPY --from=build-bot /build ./bot
ENV AU_CLIENT_DIR /app/client
WORKDIR /app/bot
CMD sleep 5 && node ./dist/index.js