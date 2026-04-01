var arr =["Python","JavaScript", "Ruby", "C++", "Java"]
console.log(arr.length)

// funcion pop()
var arr =["Python","JavaScript", "Ruby", "C++", "Java"]
console.log(arr); 
var last = arr.pop(); 
console.log(arr); 
console.log(last); 

// funcion push()
console.log ("    Funcion push()")
console.log(arr); // ['Altuve', 'Bregman', 'Correa']
arr.push('Go'); // 4 (longitud nueva)
console.log(arr);  // ['Altuve', 'Bregman', 'Correa', 'Bagwell']

//funcion shift()
console.log ("    Funcion shift()")
console.log(arr);
var first = arr.shift();
console.log(arr);
console.log(first); 

//funcion unshift()
console.log ("    Funcion unshift()")
console.log(arr);
console.log(arr.unshift("PHP"));
console.log(arr);


let array = ["JavaScript", "Ruby", "C++", "Go"]
array.push("Bagels")
console.log(array)


var arr= ['Altuve', 'Bregman', 'Correa', 'Springer'];
arr.splice(3,1)
console.log(arr)