console.log("*******For tradicional******")
var members = ["uno","dos","tres","cuatro","cinco"];

for(i=0; i < members.length; i++)
{
    console.log(members[i])
}

console.log("*******For in en objetos******")
let info = {primero: "Python", segundo: "JavaScript", tercero: "Ruby"};

for (let key in info) {
  console.log(key, info[key]);
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