import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderSlot, j as renderTransition, k as renderComponent, l as renderHead } from '../astro_1IGbaR9m.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */
/* empty css                          */
import { $ as $$Image } from './generic_KIUYRvf-.mjs';
import { createClient } from 'newt-client-js';
/* empty css                          */
/* empty css                          */
/* empty css                           */

const $$Astro$b = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Container;
  const size = Astro2.props.value || "middle";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`container ${size}`, "class")} data-astro-cid-d6puh33w> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Container.astro", void 0);

const siteMeta = {
  siteTitle: "サイトタイトル",
  siteDesc: "ディスクリプションが入ります。",
  siteUrl: "https://〇〇.jp/"
};
const pageInfo = {
  top: {
    pageTitle: "",
    pageDesc: "",
    pageNoindex: true
  },
  page404: {
    pageTitle: "お探しのページが見つかりませんでした",
    pageDesc: "",
    pageNoindex: true
  }
};

const $$Astro$a = createAstro();
const $$Meta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Meta;
  const { siteTitle, siteDesc, siteUrl } = siteMeta;
  const pageTitle = Astro2.props?.pageTitle ? `${Astro2.props.pageTitle}\uFF5C${siteTitle}` : siteTitle;
  const pageDesc = Astro2.props?.pageDesc ?? siteDesc;
  new URL("/assets/img/favicon.png", siteUrl);
  const ogpImageURL = new URL("/assets/img/ogp.gif", siteUrl);
  const appleSrc = new URL("/assets/img/apple-touch-icon.png", siteUrl);
  const canonicalURL = new URL(Astro2.url.pathname, siteUrl);
  const metaRobots = Astro2.props?.pageNoindex;
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0"><meta name="format-detection" content="telephone=no"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title><meta${addAttribute(pageDesc, "content")} name="description"><!-- <link rel="icon" href={faviconSrc} /> --><link rel="apple-touch-icon"${addAttribute(appleSrc, "href")} sizes="180x180"><meta property="og:title"${addAttribute(pageTitle, "content")}><meta property="og:description"${addAttribute(pageDesc, "content")}><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:image"${addAttribute(ogpImageURL, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site"${addAttribute(canonicalURL, "content")}><meta name="twitter:title"${addAttribute(pageTitle, "content")}><meta name="twitter:description"${addAttribute(pageDesc, "content")}><meta name="twitter:image"${addAttribute(ogpImageURL, "content")}>${metaRobots && renderTemplate`<meta name="robots" content="noindex, follow">`}<!-- sitemap --><link rel="sitemap" href="/sitemap-index.xml">`;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Meta.astro", void 0);

const $$Astro$9 = createAstro();
const $$Loading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Loading;
  return renderTemplate`${maybeRenderHead()}<div class="loading"> <div class="inner"></div> </div> `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Loading.astro", void 0);

const $$Astro$8 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="inner" data-astro-cid-sz7xmlte></div> </footer> `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Footer.astro", void 0);

const navItems = [{
  text: "TOP",
  link: "/",
  load: false
}, {
  text: "BLOG",
  link: "/blog/",
  load: false
}, {
  text: "NEWS",
  link: "/news/",
  load: false
}, {
  text: "EVENT",
  link: "/events/",
  load: false
}];

const $$Astro$7 = createAstro();
const $$Audio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Audio;
  return renderTemplate`${maybeRenderHead()}<div class="sound" data-astro-cid-4q67hhvl> <button class="soundBtn" id="js-btnPlay" aria-label="音声ボタン" data-astro-cid-4q67hhvl> <svg id="soundOn" xmlns="http://www.w3.org/2000/svg" width="22" height="14.3" viewBox="0 0 22 14.3" data-astro-cid-4q67hhvl> <g id="arrow-r01" data-astro-cid-4q67hhvl><path class="soundOn01" d="M0,4.62v5.06H7.32l5.5,4.62V0L7.32,4.62H0ZM17.41,0h-1.1V14.3h1.1V0Zm4.59,0h-1.1V14.3h1.1V0Z" data-astro-cid-4q67hhvl></path></g></svg> </button> <audio id="js-bgm01" preload="" loop="" data-astro-transition-persist="media-player" data-astro-cid-4q67hhvl${addAttribute(renderTransition($$result, "4y2p2qo3", "", "media-player"), "data-astro-transition-scope")}> <source src="/assets/audio/audio.mp3" type="audio/mp3" data-astro-cid-4q67hhvl> </audio> </div>  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Audio.astro", "self");

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="header js-header" data-astro-cid-3ef6ksr2> <div class="inner" data-astro-cid-3ef6ksr2> <a href="/" class="logo" data-astro-cid-3ef6ksr2>ヘッドレスCMS検証</a> <nav class="js-gnav" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> ${navItems.map((item) => renderTemplate`<li class="item" data-astro-cid-3ef6ksr2> ${item.load ? renderTemplate`<a${addAttribute(item.link, "href")} class="link" data-astro-reload data-astro-cid-3ef6ksr2> ${item.text} </a>` : renderTemplate`<a${addAttribute(item.link, "href")} class="link" data-astro-cid-3ef6ksr2> ${item.text} </a>`} </li>`)} </ul> </nav> <a href="/contact/" class="contact" data-astro-cid-3ef6ksr2>CONTACT</a> </div> <div class="audio" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Audio", $$Audio, { "data-astro-cid-3ef6ksr2": true })} </div> </header>  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Header.astro", void 0);

const $$Astro$5 = createAstro();
const $$Wrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Wrapper;
  return renderTemplate`${maybeRenderHead()}<div class="wrapper" data-astro-cid-esqdxlhz> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-esqdxlhz": true })} <main class="main" data-astro-cid-esqdxlhz> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-esqdxlhz": true })} </div>  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Wrapper.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { pageTitle, pageDesc, pageNoindex, pageClass = "" } = Astro2.props;
  return renderTemplate`<html lang="ja"> <head>${renderComponent($$result, "Meta", $$Meta, { "pageTitle": pageTitle, "pageDesc": pageDesc, "pageNoindex": pageNoindex })}<!-- <ViewTransitions /> -->${renderHead()}</head> <body${addAttribute(pageClass, "class")}> ${renderComponent($$result, "Loading", $$Loading, {})} ${renderComponent($$result, "Wrapper", $$Wrapper, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </body></html>`;
}, "/Users/mitsunaga/github/astro-v4_newt/src/layouts/Layout.astro", void 0);

const newtClient = createClient({
  spaceUid: "blog-739442",
  token: "Pb86-VcpsC8uhSmOM_TUb7ElqC6dsC4l0DAEha1OCz4",
  apiType: "cdn"
});

const $$Astro$3 = createAstro();
const $$PageBody = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PageBody;
  return renderTemplate`${maybeRenderHead()}<div class="wrapper js-pageBody" data-astro-cid-7r447ubh> ${renderSlot($$result, $$slots["default"])} </div>  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/PageBody.astro", void 0);

const $$Astro$2 = createAstro();
const $$PageTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PageTitle;
  const { ja, reversal } = Astro2.props;
  const pageTitleClass = reversal ? "pageTitle js-pageTitle reversal" : "pageTitle js-pageTitle";
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-guvttfii": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(pageTitleClass, "class")} data-astro-cid-guvttfii> <h1 class="ja js-word" data-astro-cid-guvttfii><span class="js-word__item" data-astro-cid-guvttfii>${ja}</span></h1> </div> ` })}  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/PageTitle.astro", void 0);

const $$Astro$1 = createAstro();
const $$EventListSelect = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EventListSelect;
  const { tags, limit, classNames } = Astro2.props;
  const tagId = tags && tags;
  const { items: events } = await newtClient.getContents({
    appUid: "event",
    modelUid: "article",
    query: {
      select: ["_id", "_sys", "title", "slug", "body", "coverImage"],
      order: ["-_priority", "-_sys.customOrder"],
      tags: tagId,
      limit
    }
  });
  return renderTemplate`${renderComponent($$result, "PageBody", $$PageBody, { "data-astro-cid-m5m2g6yi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="list" data-astro-cid-m5m2g6yi> ${events.map((eventsItem) => {
    return renderTemplate`<li data-astro-cid-m5m2g6yi> <label class="heading"${addAttribute(eventsItem._id, "for")} data-astro-cid-m5m2g6yi> <input type="checkbox"${addAttribute(eventsItem._id, "name")}${addAttribute(eventsItem._id, "id")} class="js-tourEventInput"${addAttribute(eventsItem.title, "value")} data-astro-cid-m5m2g6yi> <div data-astro-cid-m5m2g6yi> <p data-astro-cid-m5m2g6yi>選択する</p> </div> </label> <label${addAttribute(eventsItem._id, "for")} class="inner" data-astro-cid-m5m2g6yi> <figure data-astro-cid-m5m2g6yi> ${renderComponent($$result2, "Image", $$Image, { "src": eventsItem.coverImage.src, "width": 200 * 2, "height": 133 * 2, "alt": eventsItem.title, "data-astro-cid-m5m2g6yi": true })} </figure> <div class="body" data-astro-cid-m5m2g6yi> <h3 data-astro-cid-m5m2g6yi>${eventsItem.title}</h3> </div> </label> </li>`;
  })} </ul> ` })} <div class="bar" data-astro-cid-m5m2g6yi> <p class="js-tourEventReset" data-astro-cid-m5m2g6yi>すべてをリセット</p> <a href="/404" data-astro-reload class="button" data-astro-cid-m5m2g6yi>まとめて予約する</a> <p class="text" data-astro-cid-m5m2g6yi> <span class="js-tourEventCount" data-astro-cid-m5m2g6yi>0</span> <span data-astro-cid-m5m2g6yi>/</span> <span class="js-tourEventTotal" data-astro-cid-m5m2g6yi></span> </p> </div>  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/EventListSelect.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageTitle", $$PageTitle, { "ja": "EVENT" })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="u-pb80"> ${renderComponent($$result3, "EventListSelect", $$EventListSelect, {})} </div> ` })} ` })}`;
}, "/Users/mitsunaga/github/astro-v4_newt/src/pages/events/index.astro", void 0);

const $$file = "/Users/mitsunaga/github/astro-v4_newt/src/pages/events/index.astro";
const $$url = "/events";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PageBody as $, $$Container as a, $$Layout as b, $$PageTitle as c, index as i, newtClient as n, pageInfo as p };
