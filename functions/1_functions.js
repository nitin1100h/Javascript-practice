//basic syntax for function

function saymyname(){
  console.log("hi");
  
}

function sum(num1,num2){
  console.log(num1+num2);
  
}

sum(3,4)//output-7 taking input as int
sum(3,"4")//output-34 , taking input as string

//next part is returning values from a function

function userloginmessage(username){
  return `${username} just logged in`
}

console.log(userloginmessage("nitin"))

/******************************************************************************************************** */
//Use of a rest operator.
function calculatecartprice(...num1){// taking many inputs on a same time
  return num1;
}

console.log(calculatecartprice(200,400,500));// it changes it into an array making it easy to solve.

// taking input into a function from an object.

const anyobj={
  username:"nitin",
  price:199
}

function handleobj(anyobj){
  console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
  
}

handleobj(anyobj)//output - username is nitin and price is 199.

// arrays in function
// return 2nd value of the array

const arr=[100,200,300,400];

function secondnumber(getarray){
  return getarray[1];
}
console.log(secondnumber(arr))//output-200
