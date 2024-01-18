import '@astrojs/internal-helpers/path';
import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, i as renderSlot, j as renderTransition, k as renderComponent, l as renderHead, F as Fragment } from '../astro_1IGbaR9m.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_JNFfrKba.mjs';
/* empty css                          */
/* empty css                           */
import { createClient } from 'newt-client-js';
/* empty css                          */
/* empty css                          */
/* empty css                           */
/* empty css                           */
/* empty css                           */
/* empty css                          */
/* empty css                           */

const $$Astro$n = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
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

const $$Astro$m = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
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

const $$Astro$l = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
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

const $$Astro$k = createAstro();
const $$Meta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
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

const $$Astro$j = createAstro();
const $$Loading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Loading;
  return renderTemplate`${maybeRenderHead()}<div class="loading"> <div class="inner"></div> </div> `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Loading.astro", void 0);

const $$Astro$i = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
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

const $$Astro$h = createAstro();
const $$Audio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Audio;
  return renderTemplate`${maybeRenderHead()}<div class="sound" data-astro-cid-4q67hhvl> <button class="soundBtn" id="js-btnPlay" aria-label="音声ボタン" data-astro-cid-4q67hhvl> <svg id="soundOn" xmlns="http://www.w3.org/2000/svg" width="22" height="14.3" viewBox="0 0 22 14.3" data-astro-cid-4q67hhvl> <g id="arrow-r01" data-astro-cid-4q67hhvl><path class="soundOn01" d="M0,4.62v5.06H7.32l5.5,4.62V0L7.32,4.62H0ZM17.41,0h-1.1V14.3h1.1V0Zm4.59,0h-1.1V14.3h1.1V0Z" data-astro-cid-4q67hhvl></path></g></svg> </button> <audio id="js-bgm01" preload="" loop="" data-astro-transition-persist="media-player" data-astro-cid-4q67hhvl${addAttribute(renderTransition($$result, "4y2p2qo3", "", "media-player"), "data-astro-transition-scope")}> <source src="/assets/audio/audio.mp3" type="audio/mp3" data-astro-cid-4q67hhvl> </audio> </div>  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Audio.astro", "self");

const $$Astro$g = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="header js-header" data-astro-cid-3ef6ksr2> <div class="inner" data-astro-cid-3ef6ksr2> <a href="/" class="logo" data-astro-cid-3ef6ksr2>ヘッドレスCMS検証</a> <nav class="js-gnav" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> ${navItems.map((item) => renderTemplate`<li class="item" data-astro-cid-3ef6ksr2> ${item.load ? renderTemplate`<a${addAttribute(item.link, "href")} class="link" data-astro-reload data-astro-cid-3ef6ksr2> ${item.text} </a>` : renderTemplate`<a${addAttribute(item.link, "href")} class="link" data-astro-cid-3ef6ksr2> ${item.text} </a>`} </li>`)} </ul> </nav> <a href="/contact/" class="contact" data-astro-cid-3ef6ksr2>CONTACT</a> </div> <div class="audio" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Audio", $$Audio, { "data-astro-cid-3ef6ksr2": true })} </div> </header>  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Header.astro", void 0);

const $$Astro$f = createAstro();
const $$Wrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Wrapper;
  return renderTemplate`${maybeRenderHead()}<div class="wrapper" data-astro-cid-esqdxlhz> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-esqdxlhz": true })} <main class="main" data-astro-cid-esqdxlhz> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-esqdxlhz": true })} </div>  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Wrapper.astro", void 0);

const $$Astro$e = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Layout;
  const { pageTitle, pageDesc, pageNoindex, pageClass = "" } = Astro2.props;
  return renderTemplate`<html lang="ja"> <head>${renderComponent($$result, "Meta", $$Meta, { "pageTitle": pageTitle, "pageDesc": pageDesc, "pageNoindex": pageNoindex })}<!-- <ViewTransitions /> -->${renderHead()}</head> <body${addAttribute(pageClass, "class")}> ${renderComponent($$result, "Loading", $$Loading, {})} ${renderComponent($$result, "Wrapper", $$Wrapper, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </body></html>`;
}, "/Users/mitsunaga/github/astro-v4_newt/src/layouts/Layout.astro", void 0);

const newtClient = createClient({
  spaceUid: "blog-739442",
  token: "Pb86-VcpsC8uhSmOM_TUb7ElqC6dsC4l0DAEha1OCz4",
  apiType: "cdn"
});

const $$Astro$d = createAstro();
const $$TagList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$TagList;
  const { items: tags } = await newtClient.getContents({
    appUid: "blog",
    modelUid: "tag",
    query: {
      select: ["name", "slug"],
      order: ["-_priority", "-_sys.customOrder"]
    }
  });
  return renderTemplate`${maybeRenderHead()}<div class="u-mb40" data-astro-cid-lga65v7i> <div class="tag u-mb16" data-astro-cid-lga65v7i> <ul class="list" data-astro-cid-lga65v7i> <li class="item" data-astro-cid-lga65v7i> <a href="/blog/" class="link" data-astro-cid-lga65v7i> すべて</a> </li> ${tags.map((tag) => {
    return renderTemplate`<li class="item" data-astro-cid-lga65v7i> <a${addAttribute(`/blog/tag/${tag.slug}`, "href")} class="link" data-astro-cid-lga65v7i> ${tag.name} </a> </li>`;
  })} </ul> </div> </div> `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/TagList.astro", void 0);

const $$Astro$c = createAstro();
const $$CateList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$CateList;
  const { items: categories } = await newtClient.getContents({
    appUid: "news",
    modelUid: "category",
    query: {
      select: ["name", "slug"],
      order: ["-_priority", "-_sys.customOrder"]
    }
  });
  return renderTemplate`${maybeRenderHead()}<div class="u-mb40" data-astro-cid-upfcaqu6> <div class="tag u-mb16" data-astro-cid-upfcaqu6> <ul class="list" data-astro-cid-upfcaqu6> <li class="item" data-astro-cid-upfcaqu6> <a href="/news/" class="link" data-astro-cid-upfcaqu6> すべて</a> </li> ${categories.map((cate) => {
    return renderTemplate`<li class="item" data-astro-cid-upfcaqu6> <a${addAttribute(`/news/cate/${cate.slug}`, "href")} class="link" data-astro-cid-upfcaqu6> ${cate.name} </a> </li>`;
  })} </ul> </div> </div> `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/CateList.astro", void 0);

const $$Astro$b = createAstro();
const $$BlogItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$BlogItem;
  const { blogItem } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li data-astro-cid-2il7dcjc> <a${addAttribute(`/blog/${blogItem._id}`, "href")} data-astro-cid-2il7dcjc> <figure data-astro-cid-2il7dcjc> ${renderComponent($$result, "Image", $$Image, { "src": blogItem.coverImage.src, "width": 338 * 2, "height": 225 * 2, "alt": blogItem.title, "class": "u-pc", "data-astro-cid-2il7dcjc": true })} ${renderComponent($$result, "Image", $$Image, { "src": blogItem.coverImage.src, "width": 375, "height": 228, "alt": blogItem.title, "class": "u-sp", "data-astro-cid-2il7dcjc": true })} </figure> <div class="body" data-astro-cid-2il7dcjc> <ul class="tag_list" data-astro-cid-2il7dcjc> ${blogItem.tags && blogItem.tags.map((tag) => {
    return renderTemplate`<li class="tag_item" data-astro-cid-2il7dcjc>${tag.name}</li>`;
  })} </ul> <h3 data-astro-cid-2il7dcjc>${blogItem.title}</h3> <!-- <p class="more">詳細を見る</p> --> </div> </a> </li> `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/BlogItem.astro", void 0);

const $$Astro$a = createAstro();
const $$FormatDate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$FormatDate;
  const { date } = Astro2.props;
  const dateObj = new Date(date);
  const year = dateObj.getUTCFullYear();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const formattedDate = `${year}.${month.toString().padStart(2, "0")}.${day.toString().padStart(2, "0")}`;
  return renderTemplate`${maybeRenderHead()}<p>${formattedDate}</p>`;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/formatDate.astro", void 0);

const $$Astro$9 = createAstro();
const $$NewsItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$NewsItem;
  const { newsItem } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li data-astro-cid-ioicgfld> <a${addAttribute(`/news/${newsItem._id}`, "href")} data-astro-cid-ioicgfld> ${renderComponent($$result, "FormatDate", $$FormatDate, { "date": newsItem._sys.raw.createdAt, "data-astro-cid-ioicgfld": true })} <ul class="tag_list" data-astro-cid-ioicgfld> ${newsItem.categories && newsItem.categories.map((category) => {
    return renderTemplate`<li class="category_item" data-astro-cid-ioicgfld>${category.name}</li>`;
  })} </ul> <h3 data-astro-cid-ioicgfld>${newsItem.title}</h3> </a> </li> `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/NewsItem.astro", void 0);

const $$Astro$8 = createAstro();
const $$PageBody = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$PageBody;
  return renderTemplate`${maybeRenderHead()}<div class="wrapper js-pageBody" data-astro-cid-7r447ubh> ${renderSlot($$result, $$slots["default"])} </div>  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/PageBody.astro", void 0);

const $$Astro$7 = createAstro();
const $$PageTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$PageTitle;
  const { ja, reversal } = Astro2.props;
  const pageTitleClass = reversal ? "pageTitle js-pageTitle reversal" : "pageTitle js-pageTitle";
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-guvttfii": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(pageTitleClass, "class")} data-astro-cid-guvttfii> <h1 class="ja js-word" data-astro-cid-guvttfii><span class="js-word__item" data-astro-cid-guvttfii>${ja}</span></h1> </div> ` })}  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/PageTitle.astro", void 0);

const $$Astro$6 = createAstro();
const $$Paging = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Paging;
  const { page, name } = Astro2.props;
  const pageMaxCount = 3;
  const pageFirst = page.currentPage - pageMaxCount >= 1 ? page.currentPage - pageMaxCount : 1;
  const pageEnd = page.currentPage + pageMaxCount <= page.lastPage ? page.currentPage + pageMaxCount : page.lastPage;
  const pageList = [];
  for (let i = pageFirst; i <= pageEnd; i++) {
    if (i === page.currentPage) {
      pageList.push({ page: i, current: true });
    } else {
      pageList.push({ page: i, current: false });
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="pagination" data-astro-cid-gjftimtv> <ul class="pagination__list" data-astro-cid-gjftimtv> ${pageList.map((pageInfo) => renderTemplate`<div data-astro-cid-gjftimtv> ${pageInfo.current ? renderTemplate`<li class="pagination__item--current" data-astro-cid-gjftimtv>${pageInfo.page}</li>` : renderTemplate`<li class="pagination__item" data-astro-cid-gjftimtv> <a${addAttribute(pageInfo.page === 1 ? "/" + name + "/" : "/" + name + "/" + pageInfo.page, "href")} data-astro-cid-gjftimtv> ${pageInfo.page} </a> </li>`} </div>`)} </ul> <p class="pagination__pos" data-astro-cid-gjftimtv>Page ${page.currentPage}/${page.lastPage}</p> ${page.currentPage != 1 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-gjftimtv": true }, { "default": ($$result2) => renderTemplate` <a class="pagination__btn--first"${addAttribute("/" + name + "/", "href")} data-astro-cid-gjftimtv>
&lt;&lt;
</a> <a class="pagination__btn--prev"${addAttribute(
    page.currentPage - 1 === 1 ? "/" + name + "/" : "/" + name + "/" + (page.currentPage - 1),
    "href"
  )} data-astro-cid-gjftimtv>
&lt;
</a> ` })}` : renderTemplate`<div data-astro-cid-gjftimtv></div>`} ${page.currentPage != page.lastPage ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-gjftimtv": true }, { "default": ($$result2) => renderTemplate` <a class="pagination__btn--next"${addAttribute("/" + name + "/" + (page.currentPage + 1), "href")} data-astro-cid-gjftimtv>
&gt;
</a> <a class="pagination__btn--last"${addAttribute("/" + name + "/" + page.lastPage, "href")} data-astro-cid-gjftimtv>
&gt;&gt;
</a> ` })}` : renderTemplate`<div data-astro-cid-gjftimtv></div>`} </div> `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Paging.astro", void 0);

const $$Astro$5 = createAstro();
const $$BlogPageList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BlogPageList;
  const { page, tagName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-iz63nn7b": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TagList", $$TagList, { "data-astro-cid-iz63nn7b": true })} ${maybeRenderHead()}<ul class="list" data-astro-cid-iz63nn7b> ${page.data.map((blogItem) => {
    return renderTemplate`${renderComponent($$result2, "BlogItem", $$BlogItem, { "blogItem": blogItem, "data-astro-cid-iz63nn7b": true })}`;
  })} </ul> ${page.lastPage != 1 && renderTemplate`${renderComponent($$result2, "Paging", $$Paging, { "page": page, "name": tagName || "", "data-astro-cid-iz63nn7b": true })}`}` })} `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/BlogPageList.astro", void 0);

const $$Astro$4 = createAstro();
async function getStaticPaths$3({ paginate }) {
  const { items: tags } = await newtClient.getContents({
    appUid: "blog",
    modelUid: "tag",
    query: {
      select: ["_id", "slug", "name"]
    }
  });
  const { items: postsData } = await newtClient.getContents({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title", "slug", "body", "coverImage", "tags"],
      order: ["-_priority", "-_sys.customOrder"]
    }
  });
  return tags.flatMap((tag) => {
    const filteredPosts = postsData.filter(
      (post) => post.tags.some((tagItem) => tagItem.slug === tag.slug)
    );
    return paginate(filteredPosts, {
      params: { tag: tag.slug },
      props: { tag },
      pageSize: 9
    });
  });
}
const $$$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$$3;
  const { page, tag } = Astro2.props;
  Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageTitle", $$PageTitle, { "ja": tag.name })} ${renderComponent($$result2, "PageBody", $$PageBody, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BlogPageList", $$BlogPageList, { "page": page, "tagName": "blog/tag/" + tag.slug })} ` })} ` })}`;
}, "/Users/mitsunaga/github/astro-v4_newt/src/pages/blog/tag/[tag]/[...page].astro", void 0);

const $$file$3 = "/Users/mitsunaga/github/astro-v4_newt/src/pages/blog/tag/[tag]/[...page].astro";
const $$url$3 = "/blog/tag/[tag]/[...page]";

const ____page_$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$3,
  file: $$file$3,
  getStaticPaths: getStaticPaths$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
async function getStaticPaths$2({ paginate }) {
  const postsData = await newtClient.getContents({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title", "slug", "body", "coverImage", "tags"],
      order: ["-_priority", "-_sys.customOrder"]
    }
  });
  const postsContents = postsData.items;
  return paginate(postsContents, { pageSize: 9 });
}
const $$$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$$2;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageTitle", $$PageTitle, { "ja": "BLOG" })} ${renderComponent($$result2, "PageBody", $$PageBody, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BlogPageList", $$BlogPageList, { "page": page, "tagName": "blog" })} ` })} ` })}`;
}, "/Users/mitsunaga/github/astro-v4_newt/src/pages/blog/[...page].astro", void 0);

const $$file$2 = "/Users/mitsunaga/github/astro-v4_newt/src/pages/blog/[...page].astro";
const $$url$2 = "/blog/[...page]";

const ____page_$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$2,
  file: $$file$2,
  getStaticPaths: getStaticPaths$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$NewsPageList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$NewsPageList;
  const { page, cateName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CateList", $$CateList, {})} ${maybeRenderHead()}<ul class="list"> ${page.data.map((newsItem) => {
    return renderTemplate`${renderComponent($$result2, "NewsItem", $$NewsItem, { "newsItem": newsItem })}`;
  })} </ul> ${page.lastPage != 1 && renderTemplate`${renderComponent($$result2, "Paging", $$Paging, { "page": page, "name": cateName || "" })}`}` })}`;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/NewsPageList.astro", void 0);

const $$Astro$1 = createAstro();
async function getStaticPaths$1({ paginate }) {
  const { items: allCate } = await newtClient.getContents({
    appUid: "news",
    modelUid: "category",
    query: {
      select: ["_id", "slug", "name"]
    }
  });
  const { items: postsData } = await newtClient.getContents({
    appUid: "news",
    modelUid: "article",
    query: {
      select: ["_id", "_sys", "title", "slug", "body", "categories"],
      order: ["-_priority", "-_sys.customOrder"]
    }
  });
  return allCate.flatMap((cate) => {
    const filteredPosts = postsData.filter(
      (post) => post.categories.some((cateItem) => cateItem.slug === cate.slug)
    );
    return paginate(filteredPosts, {
      params: { cate: cate.slug },
      props: { cate },
      pageSize: 10
    });
  });
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$$1;
  const { page, cate } = Astro2.props;
  Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageTitle", $$PageTitle, { "ja": cate.name })} ${renderComponent($$result2, "PageBody", $$PageBody, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "NewsPageList", $$NewsPageList, { "page": page, "cateName": "news/cate/" + cate.slug })} ` })} ` })}`;
}, "/Users/mitsunaga/github/astro-v4_newt/src/pages/news/cate/[cate]/[...page].astro", void 0);

const $$file$1 = "/Users/mitsunaga/github/astro-v4_newt/src/pages/news/cate/[cate]/[...page].astro";
const $$url$1 = "/news/cate/[cate]/[...page]";

const ____page_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
async function getStaticPaths({ paginate }) {
  const postsData = await newtClient.getContents({
    appUid: "news",
    modelUid: "article",
    query: {
      select: ["_id", "_sys", "title", "slug", "body", "categories"],
      order: ["-_priority", "-_sys.customOrder"]
    }
  });
  const postsContents = postsData.items;
  return paginate(postsContents, { pageSize: 10 });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageTitle", $$PageTitle, { "ja": "NEWS" })} ${renderComponent($$result2, "PageBody", $$PageBody, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "NewsPageList", $$NewsPageList, { "page": page, "cateName": "news" })} ` })} ` })}`;
}, "/Users/mitsunaga/github/astro-v4_newt/src/pages/news/[...page].astro", void 0);

const $$file = "/Users/mitsunaga/github/astro-v4_newt/src/pages/news/[...page].astro";
const $$url = "/news/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PageBody as $, ____page_$3 as _, $$Container as a, $$Image as b, $$Layout as c, $$BlogItem as d, $$NewsItem as e, $$TagList as f, $$CateList as g, $$PageTitle as h, imageConfig as i, ____page_$2 as j, ____page_$1 as k, ____page_ as l, newtClient as n, pageInfo as p };
