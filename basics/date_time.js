let myDtae =new Date()
console.log(myDtae.toString());// date to string.
console.log(myDtae.toDateString());// specifc info only.

let mycreateddate = new Date(2023,0,23)//months starts from 0 in js.
console.log(mycreateddate.toDateString());

/* time stamps */
let time= Date.now()
console.log(time);
console.log(mycreateddate.getTime());

/* conversion to seconds from milliseconds */

console.log(Math.floor(Date.now()/1000));

/* we can get many customisation in extracting the customised value in input*/

console.log(myDtae.);// here we will get many options use according to your choice.

// we can use dates in string concatination

//  the widely used date syntax is 

myDtae.toLocaleString('default',{
  weekday : "narrow" // here we can customise it as our requirements.
});
