const printToConsole = (constructor: Function) => {
  console.log(constructor);
};

// This is a decorator factory
function printToConsoleConditional(print: boolean = false): Function {
  if (print) {
    return printToConsole;
  } else {
    return () => console.log("the decorator is not printing to the console");
  }
}

const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function checkValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalValue = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 500) {
        return console.error("the pokemon ID has to be between 1 and 500");
      } else {
        return originalValue(id);
      }
    };
  };
}

function readonly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this);
        return "Fernando";
      },
      set(this, val) {
        // console.log(this, val )
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

// @printToConsole
// se pueden usar varios decoradores
@blockPrototype
@printToConsoleConditional()
export class Pokemon {
  @readonly()
  public publicApi = "https://pokeapi.co/";

  constructor(public name: string) {}

  @checkValidPokemonId()
  savePokemontoDB(id: number) {
    console.log(`the pokemon with the ID: "${id}" has been saved to the DB`);
  }
}
