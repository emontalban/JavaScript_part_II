// Forma Clasica con "+"
let lenguaje = "Python";
let texto = "Estoy aprendiendo " + lenguaje;


let backend = "Java";
let mensaje = "El lenguaje de backend es " + backend;

// interpolacion moderna

let language = "JavaScript";
let text = `Estoy aprendiendo ${lenguaje}`;
console.log(text);
let frontend = "TypeScript";
let menssage = `Para frontend uso ${frontend}`;
console.log(menssage)
// con expresiones
let lenguaje1 = "Python";
let lenguaje2 = "JavaScript";

let texto1 = `Me gustan ${lenguaje1} y ${lenguaje2}`;
console.log(texto1);

// con logica dentro
let lenguajeProgramacion = "C++";
let nivel = 8;

let textoResultado = `El lenguaje ${lenguaje} tiene dificultad ${nivel > 5 ? "alta" : "baja"}`;

console.log(textoResultado);

//Multilinea
let textoMultilinea = `
Lenguajes populares:
- JavaScript
- Python
- Java
`;

console.log(textoMultilinea);