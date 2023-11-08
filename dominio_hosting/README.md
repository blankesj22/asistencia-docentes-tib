# Agenda de Contactos: Local vs. Nube

¡Qué onda! 🛹

Imagina que tienes dos cajas de tesoros para tus contactos. Una está en tu habitación (local) y la otra está flotando en el espacio (nube). Con esta página web, puedes elegir dónde guardar tus contactos: si quieres que estén solo en tu computadora o disponibles en cualquier dispositivo que uses.

## ¿Cómo funciona?

Cuando abres `index.html`, verás un formulario. Aquí es donde la magia comienza. Rellena los campos, y luego, según el hechizo (script) que elijas, tus contactos se guardarán localmente o en la nube.

### Local 🏠

Si quieres que tus contactos se queden solo en tu computadora, como un diario secreto, entonces necesitas usar el script local. Esto es genial porque es rápido y privado, pero si tu computadora se convierte en un zombie (se descompone) o la limpias, tus contactos se irán al más allá.

### Nube ☁️

Si quieres ser un ninja digital y acceder a tus contactos desde cualquier dispositivo, entonces elige el script de la nube. Con esto, mientras tengas internet, tus contactos estarán contigo, como tus canciones favoritas en streaming.

## ¿Qué script usar?

1. Abre el archivo `index.html` con un editor de texto (como Notepad o Visual Studio Code).
2. Busca las líneas que parecen hechizos (etiquetas de script) para `local.js` y `nube.js`.
3. Decide dónde quieres guardar tus contactos: localmente o en la nube.
4. Descomenta la etiqueta del script que quieras usar (quita los `<!--` y `-->`).
5. Asegúrate de que la otra etiqueta de script permanezca comentada (ponle `<!--` y `-->` al inicio y al final).

### Ejemplo:

Para guardar localmente, tu etiqueta de script debería verse así:

```html
<script src="local.js"></script>
<!-- <script type="module" src="nube.js"></script> -->
```

Para guardar en la nube, debería verse así:

```html
<!-- <script src="local.js"></script> -->
<script type="module" src="nube.js"></script>
```

## Antes de usar la nube...

Para que tus contactos se guarden en la nube, necesitarás configurar tu propia cuenta de Firebase. Esto es como obtener tu propia nube personal. Hay un montón de guías fáciles de seguir que son como juegos de video en modo historia, que te guiarán paso a paso.

## Y ahora, ¡a jugar!

Abre `index.html` en tu navegador y comienza a agregar contactos. Experimenta cambiando entre local y nube. Es como tener dos juegos en uno.

¡A divertirse!