import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, h as addAttribute, n as createTransitionScope } from '../astro_1IGbaR9m.mjs';
import 'kleur/colors';
import 'clsx';
import { a as $$Container, $ as $$PageBody, c as $$Layout } from './__xUYP6fVm.mjs';
/* empty css                         */
import { useState } from 'preact/hooks';
import { jsx, jsxs } from 'preact/jsx-runtime';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$EventTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EventTitle;
  const { ja, reversal } = Astro2.props;
  const pageTitleClass = reversal ? "pageTitle js-pageTitle reversal" : "pageTitle js-pageTitle";
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "data-astro-cid-43ovatqe": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(pageTitleClass, "class")} data-astro-cid-43ovatqe> <h1 class="ja js-word" data-astro-cid-43ovatqe> <span class="js-word__item" data-astro-cid-43ovatqe>EVENT</span> <span class="js-word__item" data-astro-cid-43ovatqe> FORM</span> </h1> </div> ` })}  `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/components/EventTitle.astro", void 0);

const FormWithConfirmation = () => {
  const formURL = "https://blog-739442.form.newt.so/v1/gnyT5xvLQ";
  const [events, setEvents] = useState("");
  const [eventsText, setEventsText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const eventsParams = sessionStorage.getItem("eventsParams") || "";
    setEvents(eventsParams);
    const formattedText = eventsParams.replace(/,/g, "<br>");
    setEventsText(formattedText);
    const tokenValue = sessionStorage.getItem("recaptchaToken") || "";
    setRecaptchaToken(tokenValue);
    setShowConfirmation(true);
  };
  const handleConfirm = () => {
    const form = document.createElement("form");
    form.action = formURL;
    form.method = "post";
    const eventsField = document.createElement("input");
    eventsField.type = "hidden";
    eventsField.name = "events";
    eventsField.id = "events";
    eventsField.value = events;
    form.appendChild(eventsField);
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
    const recaptchaField = document.createElement("input");
    recaptchaField.type = "hidden";
    recaptchaField.name = "googleReCaptchaToken";
    recaptchaField.id = "recaptchaToken";
    recaptchaField.value = recaptchaToken;
    form.appendChild(recaptchaField);
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
            className: "js-contactEventItem",
            children: [jsx("label", {
              className: "form-item-title",
              htmlFor: "input-events",
              children: "Event"
            }), jsxs("div", {
              className: "form-item-body",
              children: [jsx("input", {
                id: "input-events",
                name: "events",
                value: events,
                hidden: true
              }), jsx("p", {
                id: "input-eventsText",
                className: "u-mt8",
                dangerouslySetInnerHTML: {
                  __html: eventsText
                }
              })]
            })]
          }), jsxs("li", {
            children: [jsx("label", {
              className: "form-item-title",
              htmlFor: "name",
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
              htmlFor: "email",
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
              htmlFor: "message",
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
        }), jsx("input", {
          type: "hidden",
          id: "recaptchaToken",
          name: "googleReCaptchaToken"
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
              children: "Event"
            }), jsx("p", {
              className: "form-item-body",
              dangerouslySetInnerHTML: {
                __html: eventsText
              }
            })]
          }), jsxs("li", {
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
const $$Astro = createAstro();
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Form;
  return renderTemplate(_a || (_a = __template(["", '  <script src="https://www.google.com/recaptcha/api.js?render=6LcH1nwoAAAAAGkyaXcuCwJJQpgHm00M6PwwHwwk&hl=ja"><\/script>  '])), renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="u-tac"> ${renderComponent($$result2, "EventTitle", $$EventTitle, {})} </div> ${renderComponent($$result2, "PageBody", $$PageBody, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, { "value": "xsmall" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "FormWithConfirmation", FormWithConfirmation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/mitsunaga/github/astro-v4_newt/src/pages/events/form", "client:component-export": "default", "data-astro-transition-persist": createTransitionScope($$result4, "qghjebfn") })} ` })} ` })} ` }));
}, "/Users/mitsunaga/github/astro-v4_newt/src/pages/events/form.astro", "self");

const $$file = "/Users/mitsunaga/github/astro-v4_newt/src/pages/events/form.astro";
const $$url = "/events/form";

export { $$Form as default, $$file as file, $$url as url };
