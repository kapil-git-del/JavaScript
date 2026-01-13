console.log("Data Types in Javascript") ;

console.log("JavaScript has two types of datatypes:");
console.log("Primitive data type.") ;
console.log("Non-Primitive data type.") ;

console.log("Primitive data types:");
console.log("Primitive data types are built-in data types in java script--") ;
console.log("There are Seven Primitive data types:") ;
console.log("1. number");
console.log("2. string");
console.log("3. boolean");
console.log("4. undefined");
console.log("5. null");
console.log("6. symbol") ;
console.log("7. big int") ;

let a1= 78 ;
console.log(typeof(a1)) ;
let a2 = "Kapil Chauhan" ;
console.log(typeof(a2)) ;
let a3 = true ;
console.log(typeof(a3)) ;


console.log("Non-Primitive data type in JavaScript") ;
console.log("Non-Primitive data type are user defined data types");
console.log("Non-Primitive data types in JavaScript is known to be object");
let obj = {
    name: "Kapil Kumar",
    location : "Uttar Pradesh",
    country:"India" 
}

for(let key in obj){
    let value = obj[key] ;
    console.log(key,":", value) ;
}

