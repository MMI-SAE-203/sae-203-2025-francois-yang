import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DJnjjkLt.mjs';
import 'kleur/colors';
/* empty css                                   */
import { $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_aI-14zAD.mjs';
export { renderers } from '../renderers.mjs';

const imgHeroAccueil = new Proxy({"src":"/_astro/image_header.B1b8CgHw.jpg","width":3316,"height":2260,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/assets/hero/image_header.jpg";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": "Festival Flash Cin\xE9 25", "description": "\u201CDes films si courts que vous aurez encore le temps pour l'ap\xE9ro, du fromage et des montagnes!\u201D", "src": imgHeroAccueil, "alt": "Accueil" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-6xl mx-auto px-4 py-12 space-y-16"> <div class="md:w-1/2 space-y-6"> <h2 class="text-center text-xl font-medium">
~ Un festival de cinéma en plein air du 8 août au 10 août 2025 ~
</h2> <p class="text-base leading-relaxed">
Flash Cinéma 25 vous propose une expérience unique de cinéma en
                plein air dans un cadre naturel exceptionnel. Profitez de films
                courts et captivants dans une ambiance conviviale avec vos
                proches sous le doux coucher de soleil !
</p> <div class="flex justify-center"> <a href="/programme" class="inline-block px-8 py-3 bg-yellow-100 text-gray-800 rounded-md hover:bg-yellow-200 transition-colors text-center">
EN SAVOIR PLUS
</a> </div> </div> </section> <div class="flex justify-center py-4"> <img src="../assets/icon/imagepopcorn.webp" alt="Popcorn" class="w-20 h-20"> </div> <div class="border-t border-gray-300 max-w-3xl mx-auto"></div> <div> <h2 class="text-2xl font-bold mb-8 text-center">
Le festival aura lieu à la Plaine de Jeu de Visitation.
</h2> <div class="flex flex-col md:flex-row gap-8 items-center"> <div class="md:w-1/2"> <img src="/images/plaine-visitation.jpg" alt="Plaine de Jeu de Visitation" class="rounded-lg w-full h-auto object-cover shadow-md"> </div> <div class="md:w-1/2 space-y-6"> <p class="text-base leading-relaxed">
La plaine de jeux de la Visitation à Ornans est un espace de
                    loisirs familial situé en plein air, offrant divers
                    équipements pour les enfants, comme des balançoires,
                    toboggans, et structures d'escalade. Entourée de verdure et
                    de jeux dans un cadre naturel agréable, elle est l'endroit
                    idéale pour diffuser les courts-métrages.
</p> <div class="flex justify-center"> <a href="/contact" class="inline-block px-8 py-3 bg-yellow-100 text-gray-800 rounded-md hover:bg-yellow-200 transition-colors text-center">
VOIR LA CARTE
</a> </div> </div> </div> </div> ` })}`;
}, "C:/Travail/BUT_MMI/Sa\xE9/Sae-203/sae-203-2025-francois-yang/src/pages/index.astro", void 0);

const $$file = "C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
