function addTwo(num) {
    // num.toUpperCase(); // if num dosnt have a type, this will not throw an error
    return num + 2;
}

/*
Below will return 102 because the function is treating the argument as a string.
This is because the function is not expecting a type for the argument.
*/

addTwo("10"); 

function addThree(num: number) {
    // num.toUpperCase(); // This will throw an error because num is a number
    return num + 3;
}

/*
Below will return 13 because the function is treating the argument as a number.
This is because the function is expecting a type for the argument.
*/

addThree(10);

function getUpper(val: string) {
    return val.toUpperCase();
}

getUpper("hello");


function signIpUser(name: string, email: string, isPaid: boolean) {}

// signIpUser(1, 2, 3); // This will throw an error because the arguments are not the correct type
signIpUser("john doe", "johndoe@example.com", true);


let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

loginUser("jane doe", "janedoe@example.com");


// Function return types
// #####################

function addFour(num: number): number {
    // return "Hello"; // This will throw an error because the func is expecting a number to be returned
    return num + 4;
}

// Arrow function return types
const getGreeting = (greeting: string): string => {
    return `${greeting} my friend!`;
}

/*
Below we cannot add type annotation to the function because it will throw an error.
This is because the function is returning different types of values.
This will be handled by Union Types learnt later.
*/

function getValue(myVal: number) {
    if (myVal > 10) {
        return true;
    } 
    return "200 OK";
}


// Specifying return type for map function
// ######################################

const heros = ["batman", "superman", "flash"];

heros.map((hero): string => {
    return `${hero} is a hero`;
});


// Void type
// #########

/*
This is used when a function does not return anything.
*/
function consoleError(errmsg: string): void {
    console.log(errmsg);
}

// Never type
// ##########

/*
This is used when a function never returns anything.
The never type represents values which are never observed. In a return type,
this means that the function throws an exception or terminates execution of the program.
*/
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export {};