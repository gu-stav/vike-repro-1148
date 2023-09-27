## Reproduction of https://github.com/vikejs/vike/discussions/1148

## Setup

```bash
pnpm i
cd apps/dev
pnpm build && pnpm start
```

leads to

```
> dev@1.0.0 start /Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/apps/dev
> unding start

Server running at http://localhost:4000
Error: [vite-plugin-ssr@0.4.140][Bug] You stumbled upon a bug in vite-plugin-ssr's source code. Go to https://github.com/brillout/vite-plugin-ssr/issues/new and copy-paste this error; a maintainer will fix the bug (usually under 24 hours).
    at assertEnv (file:///Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/vite-plugin-ssr@0.4.140_vite@4.4.9/node_modules/vite-plugin-ssr/dist/esm/utils/assertIsNotProductionRuntime.js:38:9)
    at renderPage (file:///Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/vite-plugin-ssr@0.4.140_vite@4.4.9/node_modules/vite-plugin-ssr/dist/esm/node/runtime/renderPage.js:36:5)
    at file:///Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/packages/unding/src/studio/index.js:24:35
    at Layer.handle [as handle_request] (/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/express@4.18.2/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/express@4.18.2/node_modules/express/lib/router/route.js:144:13)
    at Route.dispatch (/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/express@4.18.2/node_modules/express/lib/router/route.js:114:3)
    at Layer.handle [as handle_request] (/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/express@4.18.2/node_modules/express/lib/router/layer.js:95:5)
    at /Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/express@4.18.2/node_modules/express/lib/router/index.js:284:15
    at param (/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/express@4.18.2/node_modules/express/lib/router/index.js:365:14)
    at param (/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/express@4.18.2/node_modules/express/lib/router/index.js:376:14)
    at Function.process_params (/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/express@4.18.2/node_modules/express/lib/router/index.js:421:3)
    at next (/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/express@4.18.2/node_modules/express/lib/router/index.js:280:10)
    at SendStream.error (/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/serve-static@1.15.0/node_modules/serve-static/index.js:121:7)
    at SendStream.emit (node:events:526:28)
    at SendStream.error (/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/send@0.18.0/node_modules/send/index.js:270:17)
    at SendStream.onStatError (/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/send@0.18.0/node_modules/send/index.js:417:12)
    at next (/Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/send@0.18.0/node_modules/send/index.js:759:28)
    at /Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/send@0.18.0/node_modules/send/index.js:767:23
    at FSReqCallback.oncomplete (node:fs:198:21)
```
