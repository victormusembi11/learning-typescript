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

