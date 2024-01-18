import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_hKP9z1LY.mjs';

const _page0  = () => import('./chunks/generic_QZUazpZ6.mjs');
const _page1  = () => import('./chunks/index_RiBUTURs.mjs');
const _page2  = () => import('./chunks/index_Ri8kIG7d.mjs');
const _page3  = () => import('./chunks/thanks_hnHAS-xu.mjs');
const _page4  = () => import('./chunks/index_RPQi0emL.mjs');
const _page5  = () => import('./chunks/form_RPqpS0mk.mjs');
const _page6  = () => import('./chunks/_.._Dn6HEulU.mjs');
const _page7  = () => import('./chunks/_id__FC0VLgEX.mjs');
const _page8  = () => import('./chunks/_.._kwTmBOyn.mjs');
const _page9  = () => import('./chunks/_.._UwEWKkRF.mjs');
const _page10  = () => import('./chunks/_id__wCM4oVH-.mjs');
const _page11  = () => import('./chunks/_.._AJUkMTxF.mjs');
const _page12  = () => import('./chunks/index_c4v3RXfp.mjs');
const _page13  = () => import('./chunks/index_9NclA5_4.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/contact/index.astro", _page2],["src/pages/contact/thanks.astro", _page3],["src/pages/events/index.astro", _page4],["src/pages/events/form.astro", _page5],["src/pages/blog/tag/[tag]/[...page].astro", _page6],["src/pages/blog/[id].astro", _page7],["src/pages/blog/[...page].astro", _page8],["src/pages/news/cate/[cate]/[...page].astro", _page9],["src/pages/news/[id].astro", _page10],["src/pages/news/[...page].astro", _page11],["src/pages/test/index.astro", _page12],["src/pages/404/index.astro", _page13]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
