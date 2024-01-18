import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, k as renderComponent, h as addAttribute } from '../astro_1IGbaR9m.mjs';
import 'kleur/colors';
import 'clsx';
import { n as newtClient, d as $$BlogItem, e as $$NewsItem, b as $$Image, $ as $$PageBody, a as $$Container, f as $$TagList, g as $$CateList, c as $$Layout, h as $$PageTitle, p as pageInfo } from './__xUYP6fVm.mjs';
/* empty css                          */
import { $ as $$Button } from './_id__QkF7hWIR.mjs';
import { useState } from 'preact/hooks';
import { jsx, jsxs } from 'preact/jsx-runtime';
/* empty css                          */
/* empty css                          */

const $$Astro$a = createAstro();
const $$BlogList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$BlogList;
  const { tags, limit, classNames } = Astro2.props;
  const tagId = tags && tags;
  const { items: blog } = await newtClient.getContents({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title", "slug", "body", "coverImage", "tags"],
      order: ["-_priority", "-_sys.customOrder"],
      tags: tagId,
      limit
    }
  });
  return renderTemplate`${maybeRenderHead()}<ul class="list" data-astro-cid-35dpazjw> ${blog.map((blogItem) => {
    return renderTemplate`${renderComponent($$result, "BlogItem", $$BlogItem, { "blogItem": blogItem, "data-astro-cid-35dpazjw": true })}`;
  })} </ul> `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/BlogList.astro", void 0);

const $$Astro$9 = createAstro();
const $$SectionTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { ja, reversal } = Astro2.props;
  const sectionTitleClass = reversal ? "sectionTitle reversal" : "sectionTitle";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(sectionTitleClass, "class")} data-astro-cid-azbpcp4f> <h2 class="ja" data-astro-cid-azbpcp4f>${ja}</h2> </div> `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/SectionTitle.astro", void 0);

const $$Astro$8 = createAstro();
const $$NewsList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$NewsList;
  const { categories, limit, classNames } = Astro2.props;
  const cateId = categories && categories;
  const { items: news } = await newtClient.getContents({
    appUid: "news",
    modelUid: "article",
    query: {
      select: ["_id", "_sys", "title", "slug", "body", "categories"],
      order: ["-_priority", "-_sys.customOrder"],
      categories: cateId,
      limit
    }
  });
  return renderTemplate`${maybeRenderHead()}<ul class="list"> ${news.map((newsItem) => {
    return renderTemplate`${renderComponent($$result, "NewsItem", $$NewsItem, { "newsItem": newsItem })}`;
  })} </ul>`;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/NewsList.astro", void 0);

const $$Astro$7 = createAstro();
const $$EventList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$EventList;
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
  return renderTemplate`${maybeRenderHead()}<ul class="list" data-astro-cid-ugu5mlpi> ${events.map((eventsItem) => {
    return renderTemplate`<li data-astro-cid-ugu5mlpi> <a${addAttribute(`/events/`, "href")} data-astro-cid-ugu5mlpi> <figure data-astro-cid-ugu5mlpi> ${renderComponent($$result, "Image", $$Image, { "src": eventsItem.coverImage.src, "width": 200 * 2, "height": 133 * 2, "alt": eventsItem.title, "data-astro-cid-ugu5mlpi": true })} </figure> <div class="body" data-astro-cid-ugu5mlpi> <h3 data-astro-cid-ugu5mlpi>${eventsItem.title}</h3> <p class="more" data-astro-cid-ugu5mlpi>詳細を見る</p> </div> </a> </li>`;
  })} </ul> `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/EventList.astro", void 0);

const $$Astro$6 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  const { tags, limit, classNames } = Astro2.props;
  const tagId = tags && tags;
  const { items: articles } = await newtClient.getContents({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: ["_id", "title", "slug", "body", "coverImage", "top"],
      order: ["-_priority", "-_sys.customOrder"],
      tags: tagId,
      limit
    }
  });
  return renderTemplate`${maybeRenderHead()}<div id="hero" class="hero" data-midnight="white" data-astro-cid-gmfg2mqh> <div class="inner js-hero" data-astro-cid-gmfg2mqh> <ul class="list swiper-wrapper" data-astro-cid-gmfg2mqh> ${articles.map((article) => {
    if (article.top) {
      return renderTemplate`<li class="swiper-slide" data-astro-cid-gmfg2mqh> <a${addAttribute(`/blog/${article._id}`, "href")} class="link" data-astro-cid-gmfg2mqh> <figure class="img" data-astro-cid-gmfg2mqh> ${renderComponent($$result, "Image", $$Image, { "src": article.coverImage.src, "width": 1440, "height": 800, "alt": article.title, "class": "u-pc", "data-astro-cid-gmfg2mqh": true })} ${renderComponent($$result, "Image", $$Image, { "src": article.coverImage.src, "width": 375, "height": 800, "alt": article.title, "class": "u-sp", "data-astro-cid-gmfg2mqh": true })} </figure> <div class="body" data-astro-cid-gmfg2mqh> <h3 class="title" data-astro-cid-gmfg2mqh>${article.title}</h3> <p class="more" data-astro-cid-gmfg2mqh>詳細を見る</p> </div> </a> </li>`;
    }
  })} </ul> </div> </div>  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/top/Hero.astro", void 0);

const $$Astro$5 = createAstro();
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$4;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageClass": "pageTop" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageBody", $$PageBody, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Container", $$Container, {}, { "default": ($$result4) => renderTemplate`  ${maybeRenderHead()}<section class="u-mb80"> ${renderComponent($$result4, "SectionTitle", $$SectionTitle, { "ja": "BLOG" })} ${renderComponent($$result4, "TagList", $$TagList, {})} ${renderComponent($$result4, "Blog", $$BlogList, { "limit": 3 })} <div class="buttonWrap">${renderComponent($$result4, "Button", $$Button, { "link": "blog", "text": "\u4E00\u89A7\u3092\u898B\u308B" })}</div> </section> <section class="u-mb80"> ${renderComponent($$result4, "SectionTitle", $$SectionTitle, { "ja": "NEWS" })} ${renderComponent($$result4, "CateList", $$CateList, {})} ${renderComponent($$result4, "NewsList", $$NewsList, { "limit": 3 })} <div class="buttonWrap">${renderComponent($$result4, "Button", $$Button, { "link": "news", "text": "\u4E00\u89A7\u3092\u898B\u308B" })}</div> </section> <section> ${renderComponent($$result4, "SectionTitle", $$SectionTitle, { "ja": "EVENT" })} ${renderComponent($$result4, "EventList", $$EventList, { "limit": 3 })} <div class="buttonWrap">${renderComponent($$result4, "Button", $$Button, { "link": "events", "text": "\u4E00\u89A7\u3092\u898B\u308B" })}</div> </section> ` })} ` })} ` })} `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/pages/index.astro", void 0);

const $$file$4 = "/Users/mitsunaga/github/astro-v4_newt/src/pages/index.astro";
const $$url$4 = "";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$4,
  file: $$file$4,
  url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const FormWithConfirmation = () => {
  const formURL = "https://blog-739442.form.newt.so/v1/a3CPAUnoP";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowConfirmation(true);
  };
  const handleConfirm = () => {
    const form = document.createElement("form");
    form.action = formURL;
    form.method = "post";
    const nameField = document.createElement("input");
    nameField.type = "hidden";
    nameField.name = "name";
    nameField.id = "name";
    nameField.value = name;
    form.appendChild(nameField);
    const emailField = document.createElement("input");
    emailField.type = "hidden";
    emailField.name = "email";
    emailField.id = "email";
    emailField.value = email;
    form.appendChild(emailField);
    const messageField = document.createElement("input");
    messageField.type = "hidden";
    messageField.name = "message";
    messageField.id = "message";
    messageField.value = message;
    form.appendChild(messageField);
    document.body.appendChild(form);
    form.submit();
  };
  const handleBack = () => {
    setShowConfirmation(false);
  };
  return jsx("div", {
    className: "c-form",
    children: !showConfirmation ? (
      // フォーム入力画面
      jsxs("form", {
        onSubmit: handleSubmit,
        id: "form",
        children: [jsxs("ul", {
          children: [jsxs("li", {
            children: [jsx("label", {
              className: "form-item-title",
              for: "name",
              children: "Name"
            }), jsx("div", {
              className: "form-item-body",
              children: jsx("input", {
                id: "name",
                required: true,
                name: "name",
                value: name,
                onChange: (e) => setName(e.target.value)
              })
            })]
          }), jsxs("li", {
            children: [jsx("label", {
              className: "form-item-title",
              for: "email",
              children: "Email"
            }), jsx("div", {
              className: "form-item-body",
              children: jsx("input", {
                id: "email",
                type: "email",
                required: true,
                value: email,
                name: "email",
                onChange: (e) => setEmail(e.target.value)
                // メールアドレスの変更をハンドル
              })
            })]
          }), jsxs("li", {
            children: [jsx("label", {
              className: "form-item-title",
              for: "message",
              children: "Message"
            }), jsx("div", {
              className: "form-item-body",
              children: jsx("textarea", {
                id: "message",
                value: message,
                required: true,
                name: "message",
                onChange: (e) => setMessage(e.target.value)
              })
            })]
          })]
        }), jsx("button", {
          type: "submit",
          children: "確認画面へ"
        })]
      })
    ) : (
      // 確認画面
      jsxs("div", {
        className: "c-form --confirm",
        children: [jsxs("ul", {
          children: [jsxs("li", {
            children: [jsx("p", {
              className: "form-item-title",
              children: "Name"
            }), jsx("p", {
              className: "form-item-body",
              children: name
            })]
          }), jsxs("li", {
            children: [jsx("p", {
              className: "form-item-title",
              children: "Email"
            }), jsx("p", {
              className: "form-item-body",
              children: email
            })]
          }), jsxs("li", {
            children: [jsx("p", {
              className: "form-item-title",
              children: "Message"
            }), jsx("p", {
              className: "form-item-body",
              children: message
            })]
          })]
        }), jsxs("div", {
          className: "button-wrap",
          children: [jsx("button", {
            onClick: handleBack,
            children: "戻る"
          }), " ", jsx("button", {
            type: "submit",
            onClick: handleConfirm,
            children: "送信"
          })]
        })]
      })
    )
  });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro();
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate(_a || (_a = __template(["", '  <script src="https://www.google.com/recaptcha/api.js?render=6LcH1nwoAAAAAGkyaXcuCwJJQpgHm00M6PwwHwwk&hl=ja"><\/script> '])), renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="u-tac"> ${renderComponent($$result2, "PageTitle", $$PageTitle, { "ja": "CONTACT" })} </div> ${renderComponent($$result2, "PageBody", $$PageBody, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, { "value": "xsmall" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "FormWithConfirmation", FormWithConfirmation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mitsunaga/github/astro-v4_newt/src/pages/contact/form", "client:component-export": "default" })} ` })} ` })} ` }));
}, "/Users/mitsunaga/github/astro-v4_newt/src/pages/contact/index.astro", void 0);

const $$file$3 = "/Users/mitsunaga/github/astro-v4_newt/src/pages/contact/index.astro";
const $$url$3 = "/contact";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$3,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
const $$EventListSelect = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
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

const $$Astro$2 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageTitle", $$PageTitle, { "ja": "EVENT" })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="u-pb80"> ${renderComponent($$result3, "EventListSelect", $$EventListSelect, {})} </div> ` })} ` })}`;
}, "/Users/mitsunaga/github/astro-v4_newt/src/pages/events/index.astro", void 0);

const $$file$2 = "/Users/mitsunaga/github/astro-v4_newt/src/pages/events/index.astro";
const $$url$2 = "/events";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const Title = ({
  children
}) => {
  return jsx("h2", {
    className: "aa",
    children
  });
};

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  let title = "Fuga";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageClass": "pageTop" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageBody", $$PageBody, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1>Welcome to <span class="text-gradient">${title}</span></h1> ${renderComponent($$result3, "Title", Title, {}, { "default": ($$result4) => renderTemplate`タイトル` })} <p class="instructions"></p> ` })} ` })}`;
}, "/Users/mitsunaga/github/astro-v4_newt/src/pages/test/index.astro", void 0);

const $$file$1 = "/Users/mitsunaga/github/astro-v4_newt/src/pages/test/index.astro";
const $$url$1 = "/test";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageKey = "page404";
  const { pageTitle, pageNoindex } = pageInfo[pageKey];
  const title = pageTitle;
  const noindex = pageNoindex;
  const className = "page-lower page404";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": title, "pageNoindex": noindex, "pageClass": className, "data-astro-cid-xidnzwy2": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageBody", $$PageBody, { "data-astro-cid-xidnzwy2": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, { "data-astro-cid-xidnzwy2": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<h2 data-astro-cid-xidnzwy2>404 Not Found</h2> <p data-astro-cid-xidnzwy2>お探しのページは見つかりませんでした。<br data-astro-cid-xidnzwy2>移動または削除された可能性があります。</p> ${renderComponent($$result4, "Button", $$Button, { "text": "\u30C8\u30C3\u30D7\u3078", "data-astro-cid-xidnzwy2": true })} ` })} ` })} ` })} `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/pages/404/index.astro", void 0);

const $$file = "/Users/mitsunaga/github/astro-v4_newt/src/pages/404/index.astro";
const $$url = "/404";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$3 as a, index$2 as b, index$1 as c, index as d, index$4 as i };
