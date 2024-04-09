let a=[1,0,3,5,8]

//sort the array in asscending order
for(let i=0;i<a.length;i++){
    for(j=i+1;j<Array.length;j++){
        if(a[i]>a[j]){
            let temp;
            temp=a[i]
            a[i]=a[j]
            a[j]=temp
        }
    }
    console.log(arr);
}



// let a=[1,2,3,4,5,6]
//print array odd numbers
// for(let i=0;i<=a.length;i++){
//     if (a[i]%2==0) {
//         a.splice(i,1)
//         i--
//     }
// }
// console.log(a);