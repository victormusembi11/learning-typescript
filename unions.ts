let score: number | string | boolean = 33;

score = "thirty three";
score = true;

/*

This is not allowed because array is not assignable to type string | number | boolean 

score = [1, 2, 3];
score = {name: "John Doe", age: 33};

*/

type User = {
    name: string,
    id: number,
}

type Admin = {
    username: string,
    id: number,
}

let user: User | Admin = {
    name: "John Doe", // Currenlty it's a User type
    id: 1,
}

user = {
    username: "johndoe", // It's now changed to an Admin type
    id: 2,
}

// Array of different types
// ########################

/*
When trying to add different types of values to an array,
below is incorrect way of doing it because it means the array
can have string or number values but not both.
*/

const data: string[] | number[] = [];

// This is the correct way of doing it
const data2: (string | number)[] = [];


let seatAllotment: "aisle" | "window" | "middle";

seatAllotment = "aisle";

// seatAllotment = "crew";  // This is not allowed because crew is not assignable to type "aisle" | "window" | "middle"