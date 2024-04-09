let email=document.getElementById('email')
let password=document.getElementById('password')
let image=document.querySelector('img')

let login=()=>{
    if (email.value =="mkuralarasan39@gmail.com" && password.value==123456) {
        alert('login successful')
        image.src='success.gif'
    } else {
        alert('login failed')

        email.style.border="1px solid red"
        password.style.border="1px solid red"
        image.src='fail.gif'   
     }
     
}