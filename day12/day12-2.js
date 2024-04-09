let a=[1,2,3,4,5,6,7]
//filter - is a condition statement
let res = a.filter((i)=>{
    // return i>2
    // return i%2==0
    return i%2
    //or
    // return i%2!=0
})
console.log(res);