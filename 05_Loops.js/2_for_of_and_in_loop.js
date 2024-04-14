// +++++++++++++++++++++++For-of-Loop++++++++++++++++++++
// const aikArray=[1,2,3,5,4] // For of loop in Arrays 
// for (const value of aikArray) {
//     console.log(value);
// }
// const koiString="Halima";  //For of loop in string
// for (const value of koiString) {
//     console.log(value);
// }
// const aikmap=new Map();//For of loop in Map
// aikmap.set("name","Halima");
// aikmap.set("profession","Software Engineering") 
// console.log(aikmap); 
// for (const [key,value] of aikmap) {
//     console.log(key);
//     console.log(value);
// }
// For-of loop is not iterable for objects
// const aikobject={
//     keyone:"Swift",
//     keytwo:"Ruby",
//     keythree:"Cpp"
// }
// for (const value of aikobject) {
//     console.log(value);
// }     // Not give Values
//++++++++++++++++++++++++++For-in-Loop+++++++++++++++++++
// const aikArray=[1,2,3,5,4] // For in loop in Arrays 
// for (const key in aikArray) {
//     console.log(key);
//     console.log(aikArray[key]);
// }
// const koiString="Halima";  //For in loop in string
// for (const key in koiString) {
//     console.log(key);
//     console.log(koiString[key]);
// }
// For iteration of object , we use for-in loop [map is not iterable in for in loops]
// const aikobject={
//     keyone:"Swift",
//     keytwo:"Ruby",
//     keythree:"Cpp"
// }
// for (const key in aikobject) {
//     console.log(`${key} is key of ${aikobject[key]}`);
// }
//++++++++++++++++++++++++++++++++For-Each-Loop++++++++++++++++++++
const aikaurAarray=["javascript","java","Python","cpp"];
// aikaurAarray.forEach((items)=>{
// console.log(items);
// })

// function greeting(){
//     console.log("Hello World!");
// }
// aikaurAarray.forEach(greeting);

// aikaurAarray.forEach((item,index,puriarray)=>{
//     console.log(item,index,puriarray);
// })

const arraymeiobj=[
    {
        fname:"Halima",
        course:"js"
    },
    {
       lname:"Sadia",
       course:"java" 
    }
];
arraymeiobj.forEach((item)=>{
    console.log(item.course);
})


