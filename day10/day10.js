//ES-6
// function Scope(){
//     for(let i=0;i<5;i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// Scope()


function Scope(){
    for(var i=0;i<5;i++){
        console.log(i);
    }
    console.log(i);
}
Scope()

// function Scope(){
//     for(const i=0;i<5;i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// Scope()