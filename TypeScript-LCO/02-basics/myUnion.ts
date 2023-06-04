// Union is combination of 2 or 3 or more types of data in array

let score: number | string = 33;
score = 45
score = "34"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let madan: User | Admin = { name: "madan", id: 8777666 }

madan = { username: "dc", id: 9999 }

function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    } else {
        id + 2
    }
}

getDbId(3)
getDbId("3")

//array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"]
const data3: number | string[] = ["1", "2", "3"]

const data4: (number | string)[] = ["1", 2, "3"]

const data5: Array<number | string> = ["1", 2, 3]

let  seatAllotment: "aisle" | "middle" | "window"