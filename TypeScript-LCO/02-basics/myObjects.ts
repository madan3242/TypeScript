// const User = {
//     name: "Madan",
//     email: "madan@g.dev",
//     isActive: true
// }

import { type } from "os"

// function createUser({name: string, isActive: boolean}){}

// let newUser = {name: "Madan", isActive: true}

// createUser(newUser)

// function createCourse():{name: string, price: number}{
//     return {name: "reactjs", price: 299}
// }

//type aliases

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean
// }

// function createUser(user: User):User{
//     return {
//         name: user.name,
//         email: user.email,
//         isActive: user.isActive 
//     }
// }

// createUser({name: "", email: "", isActive: true})


type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditcardDetails?: string
}

let myUser: User = {
    _id: "87888",
    name: "M",
    email: "mema@ikk",
    isActive: false
}

myUser.email = "ma@gmail.com"

// readonly cannot be changed once it is created
// myUser._id = "ee"

type cardNumber = {
    cardnumer: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

 export {}