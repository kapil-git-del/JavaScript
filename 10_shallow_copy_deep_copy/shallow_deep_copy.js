console.log("Shallow copy and deep copy") ;

let originalObj = {
    name: "Ajay" ,
    address: {
        city:"Delhi"
    }
} ;

console.log("Original object be: ", originalObj) ;

// created a shallow copy of originalObj by Object.assign({}, originalObj) ;
console.log("creating a shallow copy by Object.assign({}, originaObj)") ;
let shallowCopy = Object.assign({}, originalObj) ;

console.log("shallow copy be: ",shallowCopy); 

console.log("creating shallow copy spread operator --> ") ;
let shallowCopy1 = {...originalObj} ;
console.log("shallow copy by spread operator be: ", shallowCopy1) ;

console.log("Making some changes in originalObj -->")
originalObj.address.city = "Mumbai" ;
console.log("originalObj after changes be: ", originalObj) ;

console.log("Checking shallow copy -->");
console.log("shallow copy be: ", shallowCopy) ;


console.log("Creating deep copyby JSON.stringify-->") ;

let deepCopy = JSON.stringify(originalObj) ;
console.log("Deep copy be: ", deepCopy) ;

console.log("Making some changes in orinalObj: ") ;
originalObj.address.city= "Bijnor" ;
console.log("originalObj after changes -->") ;
console.log("orinalObj be: ", originalObj) ;
console.log("Deep copy be: ", deepCopy) ;
console.log("Shallow copy be: ", shallowCopy) ;



