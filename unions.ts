let score: number | string | boolean = 33;

score = "thirty three";
score = true;

/*

This is not allowed because array is not assignable to type string | number | boolean 

score = [1, 2, 3];
score = {name: "John Doe", age: 33};

*/
