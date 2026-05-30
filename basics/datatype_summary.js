// primitive datatype(call by value)

// 7 categories : string , number, boolean , null , undefined , symbol , BigInt


const score=100;//number : int 
const icore=100.3;//number : float

const isloggedin = false;//boolean
const isthere=null//null
let useremail;//undefined

const id=Symbol('123');
const anotherid=Symbol('123');//symbol
// though theor input may be same but in symbol it is differ for eg.

console.log(id === anotherid)// output : false

const bignumber=5431864663154n;
console.log(typeof(bignumber));//Output : bigint

//  Non-primitive(call by reference)

// arrays , objects , functions

const heros = ["shaktiman","spiderman"]; //array

let obj={
  name:"nitin",
  age: 20,
} // object , it is denoted in curly brackets only.

// in js functions can also be saved in variables.
const func=function(){
  console.log("hello world");
}

//  the best way to know the type of datatype is using "TYPEOF"
//  the output of typeof function for non-primitive datatype is object . functioncs is known as object function.
