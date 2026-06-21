// This helps you call a  function inside a different function..
// for example retruning a value of sum of  squared numbbers. the code is below.

function square(n){
  return n*n;
}

function sumofsquare(a,b){
  const val1=square(a);
  const val2=square(b);

  return val1+val2;
}

console.log(sumofsquare(1,2));

// Here we are calling the square function into the function of square of sum function . this is not called callback functions. here is how thhe loops generally run on every language

// The best exaample for callback is

function ssquare(n){
  return n*n;
}

function  ccube(n){
  return n*n*n;
}

function sumoffunctions(a,b,callback){
  const vval1=callback(a);
  const vval2=callback(b);
  return vval1+vval2;
}

console.log(sumoffunctions(2,5,ccube));