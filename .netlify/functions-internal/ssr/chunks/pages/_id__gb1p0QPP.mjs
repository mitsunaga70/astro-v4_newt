import '@astrojs/internal-helpers/path';
import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderSlot, j as renderTransition, k as renderComponent, l as renderHead, u as unescapeHTML } from '../astro_1IGbaR9m.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';
import { createClient } from 'newt-client-js';
/* empty css                           */
/* empty css                          */
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_JNFfrKba.mjs';
/* empty css                          */
/* empty css                         */

const $$Astro$c = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/mitsunaga/github/astro-v4_newt/node_modules/astro/components/Image.astro", void 0);

const $$Astro$b = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/mitsunaga/github/astro-v4_newt/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/mitsunaga/github/astro-v4_newt/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Astro$a = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
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

const $$Astro$9 = createAstro();
const $$Meta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
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

const $$Astro$8 = createAstro();
const $$Loading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Loading;
  return renderTemplate`${maybeRenderHead()}<div class="loading"> <div class="inner"></div> </div> `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Loading.astro", void 0);

const $$Astro$7 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
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

const $$Astro$6 = createAstro();
const $$Audio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Audio;
  return renderTemplate`${maybeRenderHead()}<div class="sound" data-astro-cid-4q67hhvl> <button class="soundBtn" id="js-btnPlay" aria-label="音声ボタン" data-astro-cid-4q67hhvl> <svg id="soundOn" xmlns="http://www.w3.org/2000/svg" width="22" height="14.3" viewBox="0 0 22 14.3" data-astro-cid-4q67hhvl> <g id="arrow-r01" data-astro-cid-4q67hhvl><path class="soundOn01" d="M0,4.62v5.06H7.32l5.5,4.62V0L7.32,4.62H0ZM17.41,0h-1.1V14.3h1.1V0Zm4.59,0h-1.1V14.3h1.1V0Z" data-astro-cid-4q67hhvl></path></g></svg> </button> <audio id="js-bgm01" preload="" loop="" data-astro-transition-persist="media-player" data-astro-cid-4q67hhvl${addAttribute(renderTransition($$result, "4y2p2qo3", "", "media-player"), "data-astro-transition-scope")}> <source src="/assets/audio/audio.mp3" type="audio/mp3" data-astro-cid-4q67hhvl> </audio> </div>  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Audio.astro", "self");

const $$Astro$5 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="header js-header" data-astro-cid-3ef6ksr2> <div class="inner" data-astro-cid-3ef6ksr2> <a href="/" class="logo" data-astro-cid-3ef6ksr2>ヘッドレスCMS検証</a> <nav class="js-gnav" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> ${navItems.map((item) => renderTemplate`<li class="item" data-astro-cid-3ef6ksr2> ${item.load ? renderTemplate`<a${addAttribute(item.link, "href")} class="link" data-astro-reload data-astro-cid-3ef6ksr2> ${item.text} </a>` : renderTemplate`<a${addAttribute(item.link, "href")} class="link" data-astro-cid-3ef6ksr2> ${item.text} </a>`} </li>`)} </ul> </nav> <a href="/contact/" class="contact" data-astro-cid-3ef6ksr2>CONTACT</a> </div> <div class="audio" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Audio", $$Audio, { "data-astro-cid-3ef6ksr2": true })} </div> </header>  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Wrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Wrapper;
  return renderTemplate`${maybeRenderHead()}<div class="wrapper" data-astro-cid-esqdxlhz> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-esqdxlhz": true })} <main class="main" data-astro-cid-esqdxlhz> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-esqdxlhz": true })} </div>  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Wrapper.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { pageTitle, pageDesc, pageNoindex, pageClass = "" } = Astro2.props;
  return renderTemplate`<html lang="ja"> <head>${renderComponent($$result, "Meta", $$Meta, { "pageTitle": pageTitle, "pageDesc": pageDesc, "pageNoindex": pageNoindex })}<!-- <ViewTransitions /> -->${renderHead()}</head> <body${addAttribute(pageClass, "class")}> ${renderComponent($$result, "Loading", $$Loading, {})} ${renderComponent($$result, "Wrapper", $$Wrapper, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </body></html>`;
}, "/Users/mitsunaga/github/astro-v4_newt/src/layouts/Layout.astro", void 0);

const newtClient = createClient({
  spaceUid: "blog-739442",
  token: "Pb86-VcpsC8uhSmOM_TUb7ElqC6dsC4l0DAEha1OCz4",
  apiType: "cdn"
});

const $$Astro$2 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const { text, link } = Astro2.props;
  const targetLink = link || "/";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(targetLink, "href")} class="button" data-astro-cid-vnzlvqnm>${text}</a> `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Button.astro", void 0);

const $$Astro$1 = createAstro();
const $$PageBody = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageBody;
  return renderTemplate`${maybeRenderHead()}<div class="wrapper js-pageBody" data-astro-cid-7r447ubh> ${renderSlot($$result, $$slots["default"])} </div>  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/PageBody.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const getStaticPaths = async () => {
  const { items: articles } = await newtClient.getContents({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title", "_sys", "slug", "body", "coverImage"]
    }
  });
  return articles.map((article) => ({
    params: { id: article._id },
    props: { article }
  }));
};
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { article } = Astro2.props;
  const customOrder = article?._sys?.customOrder;
  const blogPrev = customOrder ? await newtClient.getFirstContent({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title"],
      order: ["-_sys.customOrder"],
      "_sys.customOrder": {
        lt: customOrder
      }
    }
  }) : null;
  const blogNext = customOrder ? await newtClient.getFirstContent({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title"],
      order: ["_sys.customOrder"],
      "_sys.customOrder": {
        gt: customOrder
      }
    }
  }) : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-gsbvazvt": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageBody", $$PageBody, { "data-astro-cid-gsbvazvt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, { "value": "small", "data-astro-cid-gsbvazvt": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="blog-single" data-astro-cid-gsbvazvt> <h1 data-astro-cid-gsbvazvt>${article?.title}</h1> <figure class="cover" data-astro-cid-gsbvazvt> ${article?.coverImage && renderTemplate`${renderComponent($$result4, "Image", $$Image, { "src": article?.coverImage.src, "alt": article?.title, "width": 780, "height": 520, "loading": "eager", "data-astro-cid-gsbvazvt": true })}`} </figure> <article data-astro-cid-gsbvazvt>${unescapeHTML(article?.body)}</article> <div class="article-footer" data-astro-cid-gsbvazvt> ${blogPrev && renderTemplate`<a${addAttribute("/blog/" + blogPrev._id, "href")} class="prev" data-astro-cid-gsbvazvt>
前の記事へ
</a>`} ${renderComponent($$result4, "Button", $$Button, { "text": "\u4E00\u89A7\u306B\u623B\u308B", "link": "/blog/", "data-astro-cid-gsbvazvt": true })} ${blogNext && renderTemplate`<a${addAttribute("/blog/" + blogNext._id, "href")} class="next" data-astro-cid-gsbvazvt>
次の記事へ
</a>`} </div> </div> ` })} ` })} ` })} `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/pages/blog/[id].astro", void 0);

const $$file = "/Users/mitsunaga/github/astro-v4_newt/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, _id_ as _, $$PageBody as a, $$Container as b, $$Button as c, $$Layout as d, imageConfig as i, newtClient as n, pageInfo as p };
