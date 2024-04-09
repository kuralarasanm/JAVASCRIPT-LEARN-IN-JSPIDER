let product = [
    {
        name: "realme 12pro ",
        brand: "realme",
        price: 25000,
        rating: 7.8
    },
    {
        name: "s23 ultra ",
        brand: "samsung",
        price: 130000,
        rating: 4.8
    },
    {
        name: "i15 pro ",
        brand: "apple",
        price: 150000,
        rating: 3
    },
    {
        name: "nothing 2 ",
        brand: "nothing",
        price: 50000,
        rating: 4.9
    }

]

product.map((data)=>{
// console.log(data.name);
// return data.name

console.log(`the product is ${data.brand} ${data.name}`);

})


// let res=product.filter((data)=>{
//     // return data.rating >4.5
//     return data.brand == "apple"
// })

// console.log(res);


// let total =product.reduce((sum,data)=>{
//     return sum+= data.price
// },0)
// console.log(total);


// let total = product.reduce((sum, data) => {
//     let subtotal = sum += data.price
//     // return `the subtotal of your cart is ${subtotal}` --not working in proper
//     return subtotal //-it's working 
// }, 0)
// console.log(total);

let total = product.reduce((sum, data) => {
    let subtotal = sum += data.price
    
    return subtotal
}, 0)
console.log(`the subtotal is ${total}`);