//00ps
class User{
    constructor(firstName,lastName,age,salary){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.salary=salary
    }
    //method
    fullName=()=>`the full name of the user is ${this.firstName} ${this.lastName}`
    annualSal=()=>`annualsal ${(this.salary*12)/100000}LPA`
}
let User1=new User('bruce','wayne',40,50000)
// let user2=new User()
// console.log(User1);
// console.table(User1)

console.log(User1.fullName());
console.log(User1.annualSal());