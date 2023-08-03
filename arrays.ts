const employees = [];

// employees.push("john doe"); // This is not allowed string is not assignable to type never

const superHeros: string[] = [];
const heroPower: number[] = [];

// This is allowed
superHeros.push("batman");
heroPower.push(10); 

// Using type alias with arrays
// ############################

type Employee = {
    name: string,
    isActive: boolean,
}

const allEmployees: Employee[] = [];

// pushing values to the array
allEmployees.push({name: "John Doe", isActive: true});
allEmployees.push({name: "Jane Doe", isActive: false});


// Multidimensional arrays
const MLModels: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
];
