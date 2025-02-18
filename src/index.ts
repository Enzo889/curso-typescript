import { Hero as HeroClass } from "./classes/Hero";
import * as HeroClasses from "./classes/Hero";
import powersAnyName from "./data/powers"; // en las importaciones por default se puede poner cualquier nombre

console.log("Hello world!, today is a great day to learn TypeScript!");

const ironman = new HeroClass("Ironman", 40, 3);
const spiderman = new HeroClasses.Hero("Spiderman", 16, 4);

console.log(ironman);
console.log(spiderman);
console.log(HeroClasses.PI);

console.log(powersAnyName);
