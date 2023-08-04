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

    constructor(public email: string, public name: string) { // another way of setting access modifiers
        this.email = email;
        this.name = name;
    }

    // getter
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

}

const emp1 = new Employee("janedoe@example.com", "janedoe");
