# JavaScript_part_II

##  Funciones de array o matrices
**lenght**
length es una propiedad, no una función, que indica cuántos elementos tiene el array.
No se pone paréntesis () porque no es función.
En este ejemplo, arr tiene 5 elementos → arr.length devuelve 5.
```JavaScript
var arr =["Python","JavaScript", "Ruby", "C++", "Java"]
arr.length
```

💡 Tip: En otros lenguajes, length puede ser función, pero en JS es propiedad.
**pop()**
Elimina el último elemento del array y lo devuelve. Podemos guardar en una variable el que eliminamos.

```JavaScript
var arr =["Python","JavaScript", "Ruby", "C++", "Java"]
arr; // ["Python","JavaScript", "Ruby", "C++", "Java"]
var last = arr.pop(); 
arr; // ["Python","JavaScript", "Ruby", "C++"]
last; // Java
```
**push()**
Agrega un elemento al final del array, devuelve la nueva longitud del array.

```JavaScript
arr; // [ 'Python', 'JavaScript', 'Ruby', 'C++']
arr.push('Bagwell'); // 5 (longitud nueva)
arr; // [ 'Python', 'JavaScript', 'Ruby', 'C++', 'Go' ]
```
Combinado con pop() puede agregar y eliminar elementos dinámicamente.

**shift()**
Elimina el primer elemento del array y lo devuelve
```JavaScript
arr.shift(); // Python
```
tambien se puede guardar en una variable
```javascript
arr; // [ 'Python', 'JavaScript', 'Ruby', 'C++', 'Go' ]
var first = arr.shift(); // 'Altuve'
arr; //['JavaScript', 'Ruby', 'C++', 'Go' ]
first; // Python
```
**unshift()**
Agrega un elemento al inicio del array y devuelve la longuitud del array
```JavaScript
arr; // [ 'JavaScript', 'Ruby', 'C++', 'Go' ]
arr.unshift('PHP'); // 5 (longitud nueva)
arr; // [ 'PHP', 'JavaScript', 'Ruby', 'C++', 'Go' ]
```
es como el push pero al inicio


| Función          | Qué hace             | Devuelve                 |
| ---------------- | -------------------- | ------------------------ |
| `arr.push(x)`    | Agrega `x` al final  | Nueva longitud del array |
| `arr.pop()`      | Elimina el último    | Elemento eliminado       |
| `arr.unshift(x)` | Agrega `x` al inicio | Nueva longitud del array |
| `arr.shift()`    | Elimina el primero   | Elemento eliminado       |
| `arr.length`     | Propiedad del array  | Número de elementos      |

Ejemplo paso a paso
``` javascript
var arr = ["Python","JavaScript", "Ruby", "C++", "Java"];

// Eliminar último
arr.pop(); 
// arr → ["Python","JavaScript", "Ruby", "C++"]

// Agregar al final
arr.push('Go'); 
// arr → ["Python","JavaScript", "Ruby", "C++", "Go"]

// Eliminar primer elemento
arr.shift(); 
// arr → ["JavaScript", "Ruby", "C++", "Go"]

// Agregar al inicio
arr.unshift('PHP'); 
// arr →["PHP", "JavaScript", "Ruby", "C++", "Go"]
```

**splice()**
splice() es un método de los arrays en JavaScript que permite eliminar, reemplazar o agregar elementos en cualquier posición del array.
```Javascript
array.splice(indiceInicio, numeroElementosEliminar, elemento1, elemento2, ...)
```
*indiceInicio* → posición del array donde quieres empezar a modificar.
*numeroElementosEliminar* → cuántos elementos eliminar desde esa posición.
*elemento1, elemento2...* → opcional, nuevos elementos a insertar en la posición.
Devuelve un array con los elementos eliminados inclueso si eliminas un solo elemento.
Se puede usar para eliminar, reeemplazar o agregar elementos, a diferencia de pop() o shift(), que solo eliminan del inicio o final.
Es util cuando necesitas modificar cualquier parte del array de manera dinamica.
```JavaScript
//Array inicial
//   Índice: 0        1           2       3       4
let arr = ["Python","JavaScript","Ruby","C++","Java"]
// Buscar el indice
let idx = arr.indexOf("Ruby"); // 2
arr.splice(idx, 1);            // elimina 1 elemento en índice 2
console.log(arr) //  ["Python","JavaScript","C++","Java"]


//Elemento eliminado (devuelto por splice):
//["Ruby"]


// eliminar "JavaScript" y "C++" (índices 1 y 2)
arr.splice(1, 2); // elimina 2 elementos desde índice 1

//Array después:
// //["Python","Java"]

//Elementos eliminados:
//["JavaScript","C++"]
```

## Bucles
Los bucles son estructuras de control que permiten realizar tareas repetitivas de forma rapida y sencilla, basándose en una condicion. La idea fundamental es que una acción se repite varias veces hasta que una condición especifica devuelve un valor falso (false).

#### Bucle for tradicional
Se usa cuando sabes exactamente cuántas veces quieres que se ejecute el código. Tiene tres partes: inicialización, condición y actualización.
Su sintaxis consta de tres partes principales separadas por punto y coma: 
```javascript
for (inicialización; condición; actualización) {
  // Código a ejecutar
}
```
*Inicialización*: Se ejecuta una sola vez al principio, usualmente para crear un contador (ej. let i = 0)  
*Condición*: Se evalúa antes de cada iteración; si es verdadera, el código se ejecuta.  
*Actualización*: Se ejecuta después de cada iteración, normalmente para incrementar o decrementar el contador (ej. i++).  

```Javascript
let lenguajes = ["Python","JavaScript","Ruby","C++","Java"];

for (let i = 0; i < lenguajes.length; i++) {
  console.log(lenguajes[i]);
}
```
Aqui i empieza en 0, y se incrementa hasta que llegue el último índice del array.
lenguajes[i] nos da el valor en cada posición.

#### Bucle for...in
El bucle for...in es una estructura de control que permite recorrer todas las propiedades enumerables de un objeto.
Se usa para recorrer propiedades de objetos o índices de arrays.   
Recorre claves o índices, no valores directamente  
- Si es un objeto, devuelve los nombres de las propiedades.
- Si es un array, devuelve los índices.  
Sintaxis:  
```javascript
for (variable in objeto) {
  // código a ejecutar
}
```
variable: recibe cada clave (propiedad o índice) en cada iteración.
objeto: el objeto o array que quieres recorrer.  
Las claves de un objeto son siempre tratadas como strings, incluso si son números.  

Aunque puede usarse en arrays, no se recomienda para ellos porque itera sobre los índices (como si fueran nombres de propiedades) y podría incluir propiedades personalizadas que no son elementos del array.  

Ejemplo con un objeto
```JavaScript
let info = {name: "JavaScript", year: 1995, creator: "Brendan Eich"};

for (let key in info) {
  console.log(key, info[key]);
}
```
Ejemplo de Array
```Javascript
let lenguajes = ["Python","JavaScript","Ruby","C++","Java"];

for (let i in lenguajes) {
  console.log(i, lenguajes[i]);
}
```
#### Bucle forEach
Es un método de los arrays en JavaScript que permite ejecutar una función en cada elemento del array.  
Es una forma más moderna y funcional de recorrer arrays en lugar del for clásico.
No devuelve nada (su retorno es undefined), solo ejecuta la función por cada elemento.
Sintaxis:
```JavaScript
array.forEach(function(elemento, indice, array) {
  // Código a ejecutar
});
```
Parametros de la funcion:  
1.- *elemento* el valor actual del array en la iteracion.  
2.- *indice* la posicion del elemento en el array  (opcional)  
3.- *array* el array original completo (opcional)  



```javascript
let lenguajes = ["Python", "JavaScript", "Ruby", "C++", "Java"];

lenguajes.forEach(function(lenguaje, i) {
  console.log(i, lenguaje);
});
```
El `lenguaje` es el valor de cada elemento y `i` es el indice

Tambien se puede usar la funcion flecha:  
```javascript
array.forEach((elemento, indice) => {
  // código
});
```
```javascript
lenguajes.forEach((lenguaje) => console.log(lenguaje));
```
#### Bucles While y Do...While
Los bucles while y do-while son estructuras de control que permiten repetir un bloque de código mientras se cumpla una condición específica. A diferencia del bucle for, que se usa cuando se conoce el número de iteraciones, estos son ideales cuando dicho número es desconocido o depende de una condición de salida.

**WHILE**  
Es un bucle que repite un bloque de código mientras una condición sea verdadera.
Se usa cuando no sabes exactamente cuántas veces vas a repetir algo, pero sí sabes cuándo debe parar.  
Evalúa la condición antes de cada iteración. Si la condición es falsa desde el primer momento, el código dentro del bucle no se ejecutará nunca.  
Es necesario que la condición cambie dentro del bucle, ya que de lo contrario se puede producir un bucle infinito.

Sintaxis:
```Javasript
while (condición) {
  // código a ejecutar
}
```
![Texto Alternativo](imagenes\while.png)

Ejemplo con While
```javascript
let lenguajes = ["Python", "JavaScript", "Ruby", "C++", "Java"];
let indice = 0;

while (indice < lenguajes.length) {
  console.log(lenguajes[indice]);
  indice++
}
```
**DO...WHILE**
Es una variacion de while donde la condicion se verifica al final del bloque de instrucciones.
Garantiza que el codigo se ejecuta al menos una vez, sin importar si la condicion es falsa desde el principio.  

Sintaxis:
```javasript
do {
  // bloque de código a ejecutar
} while (condición);
```
El programa se ejecuta el bloque `do` sin preguntar nada. No importa si la condición es falsa desde el principio. Despues evalua el `while` si la condicion es true vuelve al do, si es false el bucle termina.

![Texto Alternativo](imagenes\Do...While.png)

Ejemplo 

```javasript
let i = 10;

do {
  console.log("El valor de i es:", i);
  i--;
} while (i > 5);
```
![Texto Alternativo](imagenes\bucles.png)

## Seleccionar elementos en la página (DOM)

En JavaScript, la página web es representada por el DOM (Document Object Model). Para interactuar con elementos (como un input o botón), primero tenemos que seleccionarlos.

A. Métodos principales:
1. - querySelector / querySelectorAll (JavaScript puro)  
```javascript
// Selecciona el primer elemento con la clase "gLFyf"
const searchInput = document.querySelector('.gLFyf'); 

// Selecciona todos los elementos con la clase "gLFyf"
const allInputs = document.querySelectorAll('.gLFyf'); 
```
2. - `$` (en Chrome DevTools)   

En la consola de Chrome, `$` funciona como un atajo para document.querySelector:
```javascript
// Selecciona el primer input con clase "gLFyf"
$('.gLFyf'); 
```

B. Modificar el valor de un input

1. - Para escribir texto en un input:
```javascript
const searchBar = document.querySelector('.gLFyf');
searchBar.value = "JavaScript tips";
```
2. - O usando $ en la consola:
```javascript
$('.gLFyf').value = "JavaScript tips";
```
Esto es equivalente a que el usuario escriba en el input.

C. Hacer click en un botón

A veces los botones no tienen un ID único, por lo que necesitamos navegar en el DOM (traversing).

1. - Ejemplo de DOM traversal:

Supongamos que tenemos:
``` javascript
<div class="FPdoLc">
  <center>
    <input type="submit" value="Google Search">
  </center>
</div>
```
Para hacer click en el botón:
```javascript
// Seleccionamos el contenedor
const container = document.querySelector('.FPdoLc');

// Accedemos al primer hijo (<center>)
const center = container.childNodes[1];  // childNodes[0] suele ser un texto, por eso [1]

// Accedemos al botón dentro del <center>
const searchButton = center.childNodes[1];

// Hacemos click
searchButton.click();
```
2. - En la consola de Chrome usando $:
```javascript
$(".FPdoLc").childNodes[1].childNodes[1].click();
```
Esto simula que un usuario presiona el botón.

** Resumen del flujo completo**
1. Seleccionamos el input de búsqueda
2. Asignamos un valor (value)
3. Seleccionamos el botón de búsqueda
4. Llamamos a .click() en el botón

Ejemplo completo:
```javascript
// Paso 1: Seleccionamos el input
const searchBar = document.querySelector('.gLFyf');

// Paso 2: Escribimos en el input
searchBar.value = "JavaScript tips";

// Paso 3: Seleccionamos el botón
const searchButton = document.querySelector('.FPdoLc').childNodes[1].childNodes[1];

// Paso 4: Hacemos click
searchButton.click();
```
Esto hará que Google busque automáticamente “JavaScript tips”.

Conceptos importantes
- childNodes: lista de todos los nodos hijos (elementos, espacios de texto, comentarios)
- traversing: navegar de un nodo a otro para encontrar el que necesitamos
- .value: propiedad de los inputs para leer o escribir texto
- .click(): simula un click del usuario
- querySelector vs $: $ es un atajo en la consola, querySelector es JavaScript estándar

Otro ejemplo práctico: automatizar búsqueda en YouTube
```javascript
// Seleccionamos la barra de búsqueda
const ytSearch = document.querySelector('input#search');

// Escribimos el término
ytSearch.value = "JavaScript tutorials";

// Seleccionamos el botón de buscar
const ytButton = document.querySelector('button#search-icon-legacy');

// Hacemos click
ytButton.click();
```
La lógica es exactamente la misma: seleccionar input → escribir → seleccionar botón → click.