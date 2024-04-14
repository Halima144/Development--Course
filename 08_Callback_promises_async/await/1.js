//  ---------------CallbACKS AND Promise And Async/Await------
function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("register end");
            resolve('aikParameter');
        }, 2000);
    });
}
 function sendEmail() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Email sent");
            resolve();
        }, 1000);
    });
}
 function Login() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            return reject('error whilew using login');
            console.log("Login successfully");
        }, 1000);
    });
}
 function getUserData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Get User Data");
            resolve();
        }, 1000);
    });
}
 function displayUserData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("Displayed User Data");
            resolve();
        }, 1000);
    });
}
// nesting or callback hell
// register(function(){
//     sendEmail(function(){
//         Login(function(){
//             getUserData(function(){
//                 displayUserData();
//             });
//         });
//     });    
// });
//--Promises--
// register().then(sendEmail).then(Login).then(getUserData).then(displayUserData).catch((err)=>{
//     console.log('Error:',err);
// });
//--Async/Await--
 async function authentication(){
    try{
        const msg=await register();
        console.log(msg);
    await sendEmail();
    await Login();
    await getUserData();
    await displayUserData();}
    catch(err){
      console.log(err);
      throw new Error();
    }
}
authentication().then(()=>{
    console.log('All Set');
}).catch((err)=>{
    console.log(err);
});
console.log("other applications work!")