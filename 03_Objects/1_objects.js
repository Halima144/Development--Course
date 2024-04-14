//Declare Objects in two ways :
//               1. Constructor (singelton (ye apni trhn ka aik hi object hai))
// Object.create 
const aikObj=new Object() // same as const aikObj={} 
aikObj.email="falanfalan@gmail.com";
aikObj.address="gujrat";
aikObj.login=false;
// console.log(aikObj);
const aikAurObj={
    name:{ fullName:{
        fistName:"Halima",
        lastName:"Sadia"
    }}
}
// console.log(aikAurObj);
// console.log(aikAurObj.name.fullName.lastName); //Nesting of Objects
const obj1={1:"A",2:"B"}
const obj2={3:"C",4:"D"}
// const obj3=Object.assign({},obj1,obj2); //Merge two objects in third object
const obj3={...obj1,...obj2}; 
console.log(obj3.hasOwnProperty('3'));
// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));
const  aikArray =[{aikname:"a",aikid:"b"},{doname:"c",doid:"d"}];//Arrays in objects 
// console.log(aikArray[1].doid);

