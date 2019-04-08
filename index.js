const superheroes = require('superheroes');
const superb = require('superb');
const pokemon = require('pokemon');
const dogNames = require('dog-names');
const catNames = require('cat-names');
const supervillains = require('supervillains');
let heros = superheroes.random();
let villain = supervillains.random();
let cat = catNames.random();
let dog = dogNames.femaleRandom();
let pokemons = pokemon.random();
let superbs = superb.random();
const history = (a, b, c, d, e, f) => {
  console.log(
    `there was an hero name ${a} who had a cat name ${b} and a dog name ${c} one day while walking in the jungle he ran into an ${d} ${e} but infortunatly the situation wasn't perfect to admire ${e} because ${f} was here what would you do ? `
  );
};
let histor = history(heros, cat, dog, superbs, pokemons, villain);
console.log(histor);
