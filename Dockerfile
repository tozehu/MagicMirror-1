ENV GOOS=linux \
    GOARCH=arm \
    GOARM=7

FROM arm32v7/alpine:latest

RUN apk update && apk upgrade && \
    apk add --no-cache bash git

ENV NODE_ENV production
WORKDIR /opt/magic_mirror

RUN git clone --depth 1 -b master https://github.com/MichMich/MagicMirror.git .
RUN cp -R modules /opt/default_modules
RUN cp -R config /opt/default_config
RUN npm install --unsafe-perm --silent

COPY server-only-default-config.js docker-entrypoint.sh ./
RUN chmod +x ./docker-entrypoint.sh

EXPOSE 8080
ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["node", "serveronly"]
