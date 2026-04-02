console.log("*******For tradicional******")
var members = ["uno","dos","tres","cuatro","cinco"];

for(i=0; i < members.length; i++)
{
    console.log(members[i])
}

console.log("*******For in en objetos******")
let info = {name: "Python", year: 1991, creator: "Guido von Rossum"};
let info_two = {name: "JavaScript", year: 1995, creator: "Brendan Eich"};

for (let key in info) {
  console.log(key, "=> " + info[key]);
}


console.log("*******For in en arrays******")
let lenguajes = ["Python","JavaScript","Ruby","C++","Java"];

for (let i in lenguajes) {
  console.log(i, lenguajes[i]);
}


console.log("*******For each******")
let languages = ["Python", "JavaScript", "Ruby", "C++", "Java"];

languages.forEach(function(language, i) {
  console.log(i, language);
});

// for in con objetos
let user ={
  username : "Keira",
  email : "email@email.com",
  phone : "90 000 00 00"
};

for (let key in user) {
  console.log(key + " => " + user[key]);

}

//Bucle while
let while_lenguajes = ["Python","JavaScript","Ruby","C++","Java"];

var i=0;
while(i< while_lenguajes.length)
{
  console.log(while_lenguajes[i])
  i++;
}

var dogHouse = ["Sara", "kiara", "Txispas", "Golden"];
var data = 0;
while (data < dogHouse.length){
  console.log(dogHouse[data])
  data++
}

let indice = 0;

while (indice < lenguajes.length) {
  console.log(lenguajes[indice]);
  indice++
}

let j = 10;

do {
  console.log("El valor de i es:", j);
  j--;
} while (j > 5);