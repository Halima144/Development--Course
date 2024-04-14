//                                  Pre-Requisite 
const user={
    name:"aikname",
    price:999,
    greeting:function(){
        console.log(`${this.name} ,Welcome to Disney World`);
        console.log(this);
    }
}
// user.name="aiknayaname";
// console.log(user.greeting());
// console.log(this); // it show {} but in browser it hsow window instances bcz Global object in Browser is Window object
// functions m this.user nhi kr skty
//                                     Arrow Function
// const arrowfun=(arg1,arg2)=>{
//     return arg1+arg2;
// }
// console.log(arrowfun(4,6));   //Simple return
const arrowfun=(arg1,arg2)=>  arg1+arg2; // Implicit return
console.log(arrowfun(4,6));


