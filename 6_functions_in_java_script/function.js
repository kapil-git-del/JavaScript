console.log("Functions in javascript") ;

console.log("Types of functions in javascript") ;
console.log("1.normal function\n2.Arrow function ") ;
console.log("normal function further defined as\n1.function declaration\n2.function expression") ;
console.log("function declarations-->") ;

function function_declaration(){
    console.log("I am function declaration") ;
}
function_declaration() ;

console.log("function expressions-->") ;

let func =function (){
    console.log("I am function expression") ;
}
func() ;

console.log("functions declaration are hoisted") ;
console.log("function expressions are not hoisted in the same way as function declaration") ;
console.log("function expression are hoisted with var declaration") ;

console.log("Arrow function-->") ;

let arrow = ()=>{
    console.log("I am a arrow function") ;

}
arrow() ;
console.log("Arrow function are hoisted ") ;


console.log("There is a function know to be IIFE immediately invoked function expression") ;

(function (){
    console.log("I am IIFE function") ;
})() ;
