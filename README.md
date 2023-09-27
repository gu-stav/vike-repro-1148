## Reproduction of https://github.com/vikejs/vike/discussions/1148

## Setup

```bash
pnpm i
cd apps/dev
pnpm build && pnpm start
```

leads to (vite-plugin-ssr@0.4.140 running `pnpm build && pnpm start`)

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

leads to (vike@0.4.142 running `pnpm build`)

```
> dev@1.0.0 build /Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/apps/dev
> unding build

vite v4.4.9 building for production...
transforming (1) ../../../../apps/dev/virtual:vike:pageConfigValuesAll:client:/pages/indexvite v4.4.9 building SSR bundle for production...
✓ 29 modules transformed.
../../../../apps/dev/dist/server/vike.json                0.24 kB
../../../../apps/dev/dist/server/importBuild.mjs          0.20 kB
../../../../apps/dev/dist/server/pageFiles.mjs            1.88 kB
../../../../apps/dev/dist/server/entries/pages_index.mjs  4.36 kB
[vike:buildConfig] [vike@0.4.142][Bug] You stumbled upon a bug in Vike's source code. Go to https://github.com/vikejs/vike/issues/new and copy-paste this error; a maintainer will fix the bug (usually under 24 hours).
✓ built in 449ms
Error: [vike@0.4.142][Bug] You stumbled upon a bug in Vike's source code. Go to https://github.com/vikejs/vike/issues/new and copy-paste this error; a maintainer will fix the bug (usually under 24 hours).
    at Object.writeBundle (file:///Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/vike@0.4.142_vite@4.4.9/node_modules/vike/dist/esm/node/plugin/plugins/buildConfig.js:54:17)
    at file:///Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/rollup@3.28.1/node_modules/rollup/dist/es/shared/node-entry.js:25461:40
    at async Promise.all (index 2)
    at PluginDriver.hookParallel (file:///Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/rollup@3.28.1/node_modules/rollup/dist/es/shared/node-entry.js:25389:9)
    at file:///Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/rollup@3.28.1/node_modules/rollup/dist/es/shared/node-entry.js:26701:13
    at catchUnfinishedHookActions (file:///Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/rollup@3.28.1/node_modules/rollup/dist/es/shared/node-entry.js:25827:16)
    at Module.build (file:///Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/node_modules/.pnpm/vite@4.4.9/node_modules/vite/dist/node/chunks/dep-df561101.js:48011:22)
    at async Promise.all (index 1)
    at Command.build (file:///Users/gu-stav/Development/unding-vite-plugin-ssr-wrapper-repro/packages/unding/src/cli/build.js:24:5)
 ELIFECYCLE  Command failed with exit code 1.
```
