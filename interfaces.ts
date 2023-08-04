interface User {
    readonly _dbId: number,
    email: string,
    userId: number,
    isActive?: boolean,
    startTrail: () => string,
    startTrail2:  string,
    getCoupon(name: string, value: number): number,
}

// Reopening of the interface
interface User {
    githubToken: string
}

const user: User = {
    _dbId: 22,
    email: "johndoe@example.com",
    userId: 2211,
    startTrail: () => {
        return "Trail started"
    },
    startTrail2: "Trail started",
    getCoupon: (name: "john10", off: 10) => {
        return 10;
    },
    githubToken: "Y^&f65dTYfi&dbhjvgf&%^*e6d",
};




export {};