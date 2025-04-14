//CALLBACK


// function outerFun(cb){
//     console.log("I am outer function");
//     cb("Mahi")
// }



// function innerClbck(name){
//     console.log(`${name}`)
// }

// outerFun(innerClbck)


function test1(cb){
  return cb("fash")
}

function c(){
  return "ggg"
}

test1((name)=> ( console.log(name)))
const result  = test1(c)
console.log(result);
