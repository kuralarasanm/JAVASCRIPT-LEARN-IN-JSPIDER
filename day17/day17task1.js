// let mode=()=>{
//     if()
//     document.body.style.backgroundColor="black"
// }
let btn=document.querySelector('.btn')
let change=()=>{
    if (btn.textContent=="dark mode") {
        document.body.style.backgroundColor="black"
        document.body.style.color="white"
        btn.textContent="light mode"
    }
    else{
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
        btn.textContent="dark mode"
    }
}