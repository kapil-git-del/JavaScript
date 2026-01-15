console.log("destructuring in ES6 in Java Script") ;

let arr = [3,5,8,9,12,14] ;
let[a, ,b , ...rest] = arr ;


console.log(a,b,rest) ;

let{e,f}= {e:1,f:2} ;
console.log(e,f) ;

// spread operator

let arr1 = [3,5,8] ;
let obj1 = { ...arr1} ;
console.log("obj1: ",obj1) ;

function sum(v1, v2, v3){
    return v1+v2+v3 ;
}
console.log("sum be: ",sum(...arr1) ) ;


let obj2 = {
    name: "Harry" ,
    company:"Company xyz" ,
    address : "XYZ"
}


console.log({ name:"John", company:"ABC", ...obj2}) ;


const {name="Kapil"} =obj2 ;
console.log("obj2 be: ", obj2) ;
console.log("obj2.name be: ",obj2.name) ;






