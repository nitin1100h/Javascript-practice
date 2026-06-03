const score = 100 

const balance = new Number(500)// it specifically takes input as number.
console.log(balance);

console.log(balance.toString());//number to string
console.log(balance.toString().length);//length of the string.

console.log(balance.toFixed(2));// shows the numbers after decimal.

const othernumber =23.8966

console.log(othernumber.toPrecision());//returns a string. input , number of values to be focused in the data.

const hundreds = 1000000
console.log(hundreds.toLocaleString());// adds commas according to the length of the values for easy counting.

/*               Maths                                    */

console.log(Math);
console.log(Math.abs());//modulus
console.log(Math.round(4.3));//output = 4, we will habe the options of ceil,floor values.
console.log(Math.min());//finding minimum in an array, we can also have max.

console.log(Math.random());//values b/w 0 and 1 , we can customise using basic maths by multiplication.
const min = 10
const max= 20

console.log(Math.random() * (max-min +1) + min);







