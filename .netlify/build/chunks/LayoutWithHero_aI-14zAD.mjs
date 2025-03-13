import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, e as renderSlot } from './astro/server_DJnjjkLt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_BrefUx57.mjs';
import { $ as $$Picture } from './_astro_assets_7knPm7aV.mjs';

const $$Astro = createAstro();
const $$LayoutWithHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutWithHero;
  const { title, description, src, alt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "LayoutBase", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative w-full"> <div class="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] relative overflow-hidden"> ${renderComponent($$result2, "Picture", $$Picture, { "src": src, "alt": alt, "pictureAttributes": {
    class: "w-full h-full object-cover"
  } })} <div class="absolute inset-0 bg-black/20"></div> <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4"> <h1 class="text-3xl md:text-4xl font-serif text-white mb-2"> ${title} </h1> <p class="text-lg text-white italic">${description}</p> </div> </div> </div> <div class="w-full max-w-4xl mx-auto px-4 py-8"> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "C:/Travail/BUT_MMI/Sa\xE9/Sae-203/sae-203-2025-francois-yang/src/layouts/LayoutWithHero.astro", void 0);

export { $$LayoutWithHero as $ };
