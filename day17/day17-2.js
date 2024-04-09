let element=document.querySelector('#title')
let element1=document.getElementsByClassName('title')
let submit=()=>{
    element.style.color="red"
    element.textContent="submited"
    element1[0].style.color="green"
}