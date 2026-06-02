const name="Nitin"
const repocount=50

console.log(name + repocount + "value");

// this process is generally used to concatinate the different variables.
// this is very much outdated.

// *******************************************************************************************

// this procedure is the best to use for these works known as backticks ``.

console.log(`hello my name is ${name} and my repocount is ${repocount}`);

// ********************************************************************************************

const device="Dell-i"

console.log(device[0]);// acessing the 0th position of the string.Output =D
console.log(device.length);//calculating length of the string. Output = 4
console.log(device.toUpperCase());//changes the copy of the string to upper value . output=DELL
console.log(device.charAt(3));//helps us find out the character at specific position . output="l"
console.log(device.indexOf('l'));//helps us find out the position of the character


/************************************************************************************************************ */

const newstring = device.substring(0,2)// this generally divides the string into two substring. it ranges from the starting points to no. of characters to be included.
console.log(newstring);// output = De.

const anotherstring = device.slice(-1,2)// this is same as substring but only difference is it can take negative values.
console.log(anotherstring);

const newone ="      email    "
console.log(newone);
console.log(newone.trim());// trims the unwanted space from the string.

const newtwo = "pneumonoultramicrosc%picsilicovalcanoconiosis"
console.log(newtwo.replace('%p','-'));//helps to replace words in the string.
console.log(newtwo.includes('mono'));//helps us find out is the given word present in our string or not??. output : true

/* how ro divide string into array */

console.log(device.split('-'));// it splits the string into different parts based on the sp[litter].










