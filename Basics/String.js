const name = "Madhvi"
const repoCount = 18

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Cri-cket-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,3)
console.log(newString);

const anotherString = gameName.slice(-7,3)
console.log(anotherString);

const newStringOne = "  Madhvi  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://madhvi.com/madhvi%20saxena"

console.log(url.replace('%20', '-'));
console.log(url.includes('madhvi'));
console.log(url.includes('Madhvi'));

console.log(gameName.split('-'));