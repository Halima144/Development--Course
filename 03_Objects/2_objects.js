//Declare Objects in two ways :
//                   2. Object Literals
const mySym=Symbol("mykey1")
const jsUser={
    name:"Halima",
    age:20,
   [mySym]:"keynew",
    eMail:"hs890@gmail.com",
    isLoggedIn:true,
    lastLoginDays :["sunday","Friday"]
}
// console.log(jsUser["lastLoginDays"]);
// console.log(jsUser[mySym]);
// console.log(typeof mySym);
// jsUser.eMail="changehogaya@gmail.com"
// console.log(jsUser["eMail"]);
// Object.freeze(jsUser);
// jsUser.name="Rabia";
// console.log(jsUser["name"]);
jsUser.greeting=function(){
    console.log("Hello JS Users");
};
jsUser.greetingTwo=function(){
    console.log(`Name of a User is , ${this.name}`); // string interpolation to display console
}
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());