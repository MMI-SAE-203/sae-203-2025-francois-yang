import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_DJnjjkLt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BrefUx57.mjs';
import 'clsx';
import { f as formatDate, c as getAllInviteSorted } from '../chunks/helper_D5HooWlu.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$InviteCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InviteCard;
  const { ...invite } = Astro2.props;
  const photoUrl = invite.photo ? `http://127.0.0.1:8090/api/files/invite/${invite.id}/${invite.photo}` : "/images/placeholder-person.jpg";
  const dateNaissance = formatDate(invite.date_naissance);
  const bio = invite.biographie;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"> <a${addAttribute(`/invites/${invite.id}`, "href")} class="block"> <div class="relative"> <img${addAttribute(photoUrl, "src")}${addAttribute(`${invite.prenom} ${invite.nom}`, "alt")} class="w-full h-64 object-cover"> <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4"> <h3 class="text-white font-bold text-xl"> ${invite.prenom} ${invite.nom} </h3> ${invite.role && renderTemplate`<p class="text-white text-sm opacity-90">${invite.role}</p>`} </div> </div> <div class="p-4"> <div class="flex flex-wrap gap-2 mb-3"> ${invite.nationalite && renderTemplate`<span class="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full"> ${invite.nationalite} </span>`} ${dateNaissance && renderTemplate`<span class="bg-gray-50 text-gray-700 text-xs px-2 py-1 rounded-full">
Né(e) le ${dateNaissance} </span>`} </div> ${bio && renderTemplate`<div class="mt-3"> <p class="text-gray-600 text-sm line-clamp-3">${bio}</p> </div>`} </div> </a> </div>`;
}, "C:/Travail/BUT_MMI/Sa\xE9/Sae-203/sae-203-2025-francois-yang/src/components/InviteCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const invites = await getAllInviteSorted();
  const allRoles = ["R\xE9alisateur", "Acteur", "Animateur"];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Liste des invit\xE9s" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div x-data="{ activeFilter: 'all' }"> <h1 class="text-3xl font-bold text-center my-8">Les invités du festival</h1> <div class="mb-8 flex flex-wrap gap-4 justify-center"> <button @click="activeFilter = 'all'" :class="activeFilter === 'all' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'" class="px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-200 transition-colors">
Tous
</button> ${allRoles.map((role) => renderTemplate`<button${addAttribute(`activeFilter = '${role.toLowerCase()}'`, "@click")}${addAttribute(`activeFilter === '${role.toLowerCase()}' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'`, ":class")} class="px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"> ${role}s
</button>`)} </div> <div id="invites-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 max-w-6xl mx-auto px-4"> ${invites.length > 0 ? invites.map((invite) => renderTemplate`<div${addAttribute(`activeFilter === 'all' || '${invite.roles?.join(",").toLowerCase() || ""}'.includes(activeFilter)`, "x-show")} class="transition-opacity duration-300"> ${renderComponent($$result2, "InviteCard", $$InviteCard, { ...invite })} </div>`) : renderTemplate`<p class="text-center col-span-full">Aucun invité à afficher.</p>`} <!-- Message affiché quand aucun résultat ne correspond au filtre --> <p${addAttribute(`!document.querySelectorAll('#invites-grid > div[style*="display: block"]').length && activeFilter !== 'all'`, "x-show")} x-cloak class="text-center col-span-full">
Aucun invité ne correspond à ce filtre.
</p> </div> </div> ` })}`;
}, "C:/Travail/BUT_MMI/Sa\xE9/Sae-203/sae-203-2025-francois-yang/src/pages/invites/index.astro", void 0);

const $$file = "C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/invites/index.astro";
const $$url = "/invites";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
