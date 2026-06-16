// const myArr= [0,2,3,4,5,"true","Nitin"]
const arr1=[1,2,3,4,5]
console.log(arr1[1]);// indexing starts from 0.

const heros = ["thoer","hulk"]

const arr2 = new Array(1,2,3,4 )

arr2.push(5)// to add the elements in the array
arr2.pop(3)// to remove last element

arr2.unshift(9)// add the specific element into the starting of the array by shifting every element. time consuming
arr2.shift()// removes the 1st element
console.log(arr2);

/***************************************************************************************************** */
// we can ask questions also.
console.log(arr2.includes(9));//out-false
console.log(arr2.includes(3))
// console.log(arr2.indexof(9))// asks index

const newArr = arr2.join()//changes array to string

// slice or splice

//slice
const arr = [1,2,3,4,5]

const result = arr.slice(1,4)

console.log(result) //slice does not changes the original array

//splice
const arr3 = [1,2,3,4,5]

arr3.splice(1,2)

console.log(arr3)// changes into the original array . removes the cutted part of the array.

/***************************************************************************************************************************** */
//merging two arrays

// arr1.push(arr2)
// console.log(arr1);//output - [ 1, 2, 3, 4, 5, [ 1, 2, 3, 4 ] ] . it stored array into array


const arr5 = arr1.concat(arr2)
console.log(arr5);//output - [
//   1, 2, 3, 4, 5,
//   1, 2, 3, 4
// ]. concatinated both the arrays.it return new array.

// one more good way to merge them is spread operator.

// we can use flat to solve the problem in which we are facing a array into a array .

/***************************************************************************************************************** */

// we can convert into a array from a different form like array,string etc.
console.log(Array.isArray("Nitin")) //output - false
console.log(Array.from("Nitin"));// transforms into a array

