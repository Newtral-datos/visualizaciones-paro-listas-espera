// Altura automática de los iframes de visualizaciones de GitHub Pages.
// Se carga desde cada bloque de WordPress con:
//   <script src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/altura-iframes.js"></script>
// Las visualizaciones envían su altura y aquí se la aplicamos a su iframe (los que tienen la clase iframe-altura-auto).
(function () {
  // Si hay varios bloques en la misma página, el escuchador se instala una sola vez
  if (window.__alturaIframes) return;
  window.__alturaIframes = true;
  var ORIGEN = "https://newtral-datos.github.io";

  function iframes() {
    return Array.prototype.slice.call(document.querySelectorAll("iframe.iframe-altura-auto"));
  }

  window.addEventListener("message", function (e) {
    if (e.origin !== ORIGEN || !e.data || e.data.tipo !== "altura-iframe") return;
    iframes().forEach(function (f) {
      if (f.contentWindow === e.source) f.style.height = e.data.altura + "px";
    });
  });

  // Le pedimos la altura a cada iframe, por si su primer aviso llegó antes que este script
  function pedirAltura(f) {
    try { f.contentWindow.postMessage("pedir-altura", ORIGEN); } catch (err) {}
  }
  function pedirATodos() { iframes().forEach(pedirAltura); }

  pedirATodos();
  document.addEventListener("load", function (e) {
    var f = e.target;
    if (f.tagName === "IFRAME" && f.classList.contains("iframe-altura-auto")) pedirAltura(f);
  }, true);
  document.addEventListener("DOMContentLoaded", pedirATodos);
  window.addEventListener("load", pedirATodos);
})();
