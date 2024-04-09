//API     //node -v-to check version of node
let url='https://jsonplaceholder.typicode.com/users'
let api=async()=>{
    let response=await fetch(url)
    // console.log(response);
    let data= await response.json()
    // console.log(data);
    // console.log(data.length);//to length of the array

    // for(let i=0;i<data.length;i++){
    //     console.log(data[i].name);
    // }      
              //or
    data.map((i)=>{
        console.log(i.name);
        console.log(i.email);
    })
}
api()

