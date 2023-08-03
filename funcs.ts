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

export {};