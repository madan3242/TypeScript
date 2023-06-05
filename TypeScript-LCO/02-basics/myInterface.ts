interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId? : string,
    // startTrial: () => string
    startTrial(): string,
    getCupon(cuponname: string, value: number): number
}

// reopening of interface
interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "user"
}

const madan: Admin = {
    dbId: 878778777,
    email: "m@m.com",
    userId: 7676667,
    startTrial: () => {
        return `trial started`
    },
    getCupon: (name: "madan10", off: 15) => {
        return 10
    },
    githubToken: "github",
    role: "admin",
}


// madan.dbId = 78777;