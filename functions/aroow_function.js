// function chai(){
//   console.log(this);
// }

// chai()we cannot use this in function .

// basic syntax of arrow function just changes function with arrow sign

const chai = ()=>{
  username:"Nitin",
  console.log(this);// output-{}
}

// so in normal function this is not usable but in arrow function it is usable.

const sum = (num1,nums2) => {
  return num1+nums2;
}

console.log(sum(3,4));//output - 7

// the above way is basic way to declare arrow function.

// now we will see implicit form.

//  where we will have to return in one line only

// for e.g.

const add = (num1,num2) => (num1+num2)

// and the explicit form is simple just weher we will have to write more than one line to return . there we will use parenthesis.

// Object returning in arrow function.

const obj = () => ({username:"nitin"})
console.log(obj());//output - { username: 'nitin' }

// use of arrow function in arrays can also be done.
