function addTwo(num: number){
    return num + 2;
}
let myValue = addTwo(5);

function getUpper(value: string) {
    return value.toUpperCase()
}
getUpper("4")

function signUpUser(name: string, email: string, isPaid: boolean) {}
signUpUser("Madan", "madan@gmail.com", true);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}
loginUser("m", "m@m");

// let getValue = (myVal: number): boolean => {
//     if (myVal > 5){
//         return true
//     }
//     return "200 OK"
// }


const getHello = (s: string): string => {
    return "Hello"
}

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero:string) => {
    return `hero is ${hero}`
})

function consoleError(errorMsg: string): void{
    console.log(errorMsg);
}

function handleError(errorMsg: string): never{
    throw new Error(errorMsg);
}

export {}