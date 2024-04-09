//callback function

let sum=(a,b) =>{
    return a+b
}

let product=(c,d) =>{ // product->higher order function
    return c*d
}

// let sumresult = sum(10,20) //sumresult-> callback function

// console.log(product(sumresult,20));
            //or

console.log(product(sum(10,20),30));        
