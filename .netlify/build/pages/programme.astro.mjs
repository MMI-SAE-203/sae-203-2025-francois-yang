import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_DJnjjkLt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BrefUx57.mjs';
import 'clsx';
import { f as formatDate, e as getAllFilms } from '../chunks/helper_D5HooWlu.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$FilmCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FilmCard;
  const {
    id,
    nom_film,
    date_film,
    duree_min,
    genre,
    affiche,
    synopsis,
    langue,
    liste_acteur,
    liste_realisateur,
    metteur_scene,
    date_projection
  } = Astro2.props;
  const dateFilm = formatDate(date_film);
  const dateProject = formatDate(date_projection);
  const afficheUrl = affiche ? `http://127.0.0.1:8090/api/files/film/${id}/${affiche}` : "";
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"> <a${addAttribute(`/programme/${id}`, "href")} class="block"> <img${addAttribute(afficheUrl, "src")}${addAttribute(`Affiche du film ${nom_film}`, "alt")} class="w-full h-64 object-cover"> <div class="p-5"> <h3 class="font-bold text-xl mb-2">${nom_film}</h3> <div class="flex flex-wrap gap-2 mb-3"> <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">${genre}</span> <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">${duree_min} min</span> <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">${langue}</span> </div> <div class="mb-3"> <p class="text-gray-600 text-sm"> <span class="font-medium">Date de sortie initiale:</span> ${dateFilm} </p> <p class="text-gray-600 text-sm mt-1"> <span class="font-medium">Date de Projection:</span> ${dateProject} </p> </div> <div class="mb-3 space-y-1"> ${liste_realisateur && liste_realisateur.length > 0 && renderTemplate`<p class="text-gray-700 text-sm"> <span class="font-medium">Réalisation:</span>${" "} ${liste_realisateur} </p>`} ${metteur_scene && renderTemplate`<p class="text-gray-700 text-sm"> <span class="font-medium">Mise en scène:</span>${" "} ${metteur_scene} </p>`} ${liste_acteur && liste_acteur.length > 0 && renderTemplate`<p class="text-gray-700 text-sm"> <span class="font-medium">Avec:</span>${" "} ${liste_acteur} </p>`} </div> <p class="text-gray-700 line-clamp-3 text-sm mt-3">${synopsis}</p> </div> </a> </div>`;
}, "C:/Travail/BUT_MMI/Sa\xE9/Sae-203/sae-203-2025-francois-yang/src/components/FilmCard.astro", void 0);

const $$Caroussel = createComponent(async ($$result, $$props, $$slots) => {
  const films = await getAllFilms();
  const carouselEvents = films.map((film) => ({
    id: film.id,
    title: film.nom_film,
    img: film.affiche ? `http://127.0.0.1:8090/api/files/film/${film.id}/${film.affiche}` : "/images/placeholder-affiche.jpg",
    description: film.synopsis,
    genre: film.genre,
    date: film.date_projection
  }));
  return renderTemplate`${maybeRenderHead()}<div class="md:hidden px-4 mb-8"> <div${addAttribute(`{events:${JSON.stringify(carouselEvents)}, index: 0 }`, "x-data")}> <div class="relative bg-white rounded-lg shadow-lg overflow-hidden"> <img x-bind:src="events[index].img" x-bind:alt="events[index].title" class="w-full h-64 object-cover"> <div class="p-4"> <h2 class="text-xl font-bold" x-text="events[index].title"></h2> <div class="flex gap-2 my-2"> <span x-show="events[index].genre" class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded" x-text="events[index].genre"></span> </div> <p class="text-gray-700 line-clamp-2 text-sm" x-text="events[index].description"></p> <a x-bind:href="'/programme/' + events[index].id" class="inline-block mt-3 text-yellow-600 hover:underline text-sm">
Voir les détails →
</a> </div> <div class="flex justify-between items-center p-3 bg-gray-50 border-t"> <span class="text-sm text-gray-500"> <span x-text="index + 1"></span> / <span x-text="events.length"></span> </span> <div class="flex gap-2"> <button @click="index = (index === 0 ? events.length - 1 : index - 1)" class="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1 rounded-full"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> </button> <button @click="index = (index === events.length - 1 ? 0 : index + 1)" class="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1 rounded-full"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path> </svg> </button> </div> </div> </div> </div> </div>`;
}, "C:/Travail/BUT_MMI/Sa\xE9/Sae-203/sae-203-2025-francois-yang/src/components/Caroussel.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const films = await getAllFilms();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Programme des films" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold text-center my-8">Programme des films</h1> ${renderComponent($$result2, "Caroussel", $$Caroussel, { "events": films })} <div class="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 max-w-6xl mx-auto px-4"> ${films.length > 0 ? films.map((film) => renderTemplate`${renderComponent($$result2, "FilmCard", $$FilmCard, { "id": film.id, "nom_film": film.nom_film, "date_film": film.date_film, "duree_min": film.duree_min, "genre": film.genre, "affiche": film.affiche, "synopsis": film.synopsis, "metteur_scene": film.metteur_scene, "pays_origine": film.pays_origine, "langue": film.langue, "liste_acteur": film.liste_acteur, "liste_realisateur": film.liste_realisateur, "date_projection": film.date_projection })}`) : renderTemplate`<p class="text-center col-span-full">Aucun film à afficher.</p>`} </div> ` })}`;
}, "C:/Travail/BUT_MMI/Sa\xE9/Sae-203/sae-203-2025-francois-yang/src/pages/programme/index.astro", void 0);

const $$file = "C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/programme/index.astro";
const $$url = "/programme";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
