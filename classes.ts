class User {

    email: string;
    name: string;
    city: string = "";
    readonly qwerty = 10;

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const user1 = new User("johndoe@example.com", "john doe");
user1.city = "Nairobi";
