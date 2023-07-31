const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);  //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]);    //flash

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_New_Heros = [...marvel_heros, ...dc_heros]
console.log(all_New_Heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Madhvi"));   //false
console.log(Array.from("Madhvi"));  //[ 'M', 'a', 'd', 'h', 'v', 'i' ]
console.log(Array.from({name: "Madhvi"}));   //[]   interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ]