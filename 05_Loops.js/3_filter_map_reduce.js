//              ++++++++++++++++++++++ Map and Filter +++++++++++
// for each loop did not return any value thats why we use filter
const myNum=[1,2,3,4,6,8,9];
const koivariable=myNum.filter((item)=>{
 return item>6
});
console.log(koivariable);
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
// Diff Between Map and Filter:
// So, map transforms each element of an array and returns a new array with the same length, while filter selects only certain elements of an array based on a condition and returns a new array that may be shorter than the original array.
//++++++++++++++++++++++++++++Reduce++++++++++++++++++++++++
const shoppingCart = [
    { item: 'T-shirt', price: 20 },
    { item: 'Jeans', price: 50 },
    { item: 'Shoes', price: 80 }
];

const totalPrice = shoppingCart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
}, 0);

console.log(totalPrice); // Output: 150
