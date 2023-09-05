# Base stage
FROM node:18.16.0-alpine3.18 as base

RUN \
    --mount=type=cache,target=/var/cache/apk -- \
    apk -U upgrade && \
    apk add --no-cache \
    coreutils \
    jq \
    yarn \
    git \
    curl \
    bash \
    openssh \
    sudo

# Env stage
FROM base AS environment

WORKDIR /home/node/workspace/onboarding_dude

RUN npm i -g pnpm typecript @nestjs/cli

RUN \
    echo "node ALL=(ALL) ALL" > /etc/sudoers.d/node && \
    chmod 0440 /etc/sudoers.d/node

RUN \
    mkdir -p /home/node/workspace/onboarding_dude && \
    chown -R node:node /home/node

USER node

ARG NODE_ENV=development

ENV NODE_ENV=${NODE_ENV}

RUN echo "->> Setting up the development environment. "