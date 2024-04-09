let a=[1,2,3,4,5]

// //arrayname.method()

// //pop remove last element and one element can removed
a.pop()
console.log(a);

// //push add new last element and more than one element can be added
a.push(100,200)
console.log(a);

// //shift() remove first element and one element can removed
a.shift()
console.log(a);

// //unshift() add new first element and more than one element can be added
a.unshift(100,200)
console.log(a);

//splice() - first two remove element and second two add element
a.splice(1,0,100,200)
a.splice(0,a.length)//empty of array
console.log(a);

//includes() -check array name is or not
let res=a.includes(420)
console.log(res);

//reverse an array
a.reverse()
console.log(a);
