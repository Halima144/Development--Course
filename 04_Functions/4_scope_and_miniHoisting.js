//                               SCOPE
// if(true){
//     let a=10;
//     const b=20;
//     var c=70;
// }

// console.table([a,b,c]);
// console.log(c);  //local scope within and outside {}
// console.log(a);  // global scope 
// console.log(b); //global scope
//                       NESTED SCOPE
function one() {
    const company = "Microsft";
    function two() {
        const dusricompany = "Google";
        function three() {
            const teesricompany = "Facebook";
            console.log(dusricompany); // Child parent k variables ko access kr skta
        }
        // console.log(teesricompany); // parent child ko access ni kr skta
        three();
    }
    two();
}
console.log(one());
//                          MINI - HOISTING 
console.log(x); // Output: undefined
var x = 5;
sayHello(); // Output: Hello!

function sayHello() {
    console.log("Hello!");
}

