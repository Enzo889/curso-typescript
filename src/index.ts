// import { getPokemon } from "./generics/get-pokemon";

import { Pokemon } from "./decorators/pokemon";

// getPokemon(4)
//   .then((pokemon) => console.log(pokemon.sprites.front_default))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("getPokemon = 'done'"));

const charmander = new Pokemon("Charmander");

// no se puede modificar el objeto ya que el decorador blockPrototype sella el constructor y el prototipo
// (Pokemon.prototype as any).Age = 10;

// charmander.savePokemontoDB(450);

// charmander.publicApi = "no lo puedo cambiar ya que implemente el decorador readonly";
console.log(charmander);
