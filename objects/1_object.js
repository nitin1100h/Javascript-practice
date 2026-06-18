//object literals

const jsuser = {
  name: "Nitin",
  "full name": "Niin jha",
  age: 19,
  location: "kolkata",
  email: "nitinjha@google.com",
  isloggedin: false,
  lastlogin: ["mon","tues"]
}// Basic syntax for creating an object.

console.log(jsuser["email"]);//The inputs are all taken in string fromat so,while printing we will have to access it as a string.
// we can access data through dots functions also . "jsuser.email. but its not right all the time.
console.log(jsuser["full name"]);//here we will have to use square brackets.

/***************************************************************************************************** */
// use of symbols in objects.

const sym= Symbol("mykey1")
const nuser={
  [sym]: "mykey1"
}//input

console.log(nuser[sym]);//output


/******************************************************************************* */
// Changing any element
jsuser.email = "nitin@gemini.com"

// freeze any object. so that no one can change it.
// Object.freeze(jsuser)// after this position no element can be changed in the object.
console.log(jsuser);
console.log(nuser);

/************************************************************************* */
// we can add a function into a object also.

jsuser.greeting = function(){
  console.log("hello");
  
}

jsuser.greeting2 = function(){
  console.log(`Hello jsuser,${this.name}`);
  
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2());

/********************************************************************************************************** */


