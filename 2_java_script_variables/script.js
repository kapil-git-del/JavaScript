console.log("Variables in Javascript") ;

let a = 5 ;
// let a blocked scoped variable
var b = 6 ;
// var is 
const c =7 ;

console.log("a before block: "+a) ;
console.log("b before block: "+b) ;
{
    let a = 7;
    var b = 7 ;
    console.log("a in block: "+a) ;
    console.log("b in block: "+b) ;
}
console.log("a after block: "+a) ;
console.log("b after block: "+b) ;

