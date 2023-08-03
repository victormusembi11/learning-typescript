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

// Type alias
// ################

type Employee = {
    name: string,
    email: string,
    isActive: boolean,
}

function createEmployee(employee: Employee): Employee {
    return {name: employee.name, email: employee.email, isActive: employee.isActive};
}

createEmployee({name: "John Doe", email: "johndoe@example.com", isActive: true});


// Readonly & Optional properties
// ####################

type Customer = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditcardDetails?: string, // Optional property
}


let customer: Customer = {
    _id: "123",
    name: "John Doe",
    email: "johndoe@example.com",
    isActive: true,
}

customer.name = "Jane Doe";
// customer._id = "456"; // Error: Cannot assign to '_id' because it is a read-only property.


// Combining types
// ###############

type cardNumber = {
    cardNumber: string,
}

type cardDate = {
    cardDate: string,
}


// this is called intersection type. its not good practice to use it.
type cardDetails = cardNumber & cardDate & {
    cardCVV: number,
}

export {};