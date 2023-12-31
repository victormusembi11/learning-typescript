// Generics on arrays
const score: Array<number> = []
const names: Array<string> = []


// Bad practice. using too many or |
function identityOne(val: boolean | number): boolean | number {
    return val
}

// Bad practice should avoid using any. makes typescript pointless
function identityTwo(val: any): any {
    return val
}


// Here if int 3 is inputed it'll return int 3, if "3" is inputed it'll return "3" you don't have to use too many | to set type
function identityThree<Type>(val: Type): Type {
    return val
}


// This is the same thing as above but more common than using the full 'Type'
function identityFour<T>(val: T): T {
    return val
}

interface Bootle {
    brand: string
    type: number
}

identityFour<Bootle>({brand: "test", type: 10})


// Generics in arrow functions
// ###########################

function getSearchProduct<T>(products: T[]): T {
    // do some db operations
    const index = 3
    return products[index]
}

// converting the above to an arrow function below
// Note: When you see <T,> this is to say that it's not jsx syntax by ts generics

const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some db operations
    const index = 3
    return products[index]
}

// More on generics
// ################

function anotherFunction<T, U extends number>(valueOne: T, valueTwo: U): object {
    return {
        valueOne,
        valueTwo
    }
}

// anotherFunction(3, "4") // this will not work because U extends number


// Using interface to extend generic type
// ######################################

interface Database {
    connection: string,
    username: string,
    password: string
}

function databaseFunction<T, U extends Database>(valueOne: T, valueTwo: U): object {
    return {
        valueOne,
        valueTwo
    }
}

databaseFunction(3, {connection: "root", username: "root", password: "pwd123"})


// Generic classes
// ###############
class Sellable<T>{

    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }

}
