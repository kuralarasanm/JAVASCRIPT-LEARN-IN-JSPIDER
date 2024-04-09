let MSD = () => {
    return `5 times cup namde`
}

// let vk=()=>{
//     return `cup final`
// }
// let VK=async()=>{
//     setTimeout(()=>{
//         return `cup final`
//     },1000)
// }
// let VK = () => {
    
//         setTimeout(() => {
//             resolve( `cup final`)
//         }, 2000)
//     }
let VK = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( `cup final`)
        }, 2000)
    })
}

let MAXI = () => {
    return `Mad max`
}

let result = async() => {
    console.log(MSD());
    // console.log(vk());
    console.log(await VK());
    console.log(MAXI());
}
result()