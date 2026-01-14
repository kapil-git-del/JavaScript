console.log("Scope in Java Script") ;

console.log("In java scrit scope means accessibility or visibility") ;
console.log("scope are three types: ") ;
console.log("1.global scope\n2.function scope\n3.block scope") ;

console.log("global scope-->") ;
console.log("global scope variables are declarared outside block and function") ;

let a = 78 ;
console.log("a be a global scoped variable: " + a) ;

console.log("function scoped variable: ") ;
console.log("function scoped variables are declared inside only within function, they did not have scoped outside of function") ;

(function function_scope(){
    let b = 90 ;
    console.log("function scoped variables be: "+b) ;
})() ;

console.log("block scope variables-->") ;

{
    let c = 45;
    console.log("block scoped variable be: " + c) ;
}

