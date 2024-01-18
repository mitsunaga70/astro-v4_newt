import { e as createAstro, f as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../astro_1IGbaR9m.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Button } from './_id__QkF7hWIR.mjs';
import { $ as $$PageBody, a as $$Container, c as $$Layout } from './__xUYP6fVm.mjs';
/* empty css                           */

const $$Astro = createAstro();
const $$Thanks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Thanks;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-eaplqb2c": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PageBody", $$PageBody, { "data-astro-cid-eaplqb2c": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Container", $$Container, { "data-astro-cid-eaplqb2c": true }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<p data-astro-cid-eaplqb2c>送信が完了しました</p> ${renderComponent($$result4, "Button", $$Button, { "text": "\u30C8\u30C3\u30D7\u3078", "data-astro-cid-eaplqb2c": true })} ` })} ` })} ` })} `;
}, "/Users/mitsunaga/github/astro-v4_newt/src/pages/contact/thanks.astro", void 0);

const $$file = "/Users/mitsunaga/github/astro-v4_newt/src/pages/contact/thanks.astro";
const $$url = "/contact/thanks";

export { $$Thanks as default, $$file as file, $$url as url };
