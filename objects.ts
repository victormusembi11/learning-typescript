const User = {
    name: "John Doe",
    email: "johndoe@example.com",
    isActive: true,
}

function createUser({name: string, isPaid: boolean}): void {}

let newUser = {name: "Jane Doe", isPaid: false, email: "johndoe@eexample.com"};

/*
Typescript is not warning us about the extra property email
because we are using the object literal syntax to create the object
though it is not a good practice to do so.
*/
createUser(newUser);


// Returning an object from a function
// ###################################

function createCourse(): {name: string, price: number} {
    return {name: "Joghn doe", price: 10};
}

export {};