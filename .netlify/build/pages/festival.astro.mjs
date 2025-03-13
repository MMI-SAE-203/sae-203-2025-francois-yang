import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DJnjjkLt.mjs';
import 'kleur/colors';
import { $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_aI-14zAD.mjs';
export { renderers } from '../renderers.mjs';

const imgHeroFestival = new Proxy({"src":"/_astro/image_header_festival.D4iAY8bq.jpg","width":4324,"height":2196,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/assets/hero/image_header_festival.jpg";
							}
							
							return target[name];
						}
					});

const $$Festival = createComponent(($$result, $$props, $$slots) => {
  const title = "Le Festival";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": title, "description": "Pour nous conna\xEEtre plus !", "src": imgHeroFestival, "alt": "Contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>~ A propos ~</h2> <h3>Qu’est ce que Flash Ciné 25 ?</h3> <p>
Le festival Flash Cinéma 25 est un événement cinématographique qui se
        déroule dans la ville d'Ornans, située dans le département du Doubs. Ce
        festival se distingue de ces concurrents par son concept dynamique, en
        mettant à l'honneur les films courts et des courts métrages qui
        capturent la rapidité, l'énergie et l'innovation du septième art.
</p> ` })}`;
}, "C:/Travail/BUT_MMI/Sa\xE9/Sae-203/sae-203-2025-francois-yang/src/pages/festival.astro", void 0);

const $$file = "C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/festival.astro";
const $$url = "/festival";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Festival,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
