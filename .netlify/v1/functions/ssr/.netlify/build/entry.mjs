import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CIUaPIYl.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/activites/_id_.astro.mjs');
const _page2 = () => import('./pages/activites.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/festival.astro.mjs');
const _page5 = () => import('./pages/invites/_id_.astro.mjs');
const _page6 = () => import('./pages/invites.astro.mjs');
const _page7 = () => import('./pages/programme/_id_.astro.mjs');
const _page8 = () => import('./pages/programme.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/activites/[id].astro", _page1],
    ["src/pages/activites/index.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/festival.astro", _page4],
    ["src/pages/invites/[id].astro", _page5],
    ["src/pages/invites/index.astro", _page6],
    ["src/pages/programme/[id].astro", _page7],
    ["src/pages/programme/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4ca414d5-22ef-4468-b14f-1a03084f7aec"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
