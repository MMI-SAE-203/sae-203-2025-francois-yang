import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_DJnjjkLt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BrefUx57.mjs';
import 'clsx';
import { f as formatDate, a as getAllActivitiesByDate } from '../chunks/helper_D5HooWlu.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ActiviteCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ActiviteCard;
  const { ...activite } = Astro2.props;
  const dateActivite = formatDate(activite.date_activite);
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"> <a${addAttribute(`/activites/${activite.id}`, "href")} class="block flex-grow"> <div class="relative"> <div class="bg-orange-400 p-4"> <h3 class="text-white font-bold text-xl truncate"> ${activite.nom} </h3> </div> </div> <div class="p-4 flex-grow"> <div class="flex items-center mb-3"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <p class="text-gray-700">${activite.lieu}</p> </div> <div class="flex items-center mb-3"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <p class="text-gray-700">${dateActivite}</p> </div> <div class="flex items-center mb-3"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <p class="text-gray-700">${activite.duree_heure} heures</p> </div> <div class="mb-4"> <span class="inline-block bg-orange-100 text-orange-800 text-sm font-medium px-2.5 py-0.5 rounded"> ${activite.type_activite} </span> </div> <p class="text-gray-600 mb-4 line-clamp-3"> ${activite.description} </p> </div> </a> <div class="px-4 pb-4 mt-auto"> <a${addAttribute(`/activites/${activite.id}`, "href")} class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-block w-full transition-colors duration-300">
Voir détails
</a> </div> </div>`;
}, "C:/Travail/BUT_MMI/Sa\xE9/Sae-203/sae-203-2025-francois-yang/src/components/ActiviteCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const activites = await getAllActivitiesByDate();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Les activit\xE9s du festival" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <h1 class="text-4xl font-bold text-center my-8">
Les activités du festival
</h1> <div class="max-w-6xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12"> ${activites.length > 0 ? activites.map((activite) => renderTemplate`${renderComponent($$result2, "ActiviteCard", $$ActiviteCard, { ...activite })}`) : renderTemplate`<p class="text-center col-span-full text-lg">
Aucune activité à afficher pour le moment.
</p>`} </div> </div> </div> ` })}`;
}, "C:/Travail/BUT_MMI/Sa\xE9/Sae-203/sae-203-2025-francois-yang/src/pages/activites/index.astro", void 0);

const $$file = "C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/activites/index.astro";
const $$url = "/activites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
