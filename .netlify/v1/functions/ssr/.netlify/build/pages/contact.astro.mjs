import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DJnjjkLt.mjs';
import 'kleur/colors';
import { $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_aI-14zAD.mjs';
export { renderers } from '../renderers.mjs';

const imgHeroContact = new Proxy({"src":"/_astro/image_header_contact.BdsIqC4y.jpg","width":3584,"height":2256,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/assets/hero/image_header_contact.jpg";
							}
							
							return target[name];
						}
					});

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const title = "Contact";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": title, "src": imgHeroContact, "alt": "Contact", "description": "Vous pouvez nous joindre !" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="flex flex-col md:flex-row gap-8"> <!-- Formulaire de contact --> <div class="bg-white w-full md:w-1/2 max-w-md mx-auto p-6 rounded-lg shadow-sm"> <h2 class="text-xl mb-6">Nous contacter</h2> <form class="space-y-4"> <div> <input type="text" name="prenom" placeholder="Prénom" class="w-full p-3 border border-gray-300 rounded"> </div> <div> <input type="text" name="nom" placeholder="Nom" class="w-full p-3 border border-gray-300 rounded"> </div> <div> <input type="email" name="email" placeholder="Adresse électronique" class="w-full p-3 border border-gray-300 rounded"> </div> <div> <input type="tel" name="telephone" placeholder="Numéro de téléphone" class="w-full p-3 border border-gray-300 rounded"> </div> <div> <textarea name="message" placeholder="Message" rows="4" class="w-full p-3 border border-gray-300 rounded"></textarea> </div> <div class="text-center mt-6"> <button type="submit" class="bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-6 border border-gray-400 rounded shadow">
Envoyer
</button> </div> </form> </div> <!-- Informations de contact et carte --> <div class="bg-white w-full md:w-1/2 max-w-md mx-auto p-6 rounded-lg shadow-sm"> <h2 class="text-xl mb-6">Nos coordonnées</h2> <div class="space-y-4 mb-8"> <div class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <span>E-mail: <a href="mailto:flashcine25@gmail.com" class="text-blue-600 hover:underline">flashcine25@gmail.com</a></span> </div> <div class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span>Téléphone: <a href="tel:0381152682" class="text-blue-600 hover:underline">03 81 15 26 82</a></span> </div> </div> <div class="mt-8"> <h3 class="text-lg font-medium text-center mb-4">~ Retrouvez nous à la Plaine de Jeu de Visitation ~</h3> <div class="mb-2 text-center">La carte</div> <div class="rounded-lg overflow-hidden border border-gray-300 mb-4"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.9395568010773!2d6.023547976926793!3d47.24183077099058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478d63ae8e9507f5%3A0x8b9d9a94b8f30b5a!2sPlaine%20de%20jeux%20de%20la%20Visitation!5e0!3m2!1sfr!2sfr!4v1710338887736!5m2!1sfr!2sfr" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe> </div> <div class="text-center"> <a href="https://maps.app.goo.gl/zE1ZF4KQ2xNrDFwh9" target="_blank" rel="noopener noreferrer" class="text-sm text-gray-600 hover:underline">
Cliquez ici pour accéder à Google Map
</a> </div> </div> </div> </div> </div> ` })}`;
}, "C:/Travail/BUT_MMI/Sa\xE9/Sae-203/sae-203-2025-francois-yang/src/pages/contact.astro", void 0);

const $$file = "C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
