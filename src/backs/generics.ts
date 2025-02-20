import { Hero as HeroClass } from "../classes/Hero";
import * as HeroClasses from "../classes/Hero";
import powersAnyName from "../data/powers"; // en las importaciones por default se puede poner cualquier nombre
import { genericArrowFunction, genericFunction } from "../generics/generics";
import { Villain, Hero } from "../interfaces";

console.log("Hello world!, today is a great day to learn TypeScript!");

const ironman = new HeroClass("Ironman", 40, 3);
const spiderman = new HeroClasses.Hero("Spiderman", 16, 4);

console.log(ironman);
console.log(spiderman);
console.log(HeroClasses.PI);

console.log(powersAnyName);

console.log(genericArrowFunction("testing").repeat(5));
console.log(genericArrowFunction(10).valueOf());
console.log(genericFunction("testing 2").toUpperCase());
console.log(genericFunction(222.55444).toFixed(4));

const deadpool = {
  name: "Deadpool",
  realName: "Wade Wilson",
  dangerLevel: 1000,
};

console.log(genericArrowFunction<Villain>(deadpool).name);
