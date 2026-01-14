console.log("array in javascript") ;

let marks_class = [91, 82, 63, 84, "false", "null"] ;
console.log("Array be: ");
console.log(marks_class) ;

console.log("Length of array be :" + marks_class.length) ;


console.log("Methods of array-->") ;

let num = [1,2,3,34,4] ;

console.log("array to string: ") ;
let b = num.toString() ;
console.log(b) ;

let c = num.join("and") ;
console.log(c , "type of c be: ", typeof(c)) ;


console.log("Array before pop: " , num) ;
num.pop() ;
console.log("Array after pop: ", num) ;

console.log("Array before push: ", num) ;
num.push(5) ;
console.log("Array after push: " , num) ;


console.log("Array before shift: ", num) ;
num.shift() ;
console.log("Array after shift be : " , num) ;

console.log("Array before unshift: ", num) ;
num.unshift(10) ,
console.log("Array after unshift: ", num) ;


