//callback functions


function greet(){
    console.log('hello');
}
// setTimeout(greet,2000)
//     //  or 
// // setTimeout(()=>{console.log("hello");},2000) arrow callback function

// setInterval(greet,1000)
//     //or
// setInterval(()=>{
//     console.log("hello");
// },2000)




let result=setInterval(greet,1000)
// clearInterval(result)

// let time= ()=>{
//     clearInterval(result)
// }
// setTimeout(time,4000)

//or 
function time() {
    clearInterval(result)
}
setTimeout(time,4000)