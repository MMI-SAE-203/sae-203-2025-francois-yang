import { c as createComponent, a as createAstro, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DJnjjkLt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BrefUx57.mjs';
import { b as getInviteByID, f as formatDate } from '../../chunks/helper_D5HooWlu.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  let invite = await getInviteByID(id);
  const photoUrl = invite.photo ? `http://127.0.0.1:8090/api/files/invite/${invite.id}/${invite.affiche}` : "";
  const dateNaissance = formatDate(invite.date_naissance);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-8"> <a href="/invites" class="text-yellow-600 hover:underline mb-6 inline-block">
Retour à la liste d'invité
</a> <div class="bg-white rounded-lg shadow-lg overflow-hidden"> <div class="md:flex"> <div class="md:w-1/3"> <img${addAttribute(photoUrl, "src")}${addAttribute(`Affiche de l'invit\xE9 : ${invite.prenom} ${invite.nom}`, "alt")} class="w-full h-auto object-cover"> </div> <div class="md:w-2/3 p-6"> <h1 class="text-3xl font-bold mb-4">${invite.prenom} ${invite.nom}</h1> <div class="flex flex-wrap gap-2 mb-4"> ${renderTemplate`<span class="bg-orange-200 text-orange-800 text-bold px-3 py-1 rounded-full text-sm"> ${invite.role} </span>`} ${renderTemplate`<span class=" bg-blue-100 px-3 py-1 rounded-full text-sm">
Nationalite : ${invite.nationalite} </span>`} ${renderTemplate`<span class=" py-1 rounded-full text-sm"> ${invite.biographie} </span>`} </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"> <div> <h3 class="font-semibold text-gray-700">Date de naissance</h3> <p>${dateNaissance}</p> </div> </div> </div></div></div></main> ` })}`;
}, "C:/Travail/BUT_MMI/Sa\xE9/Sae-203/sae-203-2025-francois-yang/src/pages/invites/[id].astro", void 0);

const $$file = "C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/invites/[id].astro";
const $$url = "/invites/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
