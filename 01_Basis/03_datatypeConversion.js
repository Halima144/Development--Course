// *********************Basically  Datatype-Conversion /Type Casting **************************************
// <-----------Number CONVERSION--------- >
let originalStringvalue="66abc";
console.log(typeof originalStringvalue);
let valueInNumber=Number(originalStringvalue);
console.log( typeof valueInNumber);
console.log(valueInNumber);
// "33"=>33
// "33abc"=>NaN
// TRUE=>1 , FALSE=>0
// <---------BOOLEAN CONVERSION ----------->
let isLoggedIn=1;
let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);
// 1=>true, 0=>false
//""=>false ,"hitesh"=>true
// <----------String CONVERSION------------- >
let originalnumber=33;
let stringInNumber=String(originalnumber);
console.log(originalnumber);
console.log(typeof originalnumber);
//   ************************************OPERATIONS ************************************
//<------Arithmatic operators------->
console.log(3+4);
console.log(3/4);
console.log(3*4);
console.log(3**4);
console.log(3%4);
console.log("3"+4);
console.log(3+"4");
console.log("1"+2+3);
console.log(1+2+"3");
// <-------precedence operator ------->
let gameCounter=100;
gameCounter++; // postfix
++gameCounter;//prefix
console.log(gameCounter);
//<---------Comparison operators ------->
console.log(2>6); 
console.log(2>=6);
console.log(2<6);
console.log(2<=6);
// <-----------Equality check operators ------->
console.log(null==0);
console.log(null===0);
console.log(null!=0);
//***********************Comparison of Datatypes ******************** */
console.log(2>6);
console.log("2"=2); //true
console.log(null==0);
console.log(null>0);
console.log(null>=0);
console.log(undefined==0);//false
console.log("2"===2);//false