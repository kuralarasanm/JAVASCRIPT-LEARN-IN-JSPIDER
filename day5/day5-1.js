let a=[1,2,3,4,5]
let b=[]
let c=[]
//reverse an array
for(let i=a.length-1;i>=0;i--){
    // console.log(a[i])
    b.push(a[i])
}
for (let i = 0; i < a.length; i++) {
    c.unshift(a[i])
    
}
console.log(b);
console.log(c);
