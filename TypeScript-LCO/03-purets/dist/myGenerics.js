"use strict";
const score = [];
const names = [];
function indentityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(7);
function identityFour(val) {
    return val;
}
identityFour({ brand: "", type: 89 });
function getSearchProducts(products) {
    //do something
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    const myIndex = 5;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
