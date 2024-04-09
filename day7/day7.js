let str = "java"
console.log(str.length);


// ***************************STRING METHODs****************************

console.log(str.charAt(0));

console.log(str.indexOf("j"));  //first occurance

console.log(str.lastIndexOf("a"));  //last occurance

console.log(str.indexOf("a",2));

console.log(str.lastIndexOf("a",4)); 

console.log(str.substring(0,3)); // str.substring(starting index,ending index)

var res = str.replace("a","ee")
console.log(res);

res=str.replaceAll("a","e")
console.log(res);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

var str2 ="regAn"
var c=0;
var res=str2.toLowerCase()
for (let i = 0; i < str2.length; i++) {
    if(res[i]=="a"){
        c++;
    }
    
}
console.log(c);

var str3="101"
var str4=""
for (let i = 0; i < str3.length; i++) {
//     var res2 = str3[i]+str3[i]
//  str4=res2+str4
   str4+=str3[i]+str3[i]
    
}
console.log(str4);
var str5=""
for (let i = str3.length-1; i >=0; i--) {
    //     var res2 = str3[i]+str3[i]
    //  str4=res2+str4
   
      str5+=str3[i]//+str3[i]
        
    }
    console.log(str5);

    if (str5==str3) {
        console.log("palindrome");
    }else{
        console.log("Not a polindrome");
    }