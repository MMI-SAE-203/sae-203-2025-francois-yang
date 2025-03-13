import 'kleur/colors';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_DJnjjkLt.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Travail/BUT_MMI/Sa%C3%A9/Sae-203/sae-203-2025-francois-yang/","cacheDir":"file:///C:/Travail/BUT_MMI/Sa%C3%A9/Sae-203/sae-203-2025-francois-yang/node_modules/.astro/","outDir":"file:///C:/Travail/BUT_MMI/Sa%C3%A9/Sae-203/sae-203-2025-francois-yang/dist/","srcDir":"file:///C:/Travail/BUT_MMI/Sa%C3%A9/Sae-203/sae-203-2025-francois-yang/src/","publicDir":"file:///C:/Travail/BUT_MMI/Sa%C3%A9/Sae-203/sae-203-2025-francois-yang/public/","buildClientDir":"file:///C:/Travail/BUT_MMI/Sa%C3%A9/Sae-203/sae-203-2025-francois-yang/dist/","buildServerDir":"file:///C:/Travail/BUT_MMI/Sa%C3%A9/Sae-203/sae-203-2025-francois-yang/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/contact.Da1jzGVM.css"}],"routeData":{"route":"/activites/[id]","isIndex":false,"type":"page","pattern":"^\\/activites\\/([^/]+?)\\/?$","segments":[[{"content":"activites","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/activites/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/contact.Da1jzGVM.css"}],"routeData":{"route":"/activites","isIndex":true,"type":"page","pattern":"^\\/activites\\/?$","segments":[[{"content":"activites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/activites/index.astro","pathname":"/activites","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/contact.Da1jzGVM.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/contact.Da1jzGVM.css"}],"routeData":{"route":"/festival","isIndex":false,"type":"page","pattern":"^\\/festival\\/?$","segments":[[{"content":"festival","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/festival.astro","pathname":"/festival","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/contact.Da1jzGVM.css"}],"routeData":{"route":"/invites/[id]","isIndex":false,"type":"page","pattern":"^\\/invites\\/([^/]+?)\\/?$","segments":[[{"content":"invites","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/invites/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/contact.Da1jzGVM.css"}],"routeData":{"route":"/invites","isIndex":true,"type":"page","pattern":"^\\/invites\\/?$","segments":[[{"content":"invites","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invites/index.astro","pathname":"/invites","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/contact.Da1jzGVM.css"}],"routeData":{"route":"/programme/[id]","isIndex":false,"type":"page","pattern":"^\\/programme\\/([^/]+?)\\/?$","segments":[[{"content":"programme","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/programme/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/contact.Da1jzGVM.css"}],"routeData":{"route":"/programme","isIndex":true,"type":"page","pattern":"^\\/programme\\/?$","segments":[[{"content":"programme","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programme/index.astro","pathname":"/programme","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BCFd37Sx.js"}],"styles":[{"type":"external","src":"/_astro/contact.Da1jzGVM.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/festival.astro",{"propagation":"none","containsHead":true}],["C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/activites/[id].astro",{"propagation":"none","containsHead":true}],["C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/activites/index.astro",{"propagation":"none","containsHead":true}],["C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/invites/[id].astro",{"propagation":"none","containsHead":true}],["C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/invites/index.astro",{"propagation":"none","containsHead":true}],["C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/programme/[id].astro",{"propagation":"none","containsHead":true}],["C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/pages/programme/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/activites/[id]@_@astro":"pages/activites/_id_.astro.mjs","\u0000@astro-page:src/pages/activites/index@_@astro":"pages/activites.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/festival@_@astro":"pages/festival.astro.mjs","\u0000@astro-page:src/pages/invites/[id]@_@astro":"pages/invites/_id_.astro.mjs","\u0000@astro-page:src/pages/invites/index@_@astro":"pages/invites.astro.mjs","\u0000@astro-page:src/pages/programme/[id]@_@astro":"pages/programme/_id_.astro.mjs","\u0000@astro-page:src/pages/programme/index@_@astro":"pages/programme.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CIUaPIYl.mjs","C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_-qL-Qoeq.mjs","@astrojs/svelte/client.js":"_astro/client.svelte.BIfNHW0B.js","C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.7pHUGrHy.js","astro:scripts/page.js":"_astro/page.BCFd37Sx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Travail/BUT_MMI/Saé/Sae-203/sae-203-2025-francois-yang/src/components/Header.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const s=document.getElementById(\"menu-btn\"),t=document.getElementById(\"menu\"),e=s.querySelectorAll(\"span\");s&&t&&s.addEventListener(\"click\",function(){(t.classList.contains(\"lg:opacity-100\")?t.classList.contains(\"opacity-100\"):!1)?(t.classList.remove(\"visible\",\"opacity-100\"),t.classList.add(\"invisible\",\"opacity-0\"),t.setAttribute(\"aria-hidden\",\"true\"),e[0].classList.remove(\"rotate-45\",\"translate-y-[9px]\"),e[1].classList.remove(\"opacity-0\"),e[2].classList.remove(\"-rotate-45\",\"-translate-y-[9px]\")):(t.classList.remove(\"invisible\",\"opacity-0\"),t.classList.add(\"visible\",\"opacity-100\"),t.setAttribute(\"aria-hidden\",\"false\"),e[0].classList.add(\"rotate-45\",\"translate-y-[9px]\"),e[1].classList.add(\"opacity-0\"),e[2].classList.add(\"-rotate-45\",\"-translate-y-[9px]\"))})});"]],"assets":["/_astro/image_header.B1b8CgHw.jpg","/_astro/image_header_festival.D4iAY8bq.jpg","/_astro/image_header_contact.BdsIqC4y.jpg","/_astro/instagram.BkCUkUKu.svg","/_astro/twitter.b-Q3N7e5.svg","/_astro/facebook.Csz3h4A8.svg","/_astro/youtube.B_kdLAKK.svg","/_astro/tiktok.yJxKFkhB.svg","/_astro/contact.Da1jzGVM.css","/favicon.svg","/_astro/client.svelte.BIfNHW0B.js","/_astro/page.BCFd37Sx.js","/_astro/page.BCFd37Sx.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"WvCZ67HU47YlfM8HegAop3Yl8uKKkhApxxDqBl40Ycw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
