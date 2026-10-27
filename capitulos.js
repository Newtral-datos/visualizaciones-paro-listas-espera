// Navegación entre los capítulos del especial de paro (Ministerios y EPA).
// Se carga desde los bloques de WordPress con:
//   <div class="nt-capitulos"></div>   (arriba del contenido: menú de capítulos)
//   <div class="nt-continua"></div>    (abajo del contenido: "Continúa leyendo")
//   <script src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/capitulos.js"></script>
// Para cambiar una URL o añadir un capítulo, basta con tocar CAPITULOS: las páginas se actualizan solas.
(function () {
  var CAPITULOS = [
    { nombre: "Ministerios", url: "https://www.newtral.es/paro-ministerios/20261027/" },
    { nombre: "EPA", url: "https://www.newtral.es/paro-epa/20261027/" }
  ];
  var TITULO = "Los datos del paro en España";

  var CSS =
    ".nt-capitulos{display:flex;flex-wrap:wrap;align-items:center;gap:.6em 1.2em;max-width:960px;margin:0 auto 2em;padding:.8em 16px;border-bottom:1px solid #e5e5e5;font-family:inherit;line-height:1.3;color:#000;box-sizing:border-box}" +
    ".nt-capitulos__titulo{flex:1 1 auto;font-size:1em;font-weight:400}" +
    ".nt-capitulos__etiqueta{font-size:.9em;color:#666}" +
    ".nt-capitulos__botones{display:flex;gap:.5em}" +
    ".nt-capitulos .nt-capitulos__boton{display:inline-block;padding:.45em 1.1em;border-radius:3px;color:#000;font-size:1em;font-weight:500;text-decoration:none;transition:background-color .2s}" +
    ".nt-capitulos .nt-capitulos__boton:hover{background:#80F9D9;color:#000}" +
    ".nt-capitulos .nt-capitulos__boton[aria-current=page]{background:#01F3B3;color:#000}" +
    ".nt-capitulos .nt-capitulos__boton:focus-visible{outline:3px solid #000;outline-offset:2px}" +
    "@media (max-width:599px){.nt-capitulos__titulo{flex-basis:100%}}" +
    ".nt-continua{max-width:960px;margin:3em auto;padding:2.5em 16px;border-top:1px solid #e5e5e5;font-family:inherit;text-align:center;color:#000;box-sizing:border-box}" +
    ".nt-continua__titulo{margin-bottom:1em;font-size:1.4em;font-weight:700;line-height:1.3}" +
    ".nt-continua__botones{display:flex;flex-wrap:wrap;justify-content:center;gap:.6em}" +
    ".nt-continua .nt-continua__boton{display:inline-block;padding:.7em 1.6em;border-radius:3px;background:#01F3B3;color:#000;font-size:1.1em;font-weight:700;text-decoration:none;transition:background-color .2s}" +
    ".nt-continua .nt-continua__boton:hover{background:#80F9D9;color:#000}" +
    ".nt-continua .nt-continua__boton:focus-visible{outline:3px solid #000;outline-offset:3px}";

  function ruta(url) { return new URL(url, location.href).pathname.replace(/\/+$/, ""); }
  var actual = -1;
  CAPITULOS.forEach(function (c, i) { if (ruta(c.url) === ruta(location.href)) actual = i; });

  function enlace(c, clase, texto) {
    var a = document.createElement("a");
    a.className = clase;
    a.href = c.url;
    a.textContent = texto;
    return a;
  }

  function estilos() {
    if (document.getElementById("nt-capitulos-css")) return;
    var s = document.createElement("style");
    s.id = "nt-capitulos-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function menu(el) {
    el.setAttribute("role", "navigation");
    el.setAttribute("aria-label", "Capítulos");
    el.innerHTML =
      '<span class="nt-capitulos__titulo"></span>' +
      '<span class="nt-capitulos__etiqueta">Capítulos:</span>' +
      '<div class="nt-capitulos__botones"></div>';
    el.querySelector(".nt-capitulos__titulo").textContent = TITULO;
    var botones = el.querySelector(".nt-capitulos__botones");
    CAPITULOS.forEach(function (c, i) {
      var a = enlace(c, "nt-capitulos__boton", c.nombre);
      if (i === actual) a.setAttribute("aria-current", "page");
      botones.appendChild(a);
    });
  }

  function continua(el) {
    el.innerHTML =
      '<div class="nt-continua__titulo" role="heading" aria-level="2">Continúa leyendo</div>' +
      '<div class="nt-continua__botones"></div>';
    var botones = el.querySelector(".nt-continua__botones");
    // Solo el capítulo en el que NO estás (o todos, si la página no es ninguno de ellos)
    CAPITULOS.forEach(function (c, i) {
      if (i === actual) return;
      botones.appendChild(enlace(c, "nt-continua__boton", actual > -1 ? c.nombre + " →" : c.nombre));
    });
  }

  // El script se carga en los dos bloques: cada vez rellena los huecos que aún estén vacíos
  function pintar() {
    estilos();
    document.querySelectorAll(".nt-capitulos:not([data-pintado])").forEach(function (el) {
      el.setAttribute("data-pintado", "");
      menu(el);
    });
    document.querySelectorAll(".nt-continua:not([data-pintado])").forEach(function (el) {
      el.setAttribute("data-pintado", "");
      continua(el);
    });
  }

  pintar();
  document.addEventListener("DOMContentLoaded", pintar);
})();
