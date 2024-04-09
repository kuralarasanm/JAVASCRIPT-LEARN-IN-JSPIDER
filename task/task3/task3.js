let title=document.getElementById('message')

let data=[
    {message:"you will have a good day"},
    {message:"you need an umbrealla today"},
    {message:"you will have 4:30 class for 3hours today"},
    {message:"you will receive an offer letter today"},
    {message:"you will meet the love of your life"}

]
let colors=["red","green","orange","blue","violet","yellow"]
let generate =()=>{
let num=Math.trunc(Math.random()*data.length)
title.textContent=data[num].message
let color=Math.floor(Math.random()*colors.length)
title.style.color=colors[color]
// title.style.color="red"

// const randomColor = () =>  {
//     return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
// }
// title.style.color=randomColor()
}
