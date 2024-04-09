//if else
if(10>5){
    console.log("hello");
}else{
    console.log("bye");
}

//else-if
if(10>5){
    console.log("hello");
}else if(20>10){
    console.log("hi")
}else{
    console.log("bye")
}

//switch is check only ==
let day='fri'
switch (day) {
    case 'fri':
        console.log("go to movie");
        break;
    case 'sat':
        console.log("attend mock")
        break;
    case 'sun':
        console.log("sleeping")
        break;
    default:
        console.log("invalid");
        break;
}


//function

// let a=2;
// function square(a){
//     console.log(a**2);

// }

function square(a){
    return a**2;

}
let result=square(10) //'java' and true
console.log(result);
// not a Number=>NaN

// console.log(square(10));