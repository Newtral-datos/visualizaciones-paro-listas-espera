# Bloques para pegar en WordPress

Cada bloque va en un bloque **HTML personalizado**. Copia el bloque entero.

- La altura del iframe se ajusta sola con `altura-iframes.js`, que está en este mismo repo.
- El `<style>` es una altura de reserva, por si el ajuste automático no llegara a funcionar: así nunca se corta.

## Listas de espera

### Las listas de espera en sanidad

```html
<style>
  /* Altura de reserva por si el ajuste automático no funciona */
  .iframe-cabecera-esperas { height: 740px; }
  @media (max-width: 760px) { .iframe-cabecera-esperas { height: 1000px; } }
  @media (max-width: 480px) { .iframe-cabecera-esperas { height: 1060px; } }
  @media (max-width: 360px) { .iframe-cabecera-esperas { height: 1140px; } }
</style>
<iframe class="iframe-altura-auto iframe-cabecera-esperas" src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/cabecera-esperas.html" title="Las listas de espera en sanidad" width="100%" scrolling="no" frameborder="0" style="display:block;width:100%;border:0;overflow:hidden;"></iframe>
<script src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/altura-iframes.js"></script>
```

### Calculadora de tiempos de espera

```html
<style>
  /* Altura de reserva por si el ajuste automático no funciona */
  .iframe-calculadora-esperas { height: 480px; }
  @media (max-width: 760px) { .iframe-calculadora-esperas { height: 500px; } }
  @media (max-width: 480px) { .iframe-calculadora-esperas { height: 560px; } }
  @media (max-width: 360px) { .iframe-calculadora-esperas { height: 620px; } }
</style>
<iframe class="iframe-altura-auto iframe-calculadora-esperas" src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/calculadora-esperas.html" title="Calculadora de tiempos de espera" width="100%" scrolling="no" frameborder="0" style="display:block;width:100%;border:0;overflow:hidden;"></iframe>
<script src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/altura-iframes.js"></script>
```

## Paro y empleo

### Las fuentes de los datos

```html
<style>
  /* Altura de reserva por si el ajuste automático no funciona */
  .iframe-fuentes { height: 720px; }
  @media (max-width: 760px) { .iframe-fuentes { height: 800px; } }
  @media (max-width: 480px) { .iframe-fuentes { height: 920px; } }
  @media (max-width: 360px) { .iframe-fuentes { height: 1040px; } }
</style>
<iframe class="iframe-altura-auto iframe-fuentes" src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/1_fuentes_datos.html" title="Las fuentes de los datos" width="100%" scrolling="no" frameborder="0" style="display:block;width:100%;border:0;overflow:hidden;"></iframe>
<script src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/altura-iframes.js"></script>
```

### Algunos términos del mercado laboral

```html
<style>
  /* Altura de reserva por si el ajuste automático no funciona */
  .iframe-terminos-ml { height: 600px; }
  @media (max-width: 760px) { .iframe-terminos-ml { height: 860px; } }
  @media (max-width: 480px) { .iframe-terminos-ml { height: 960px; } }
  @media (max-width: 360px) { .iframe-terminos-ml { height: 1120px; } }
</style>
<iframe class="iframe-altura-auto iframe-terminos-ml" src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/2_terminos_mercado_laboral.html" title="Algunos términos del mercado laboral" width="100%" scrolling="no" frameborder="0" style="display:block;width:100%;border:0;overflow:hidden;"></iframe>
<script src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/altura-iframes.js"></script>
```

### Diferencias entre parados registrados y parados EPA

```html
<style>
  /* Altura de reserva por si el ajuste automático no funciona */
  .iframe-diferencias { height: 660px; }
  @media (max-width: 760px) { .iframe-diferencias { height: 660px; } }
  @media (max-width: 480px) { .iframe-diferencias { height: 640px; } }
  @media (max-width: 360px) { .iframe-diferencias { height: 720px; } }
</style>
<iframe class="iframe-altura-auto iframe-diferencias" src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/3_diferencias_parados.html" title="Diferencias entre parados registrados y parados EPA" width="100%" scrolling="no" frameborder="0" style="display:block;width:100%;border:0;overflow:hidden;"></iframe>
<script src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/altura-iframes.js"></script>
```

### Algunos términos de la EPA

```html
<style>
  /* Altura de reserva por si el ajuste automático no funciona */
  .iframe-terminos-epa { height: 500px; }
  @media (max-width: 760px) { .iframe-terminos-epa { height: 660px; } }
  @media (max-width: 480px) { .iframe-terminos-epa { height: 760px; } }
  @media (max-width: 360px) { .iframe-terminos-epa { height: 860px; } }
</style>
<iframe class="iframe-altura-auto iframe-terminos-epa" src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/4_terminos_epa.html" title="Algunos términos de la EPA" width="100%" scrolling="no" frameborder="0" style="display:block;width:100%;border:0;overflow:hidden;"></iframe>
<script src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/altura-iframes.js"></script>
```

## Navegación entre capítulos del especial de paro

Los dos bloques son iguales en las páginas de Ministerios y de EPA: `capitulos.js` detecta en qué página está, marca su capítulo y enlaza al otro. Las URLs de los capítulos se cambian en `capitulos.js`, no en WordPress.

### Menú de capítulos (arriba del contenido)

```html
<div class="nt-capitulos"></div>
<script src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/capitulos.js"></script>
```

### Continúa leyendo (abajo del contenido)

```html
<div class="nt-continua"></div>
<script src="https://newtral-datos.github.io/visualizaciones-paro-listas-espera/capitulos.js"></script>
```
