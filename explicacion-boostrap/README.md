
# Lista de Tareas con Local Storage y Bootstrap

Este proyecto es un ejemplo simple de una lista de tareas (To-Do List) que utiliza Local Storage para guardar los datos y Bootstrap para los estilos.

## Conceptos Clave para Entender el Proyecto

### 1. HTML, CSS y JavaScript
- HTML (HyperText Markup Language) se utiliza para estructurar el contenido en la web.
- CSS (Cascading Style Sheets) se encarga del diseño y la presentación del contenido HTML.
- JavaScript es el lenguaje de programación que permite añadir interactividad y lógica al sitio web.

### 2. DOM (Document Object Model)
- El DOM es una representación en forma de árbol de todos los elementos en una página web.
- JavaScript puede modificar el DOM para cambiar contenido, estructura y estilo de la página.

### 3. `getElementById`
- Este método de JavaScript se utiliza para acceder a un elemento HTML por su atributo `id`.
- Retorna un objeto que representa el elemento único con el ID especificado.

### 4. `addEventListener`
- Este método se usa para escuchar eventos específicos que ocurren en un elemento HTML, como clics o envíos de formularios.
- Se le pasan dos argumentos: el tipo de evento y la función que se ejecutará cuando ocurra dicho evento.

### 5. `localStorage`
- Es una forma de almacenamiento web que permite guardar pares clave-valor en el navegador del usuario.
- Los datos persisten incluso después de cerrar el navegador, pero son accesibles solo desde la misma página o dominio.

### 6. `JSON.stringify` y `JSON.parse`
- `JSON.stringify` convierte un objeto JavaScript en una cadena JSON para su almacenamiento.
- `JSON.parse` convierte una cadena JSON almacenada de nuevo en un objeto JavaScript para su uso.

### 7. Array (`[]`)
- Un array es una estructura de datos que permite almacenar múltiples valores en una sola variable.
- Se puede acceder a sus elementos mediante un índice, y se pueden añadir o eliminar elementos dinámicamente.

### 8. `forEach`
- Es un método de los arrays en JavaScript que ejecuta una función para cada elemento del array.
- Es útil para iterar sobre todos los elementos de un array sin tener que escribir un bucle manualmente.

### 9. `createElement`
- Este método del DOM se utiliza para crear un nuevo elemento HTML.
- El nuevo elemento se puede configurar y luego añadir al DOM usando otros métodos como `appendChild`.

### 10. `innerHTML`
- Es una propiedad que permite obtener o establecer el contenido HTML de un elemento.
- Se puede usar para añadir elementos nuevos o modificar el contenido existente dentro de un elemento HTML.

### 11. `form.submit` y `e.preventDefault()`
- El evento `submit` se dispara cuando un formulario es enviado.
- `e.preventDefault()` se utiliza para evitar la acción predeterminada del evento, como recargar la página cuando se envía un formulario.

Con estos conceptos, tendrás una base sólida para entender cómo funciona el código del ejemplo de la lista de tareas.
