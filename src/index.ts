import { getPokemon } from "./generics/get-pokemon";

getPokemon(4)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("getPokemon = 'done'"));
