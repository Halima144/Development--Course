//             Immediately Invoked Function Expression (IIFE) 
//global scope k pollution s problem hoti h sometime immediately invoke krna m kisi bhi function ko thats wht IIFE is used
(function connection(){
    console.log("DB CONNECTED");
}) ();  // named IFFE
((name)=>{
  console.log(`My name  is ${name}`);
})("Halima") //NO Named IFFE