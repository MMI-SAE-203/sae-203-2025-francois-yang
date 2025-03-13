import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DJnjjkLt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BrefUx57.mjs';
import { g as getActiviteByID, f as formatDate } from '../../chunks/helper_D5HooWlu.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let activites = await getActiviteByID(id);
  const invites = Array.isArray(activites.expand?.invite_lie) ? activites.expand.invite_lie : activites.expand?.invite_lie ? [activites.expand.invite_lie] : [];
  const dateActivite = formatDate(activites.date_activite);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-8"> <a href="/activites" class="text-yellow-600 hover:underline mb-6 inline-block items-center">
Retour à la liste des activités
</a> <div class="bg-white rounded-lg shadow-lg overflow-hidden"> <div class="p-6"> <div class="flex justify-between items-start flex-wrap mb-4"> <h1 class="text-3xl font-bold">${activites.nom}</h1> <span class="bg-orange-200 text-orange-800 text-bold px-3 py-1 rounded-full text-sm ml-2"> ${activites.type_activite} </span> </div> <div class="flex flex-wrap gap-3 mb-6"> <div class="flex items-center text-gray-700"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span>${activites.lieu}</span> </div> <div class="flex items-center text-gray-700"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> <span>${dateActivite}</span> </div> <div class="flex items-center text-gray-700"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <span>${activites.duree_heure} heure${activites.duree_heure > 1 ? "s" : ""}</span> </div> </div> <div class="mb-8"> <h3 class="text-xl font-semibold mb-2">Description</h3> <p class="text-gray-700 whitespace-pre-line"> ${activites.description} </p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${invites.map((invite) => renderTemplate`<a${addAttribute(`/invites/${invite.id}`, "href")} class="block transition-transform hover:scale-105"> <div class="bg-white rounded-lg shadow-md overflow-hidden"> ${invite.photo && renderTemplate`<img${addAttribute(`http://127.0.0.1:8090/api/files/invite/${invite.id}/${invite.photo}`, "src")}${addAttribute(`${invite.prenom} ${invite.nom}`, "alt")} class="w-full h-48 object-cover">`} <div class="p-4"> <h3 class="font-bold text-lg"> ${invite.prenom} ${invite.nom} </h3> ${invite.role && renderTemplate`<p class="text-gray-600">${invite.role}</p>`} ${invite.nationalite && renderTemplate`<p class="text-sm text-gray-500 mt-1"> ${invite.nationalite} </p>`} <div class="mt-3 text-yellow-600 text-sm">
Voir le profil complet →
</div> </div> </div> </a>`)} </div> </div> </div> </main> ` })}`;
}, "C:/Travail/BUT_MMI/Sa\xE9/Sae-203/sae-203-2025-francois-yang/src/pages/activites/[id].astro", void 0);

const $$file = "C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/activites/[id].astro";
const $$url = "/activites/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
