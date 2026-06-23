/**********************************Basic syntax for "for" loop */
let ans=0;
for(let i=0;i<10;i++){
  ans=ans+i;
}
console.log(ans);

// Here we can get more ways to write for loop 
// 1. for of

const arr=[1,2,3,4,5]
for (const num of arr) {
  console.log(num);// it works same as for loop where we have to write less syntax.
}

// map
const map= new Map()
map.set("IN","India")
map.set("USA","United states of America")
map.set("FR","France")

for (const [i,j] of map) {//i=key,j=value
  console.log(i);// we will always be destructing map into key,value pair for their use
}

/*output - 
IN
USA
FR*/

//obj for of loop
// we will have to use different forms because it is not iteratable this way

