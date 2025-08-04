if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/FormBuilder/sw.js", {
      scope: "/FormBuilder/",
    });
  });
}
