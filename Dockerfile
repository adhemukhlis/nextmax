ARG NODE=node:20.9.0-alpine

FROM ${NODE} as dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn config set strict-ssl false
RUN yarn install --network-timeout 900000

FROM ${NODE} as builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN yarn build

FROM ${NODE} as runner
WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app/yarn.lock .
# COPY --from=builder /app/next-i18next.config.js .
COPY --from=builder /app/next.config.ts .
COPY --from=builder /app/.env .
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 3000

CMD ["yarn", "start"]
