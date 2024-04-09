// let a=[1,0,3]
// let b=[1,2,3,4]
// //concat
// // let c=b.concat(a)
// // console.log(c);

// //reverse
// let a=[1,0,3]
// let b=a.reverse()
// console.log(b);


//slice
// let a=[1,0,3,4,5,6,7]

// let b=a.slice(1,3)
// console.log(b);

let a=[1,2,3]
let b=[1,2,3]
let flag=true
// console.log(a==b);//false
if(a.length==b.length){
    for (let i = 0; i < a.length; i++) {
        if(a[i]!==b[i]){
            flag=false
        }
        
    }
}
else{
    flag=false
}
console.log(flag);
