import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, k as renderComponent, u as unescapeHTML } from '../astro_1IGbaR9m.mjs';
import 'kleur/colors';
import { n as newtClient, $ as $$PageBody, a as $$Container, b as $$Image, c as $$Layout } from './__xUYP6fVm.mjs';
/* empty css                         */
import 'clsx';
/* empty css                          */
/* empty css                         */

const $$Astro$2 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Button;
  const { text, link } = Astro2.props;
  const targetLink = link || "/";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(targetLink, "href")} class="button" data-astro-cid-vnzlvqnm>${text}</a> `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/Button.astro", void 0);

const $$Astro$1 = createAstro();
const getStaticPaths$1 = async () => {
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
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id$1;
  const { article } = Astro2.props;
  const blogPrev = await newtClient.getFirstContent({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title"],
      order: ["-_sys.customOrder"],
      "_sys.customOrder": {
        lt: article._sys.customOrder
      }
    }
  });
  const blogNext = await newtClient.getFirstContent({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title"],
      order: ["_sys.customOrder"],
      "_sys.customOrder": {
        gt: article._sys.customOrder
      }
    }
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-gsbvazvt": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageBody", $$PageBody, { "data-astro-cid-gsbvazvt": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, { "value": "small", "data-astro-cid-gsbvazvt": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="blog-single" data-astro-cid-gsbvazvt> <h1 data-astro-cid-gsbvazvt>${article.title}</h1> <figure class="cover" data-astro-cid-gsbvazvt> ${renderComponent($$result4, "Image", $$Image, { "src": article.coverImage.src, "width": 780, "height": 520, "alt": article.title, "loading": "eager", "data-astro-cid-gsbvazvt": true })} </figure> <article data-astro-cid-gsbvazvt>${unescapeHTML(article.body)}</article> <div class="article-footer" data-astro-cid-gsbvazvt> ${blogPrev && renderTemplate`<a${addAttribute("/blog/" + blogPrev._id, "href")} class="prev" data-astro-cid-gsbvazvt>
前の記事へ
</a>`} ${renderComponent($$result4, "Button", $$Button, { "text": "\u4E00\u89A7\u306B\u623B\u308B", "link": "/blog/", "data-astro-cid-gsbvazvt": true })} ${blogNext && renderTemplate`<a${addAttribute("/blog/" + blogNext._id, "href")} class="next" data-astro-cid-gsbvazvt>
次の記事へ
</a>`} </div> </div> ` })} ` })} ` })} `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/pages/blog/[id].astro", void 0);

const $$file$1 = "/Users/mitsunaga/github/astro-v4_newt/src/pages/blog/[id].astro";
const $$url$1 = "/blog/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id$1,
  file: $$file$1,
  getStaticPaths: getStaticPaths$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const getStaticPaths = async () => {
  const { items: news } = await newtClient.getContents({
    appUid: "news",
    modelUid: "article",
    query: {
      select: ["_id", "title", "_sys", "slug", "body"]
    }
  });
  return news.map((newsItem) => ({
    params: { id: newsItem._id },
    props: { newsItem }
  }));
};
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { newsItem } = Astro2.props;
  const newsPrev = await newtClient.getFirstContent({
    appUid: "news",
    modelUid: "article",
    query: {
      select: ["_id", "title"],
      order: ["-_sys.customOrder"],
      "_sys.customOrder": {
        lt: newsItem._sys.customOrder
      }
    }
  });
  const newsNext = await newtClient.getFirstContent({
    appUid: "news",
    modelUid: "article",
    query: {
      select: ["_id", "title"],
      order: ["_sys.customOrder"],
      "_sys.customOrder": {
        gt: newsItem._sys.customOrder
      }
    }
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-zoshki4t": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageBody", $$PageBody, { "data-astro-cid-zoshki4t": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, { "value": "small", "data-astro-cid-zoshki4t": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="blog-single" data-astro-cid-zoshki4t> <h1 data-astro-cid-zoshki4t>${newsItem.title}</h1> <article data-astro-cid-zoshki4t>${unescapeHTML(newsItem.body)}</article> <div class="article-footer" data-astro-cid-zoshki4t> ${newsPrev && renderTemplate`<a${addAttribute("/news/" + newsPrev._id, "href")} class="prev" data-astro-cid-zoshki4t>
前の記事へ
</a>`} ${renderComponent($$result4, "Button", $$Button, { "text": "\u4E00\u89A7\u306B\u623B\u308B", "link": "/news/", "data-astro-cid-zoshki4t": true })} ${newsNext && renderTemplate`<a${addAttribute("/news/" + newsNext._id, "href")} class="next" data-astro-cid-zoshki4t>
次の記事へ
</a>`} </div> </div> ` })} ` })} ` })} `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/pages/news/[id].astro", void 0);

const $$file = "/Users/mitsunaga/github/astro-v4_newt/src/pages/news/[id].astro";
const $$url = "/news/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Button as $, _id_$1 as _, _id_ as a };
