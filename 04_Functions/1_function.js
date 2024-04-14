//Rest operator
function calculatecartprice(var1,var2,...numb){
    return numb
}
console.log(calculatecartprice(100,200,500,400))
//objects in functions
const obj={
    name:"halima",
    codeError:1000
}
function handleobject(koibhiobj){
    console.log(`name is :${koibhiobj.name} code errors are :${koibhiobj.codeError}`);
}
handleobject(obj);
//Arrays in functions
const aikarray=[1,2,33,4445];
function returnSecondValue(koibhiarray){
    return koibhiarray[1];
}
console.log(returnSecondValue(aikarray));