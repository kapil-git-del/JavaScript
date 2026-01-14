
let arr = [1,2,3,4,5] ;


// Traditional for loop
console.log("Traditional for loop")
for(let i=0; i<arr.length; i++){
    console.log(arr[i]) ;
}

// for in loop 
console.log("for in loop") ;
for(let i in arr){
    console.log(arr[i]) ;
}

// for each loop
console.log("forEach loop");
arr.forEach((e)=>{
    console.log(e) ;
})

// for of loop
console.log("for of loop") ;
for(let i of "Kapil Chauhan"){
    console.log(i) ;
}

// iterator 
for(let iterator of arr){
    console.log(iterator) ;
}


let newArr = [] ;

console.log("map function to copy array elements to new array") ;

newArr = arr.map(myFunction) ;

function myFunction(num){
    return num ;
}

console.log("newArr by forEach loop") ;
newArr.forEach((e)=>{
    console.log(e*e) ;
})


// while loop
console.log("while loop in javascript") ;

let i = 9;
while(i<12){
    console.log("i be: " + i) ;
    i++ ;
}

// do while loop
i = 9 ;
console.log("do while loop be: ") ;
do{
    console.log("i be: "+ i) ;
}
while(i<6) ;

