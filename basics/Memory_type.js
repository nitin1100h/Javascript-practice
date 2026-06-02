/* There are two types of memory in js.
1.Stack : it is used for primitive dattypes
2.Heap : it is used for non_primitive datatypes.
*/

let myname="nitin" 

let name=myname
name="jay"

// so here we are changing in just a copy , making no change in the original value
console.log(myname)//Output : nitin
console.log(name)// Output : jay

// But in non-prinitive we will be getting changed value because the data is passed by reference making the change in the original value
