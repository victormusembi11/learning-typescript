// When to use type annotations
// ############################

// 1. When a function returns the 'any' type and we need to clarify the value
// 2. When we declare a variable on one line then initialize it later

let hero: string;

function getHero() {
    // return true; // This will throw an error because getHero() is supposed to return a string
    return "Batman";
}

hero = getHero();

// More on ANY type - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any