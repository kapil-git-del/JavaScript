// const hello = require("./module1") ;

// hello.hello() ;
// hello.ahello("Kapil") ;
// hello.ahello("Isskander") ;

// const {hello , ahello} = require("./module1") ; // common js modules
// hello() ;
// ahello("Kapil") ;
// ahello("Isskander") ;


// ES6 modules

export const hello = ()=>{
    console.log("Hello Harry") ;
}
export const ahello= (name)=>{
    console.log("Hello ", name) ;
}

const harry = ()=>{
    console.log("Hello Harry") ;
}

export default harry ;
