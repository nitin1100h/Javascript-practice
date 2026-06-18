// Singleton(as a CONSTRUCTOR)

const tinderuser = new Object()

tinderuser.id="123ab";
tinderuser.name="Nitin";
tinderuser.isloggedin = "false";

// console.log(tinderuser);//output=empty object

const regularuser = {
  email: "sum@gmail.com",
  fullname:{
    userfullname:{
      firstname: "Nitin",
      lastname: "jha",
    }
  }
}// we can add as many nested object in an object as possible.

console.log(regularuser.fullname.userfullname.firstname);// to access it we will just use the . operator

/*********************************************************************** */
// object merge
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

const obj3= Object.assign({},obj1,obj2)

// const obj3= {...obj1 ,...obj2}// alternate way using spread operator.


console.log(obj3);//output - { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Finding keys of an object.

console.log(Object.keys(obj1));//output -[ '1', '2' ]

//here output will always be in a form of array

// wecan also ask for the values . 
console.log(obj1.hasOwnroperty("1"));




