//objects
let user={
    name:"kural",
    id:10,
    role:"developer",
    experience:5,
    skills:["html","css","js"],
    address:{
        number:100,
        street:"10th cross",
        locality:"jp nager",
        city:"bangalore",
        pincode:560383
    }
}

console.log(user.address.city);
//or
console.log(user["address"]["city"]);

console.log(user.skills[1])


user.experience=6 //re-intialize
user.role="dev"

user.skills="js"//will be added to the object not present also

console.log(user["name"]);// to call this also--obj["key"]
console.log(user.role);// to call this also--obj.key

console.log(user);
console.table(user)


delete user.id //remove key

