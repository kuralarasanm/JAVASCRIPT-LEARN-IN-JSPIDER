let yob=document.getElementById('yob')

let submit=()=>{
    if(yob.value.length==""){
        alert("please enter the year before search")
    }else{
        let date=new Date()
let age=date.getFullYear()-yob.value

   alert(`year age is${age}`)
    }
}
