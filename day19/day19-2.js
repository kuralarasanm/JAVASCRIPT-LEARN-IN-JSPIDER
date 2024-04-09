let url='https://jsonplaceholder.typicode.com/todos'
let api=async()=>{
    let response=await fetch(url)
    let data= await response.json()
    console.log(data);
}


