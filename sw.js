if (!self.define) {
  let e,
    i = {};
  const s = (s, n) => (
    (s = new URL(s + ".js", n).href),
    i[s] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = i), document.head.appendChild(e);
        } else (e = s), importScripts(s), i();
      }).then(() => {
        let e = i[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const o =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[o]) return;
    let t = {};
    const l = (e) => s(e, o),
      f = { module: { uri: o }, exports: t, require: l };
    i[o] = Promise.all(n.map((e) => f[e] || l(e))).then((e) => (r(...e), t));
  };
}
define(["./workbox-5ffe50d4"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "assets/apple-touch-icon.png", revision: null },
        { url: "assets/favicon.png", revision: null },
        { url: "assets/icon-192.png", revision: null },
        { url: "assets/icon-512.png", revision: null },
        { url: "assets/icon.svg", revision: null },
        { url: "index.css", revision: "646ffcca87e5f138f8ffa76b03e24d7f" },
        { url: "index.html", revision: "c9fd6da67ae77f169854d6db8a5d7027" },
        { url: "index.js", revision: "db7a7667b37badb8885259bab0c910b8" },
        {
          url: "manifest.webmanifest",
          revision: "a4e49840d596628870bb00b21e90afda",
        },
        { url: "registerSW.js", revision: "de4cb96f61d91c3639742819f4c30975" },
        {
          url: "manifest.webmanifest",
          revision: "a4e49840d596628870bb00b21e90afda",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
