const obj = {
  js:"javascript",
  cpp:"c++",
  py:"python"
}

for (const i in obj) {
  console.log(obj[i]);//we will always get the key bydefault , we will have to take out the value like we did here.
  
}

// and in the same way we can also do the same for array also
// and maps is not iteratable in for in loops.