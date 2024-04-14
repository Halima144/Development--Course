//*************************DATE************* */
let date=new Date();
console.log(date);
console.log(date.toJSON());
console.log(date.getMonth()
);
console.log(date.toString());
console.log(date.getDate());
console.log(date.toDateString());
let myCreayedDate=new Date(2021,0,23);
let myCreayedDate2=new Date("2023-01-14");
console.log(myCreayedDate.toLocaleString());
//****************TIME STAMPS******************* */
let myTimeStamps=Date.now();//in milliseconds
console.log(Math.floor(Date.now()/1000));
console.log(myTimeStamps);
console.log(myCreayedDate.getTime());//value in milli seconds