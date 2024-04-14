// ********************************STRING*****************************
const name=new String("Halima Sadia");
console.log(name.length);
console.log(name);
console.log(name.charAt(1));
console.log(name.toUpperCase());
//  <++++++     Substring    +++++>
console.log(name.toLowerCase());
const newname1=name.substring(0,2);
console.log(newname1);
  //  <+++++     Slice    +++++++>
const newname2= name.slice(-1,4);
console.log(newname2); 
console.log(name.trim());
console.log(name.indexOf("a"));
// *****************************NUMBERS***********************************
const number=new Number(100);
console.log( number.toString().length);
console.log(number.toFixed(1));
console.log(number.toPrecision(3));
console.log(number.toLocaleString());
console.log(number.toExponential());