// What is "this".......
// Answer - This generally telll us about the current context. what are we using  currently.

// for  e.g. - basic use of this.

const user={
  username: "nitin",
  price:999,

  welcommessage: function(){
    console.log(`${this.username} , welcome to the website `);
    console.log(this);
  }
}

user.welcommessage()

// output
/*nitin , welcome to the website , this is the welcome function working
{
  username: 'nitin',
  price: 999,
  welcommessage: [Function: welcommessage]
}*/

console.log(this)

// output -
// {} 
/* it returns empty object because there is nothing in the the scope of "this".*/