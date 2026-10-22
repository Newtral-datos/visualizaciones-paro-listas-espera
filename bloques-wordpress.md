# Bloques para pegar en WordPress

Cada bloque va en un bloque **HTML personalizado**. El iframe ajusta su altura solo; el `<style>` es una altura de reserva por si el ajuste automático no funciona, para que nunca se corte.

## Las fuentes de los datos

```html
<style>
  /* Altura de reserva por si el ajuste automático no funciona */
  .iframe-fuentes { height: 720px; }
  @media (max-width: 760px) { .iframe-fuentes { height: 800px; } }
  @media (max-width: 480px) { .iframe-fuentes { height: 920px; } }
  @media (max-width: 360px) { .iframe-fuentes { height: 1040px; } }
</style>
<iframe class="iframe-altura-auto iframe-fuentes"
  src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/1_fuentes_datos.html"
  title="Las fuentes de los datos"
  width="100%" scrolling="no" frameborder="0"
  style="display:block;width:100%;border:0;overflow:hidden;"></iframe>
<script>
(function () {
  if (window.__alturaIframes) return;
  window.__alturaIframes = true;
  var ORIGEN = "https://newtral-datos.github.io";
  window.addEventListener("message", function (e) {
    if (e.origin !== ORIGEN || !e.data || e.data.tipo !== "altura-iframe") return;
    var iframes = document.querySelectorAll("iframe.iframe-altura-auto");
    for (var i = 0; i < iframes.length; i++) {
      if (iframes[i].contentWindow === e.source) { iframes[i].style.height = e.data.altura + "px"; break; }
    }
  });
  function pedirAltura(f) { try { f.contentWindow.postMessage("pedir-altura", ORIGEN); } catch (err) {} }
  document.querySelectorAll("iframe.iframe-altura-auto").forEach(pedirAltura);
  document.addEventListener("load", function (e) {
    var f = e.target;
    if (f.tagName === "IFRAME" && f.classList.contains("iframe-altura-auto")) pedirAltura(f);
  }, true);
})();
</script>
```

## Algunos términos del mercado laboral

```html
<style>
  /* Altura de reserva por si el ajuste automático no funciona */
  .iframe-terminos-ml { height: 600px; }
  @media (max-width: 760px) { .iframe-terminos-ml { height: 860px; } }
  @media (max-width: 480px) { .iframe-terminos-ml { height: 960px; } }
  @media (max-width: 360px) { .iframe-terminos-ml { height: 1120px; } }
</style>
<iframe class="iframe-altura-auto iframe-terminos-ml"
  src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/2_terminos_mercado_laboral.html"
  title="Algunos términos del mercado laboral"
  width="100%" scrolling="no" frameborder="0"
  style="display:block;width:100%;border:0;overflow:hidden;"></iframe>
<script>
(function () {
  if (window.__alturaIframes) return;
  window.__alturaIframes = true;
  var ORIGEN = "https://newtral-datos.github.io";
  window.addEventListener("message", function (e) {
    if (e.origin !== ORIGEN || !e.data || e.data.tipo !== "altura-iframe") return;
    var iframes = document.querySelectorAll("iframe.iframe-altura-auto");
    for (var i = 0; i < iframes.length; i++) {
      if (iframes[i].contentWindow === e.source) { iframes[i].style.height = e.data.altura + "px"; break; }
    }
  });
  function pedirAltura(f) { try { f.contentWindow.postMessage("pedir-altura", ORIGEN); } catch (err) {} }
  document.querySelectorAll("iframe.iframe-altura-auto").forEach(pedirAltura);
  document.addEventListener("load", function (e) {
    var f = e.target;
    if (f.tagName === "IFRAME" && f.classList.contains("iframe-altura-auto")) pedirAltura(f);
  }, true);
})();
</script>
```

## Diferencias entre parados registrados y parados EPA

```html
<style>
  /* Altura de reserva por si el ajuste automático no funciona */
  .iframe-diferencias { height: 660px; }
  @media (max-width: 760px) { .iframe-diferencias { height: 660px; } }
  @media (max-width: 480px) { .iframe-diferencias { height: 640px; } }
  @media (max-width: 360px) { .iframe-diferencias { height: 720px; } }
</style>
<iframe class="iframe-altura-auto iframe-diferencias"
  src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/3_diferencias_parados.html"
  title="Diferencias entre parados registrados y parados EPA"
  width="100%" scrolling="no" frameborder="0"
  style="display:block;width:100%;border:0;overflow:hidden;"></iframe>
<script>
(function () {
  if (window.__alturaIframes) return;
  window.__alturaIframes = true;
  var ORIGEN = "https://newtral-datos.github.io";
  window.addEventListener("message", function (e) {
    if (e.origin !== ORIGEN || !e.data || e.data.tipo !== "altura-iframe") return;
    var iframes = document.querySelectorAll("iframe.iframe-altura-auto");
    for (var i = 0; i < iframes.length; i++) {
      if (iframes[i].contentWindow === e.source) { iframes[i].style.height = e.data.altura + "px"; break; }
    }
  });
  function pedirAltura(f) { try { f.contentWindow.postMessage("pedir-altura", ORIGEN); } catch (err) {} }
  document.querySelectorAll("iframe.iframe-altura-auto").forEach(pedirAltura);
  document.addEventListener("load", function (e) {
    var f = e.target;
    if (f.tagName === "IFRAME" && f.classList.contains("iframe-altura-auto")) pedirAltura(f);
  }, true);
})();
</script>
```

## Algunos términos de la EPA

```html
<style>
  /* Altura de reserva por si el ajuste automático no funciona */
  .iframe-terminos-epa { height: 500px; }
  @media (max-width: 760px) { .iframe-terminos-epa { height: 660px; } }
  @media (max-width: 480px) { .iframe-terminos-epa { height: 760px; } }
  @media (max-width: 360px) { .iframe-terminos-epa { height: 860px; } }
</style>
<iframe class="iframe-altura-auto iframe-terminos-epa"
  src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/4_terminos_epa.html"
  title="Algunos términos de la EPA"
  width="100%" scrolling="no" frameborder="0"
  style="display:block;width:100%;border:0;overflow:hidden;"></iframe>
<script>
(function () {
  if (window.__alturaIframes) return;
  window.__alturaIframes = true;
  var ORIGEN = "https://newtral-datos.github.io";
  window.addEventListener("message", function (e) {
    if (e.origin !== ORIGEN || !e.data || e.data.tipo !== "altura-iframe") return;
    var iframes = document.querySelectorAll("iframe.iframe-altura-auto");
    for (var i = 0; i < iframes.length; i++) {
      if (iframes[i].contentWindow === e.source) { iframes[i].style.height = e.data.altura + "px"; break; }
    }
  });
  function pedirAltura(f) { try { f.contentWindow.postMessage("pedir-altura", ORIGEN); } catch (err) {} }
  document.querySelectorAll("iframe.iframe-altura-auto").forEach(pedirAltura);
  document.addEventListener("load", function (e) {
    var f = e.target;
    if (f.tagName === "IFRAME" && f.classList.contains("iframe-altura-auto")) pedirAltura(f);
  }, true);
})();
</script>
```
