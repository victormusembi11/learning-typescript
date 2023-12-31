class User {

    public email: string; // setting public access modifier
    name: string; // by default this is set as public
    private city: string = "";
    readonly qwerty = 10;

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const user1 = new User("johndoe@example.com", "john doe");
// user1.city = "Nairobi"; // this is private an only accessible in the class


class Employee {

    private _courseCount = 1
    protected _courseCount2 = 10

    constructor(public email: string, public name: string) { // another way of setting access modifiers
        this.email = email;
        this.name = name;
    }

    // getter
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    // set courseCount(courseNum): void {} // you cannot set type annotation to a setter it will cause an error

    private deleteToken() {
        console.log("token deleted")
    }

}

const emp1 = new Employee("janedoe@example.com", "janedoe");

// emp1.deleteToken() // will not work because function is private


/* NOTE: remeber when inheriting a class, the private methods/attributes are not inherited. only works with protected access modifier */

class SubEmp extends Employee {

    isFamily: boolean = true

    changeCourseCount() {
        // this._courseCount = 4 // the private methods/attributes are not inherited, this line will cause an error 
    }

    changeCourseCount2() {
        this._courseCount2 = 20 // this attr is protected meaning it's private but still accessible in inheritance
    }

}