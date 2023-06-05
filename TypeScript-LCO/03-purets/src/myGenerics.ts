const score: Array<number> = [];
const names: Array<string> = [];

function indentityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type{
    return val
}

identityThree(7)

function identityFour<T>(val: T): T{
    return val
}

identityFour<Bottle>({ brand: "", type: 89})

interface Bottle {
    brand: string,
    type: number,
}


function getSearchProducts<T>(products: T[]): T{
    //do something
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    const myIndex = 5
    return products[myIndex]
}