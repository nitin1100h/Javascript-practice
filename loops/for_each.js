const coding = ["js","python", "c++"]

coding.forEach( function (i) {
  console.log(i);
} )

// another way 

coding.forEach( ()=> {
  // this is also one way 
} )

// this is the last way

function print(item){
  console.log(item);
}

coding.forEach(print)//it will also do the same work