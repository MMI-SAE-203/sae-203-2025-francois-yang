import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DJnjjkLt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BrefUx57.mjs';
import { d as getFilmByID, f as formatDate } from '../../chunks/helper_D5HooWlu.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let film = await getFilmByID(id);
  const invites = Array.isArray(film.expand?.invite_lie) ? film.expand.invite_lie : film.expand?.invite_lie ? [film.expand.invite_lie] : [];
  const afficheUrl = film.affiche ? `http://127.0.0.1:8090/api/files/film/${film.id}/${film.affiche}` : "";
  const dateFilm = formatDate(film.date_film);
  const dateProjection = formatDate(film.date_projection);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-8"> <a href="/programme" class="text-yellow-600 hover:underline mb-6 inline-block">
Retour au programme
</a> <div class="bg-white rounded-lg shadow-lg overflow-hidden"> <div class="md:flex"> <div class="md:w-1/3"> <img${addAttribute(afficheUrl, "src")}${addAttribute(`Affiche du film ${film.nom_film}`, "alt")} class="w-full h-auto object-cover"> </div> <div class="md:w-2/3 p-6"> <h1 class="text-3xl font-bold mb-4">${film.nom_film}</h1> <div class="flex flex-wrap gap-2 mb-4"> ${renderTemplate`<span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"> ${film.genre} </span>`} ${renderTemplate`<span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"> ${film.duree_min} min
</span>`} ${renderTemplate`<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"> ${film.langue} </span>`} </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"> <div> <h3 class="font-semibold text-gray-700">Date de sortie</h3> <p>${dateFilm}</p> </div> ${renderTemplate`<div> <h3 class="font-semibold text-gray-700">
Date de projection
</h3> <p>${dateProjection}</p> </div>`} </div> <div class="mb-6"> ${film.liste_realisateur && film.liste_realisateur.length > 0 && renderTemplate`<div class="mb-2"> <h3 class="font-semibold text-gray-700">Réalisation</h3> <p> ${film.liste_realisateur} </p> </div>`} ${renderTemplate`<div class="mb-2"> <h3 class="font-semibold text-gray-700">Mise en scène</h3> <p>${film.metteur_scene}</p> </div>`} ${renderTemplate`<div> <h3 class="font-semibold text-gray-700">Casting</h3> <p> ${film.liste_acteur} </p> </div>`} </div> </div> </div> <div class="p-6 border-t bg-gray-50"> <h2 class="text-2xl font-bold mb-6">Invité spécial</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${invites.map((invite) => renderTemplate`<a${addAttribute(`/invites/${invite.id}`, "href")} class="block transition-transform hover:scale-105"> <div class="bg-white rounded-lg shadow-md overflow-hidden"> ${invite.photo && renderTemplate`<img${addAttribute(`http://127.0.0.1:8090/api/files/invite/${invite.id}/${invite.photo}`, "src")}${addAttribute(`${invite.prenom} ${invite.nom}`, "alt")} class="w-full h-48 object-cover">`} <div class="p-4"> <h3 class="font-bold text-lg">${invite.prenom} ${invite.nom}</h3> ${invite.role && renderTemplate`<p class="text-gray-600">${invite.role}</p>`} ${invite.nationalite && renderTemplate`<p class="text-sm text-gray-500 mt-1">${invite.nationalite}</p>`} <div class="mt-3 text-yellow-600 text-sm">Voir le profil complet →</div> </div> </div> </a>`)} </div> </div> </div> </main> ` })}`;
}, "C:/Travail/BUT_MMI/Sa\xE9/Sae-203/sae-203-2025-francois-yang/src/pages/programme/[id].astro", void 0);

const $$file = "C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/programme/[id].astro";
const $$url = "/programme/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
