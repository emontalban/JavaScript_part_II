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
let info = {primero: "Python", segundo: "JavaScript", tercero: "Ruby"};

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