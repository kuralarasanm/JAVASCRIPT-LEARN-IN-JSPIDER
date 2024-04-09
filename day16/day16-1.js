//DOM Manipulation
//content->x.textContent

// let element=document.getElementById('title') or
// let element=document.querySelector('#title')
// console.log(element.textContent);
// element.textContent="updated"

// let element=document.getElementsByClassName('title')

//content updation
// element[1].textContent="updated"// this is for less element
                      //or
// for(let i=0;i<element.length;i++){
//     element[i].textContent='updated'
// }



//1 and 2
// for(let i=0;i<element.length;i++){
//     if(i%2==0){
//         element[i].textContent=1
//     }else{
//         element[i].textContent=2
//     }
// }       
            //or

// for(let i=0;i<element.length;i++){
//     element[i].textContent=i%2 +1
// }


//1 ,2 and 3
// for(let i=0;i<element.length;i++){
//     element[i].textContent=i%3 +1
// }
             //or
             //error
//  for(let i=0;i<element.length;i++){
//     if(i%3==0){
//         element[i].textContent=1
//     }
//     else if (i%2==0) {
//         element[i].textContent=2
        
//     } else {
//         element[i].textContent=3
//     }
//  }


