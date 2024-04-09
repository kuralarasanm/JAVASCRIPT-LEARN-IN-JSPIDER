let yob=document.getElementById('yob')

let submit=()=>{

//    let age=2023-yob.value

let date=new Date()
let age=date.getFullYear()-yob.value

   alert(`year age is${age}`)
}