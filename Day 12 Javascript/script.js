//!Promises - A promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

//? states of a promise
//1 pending - initial state, neither fulfilled nor rejected.
//2 fulfilled - meaning that the operation completed successfully.
//3 rejected - meaning that the operation failed.

var data = fetch("https://jsonplaceholder.typicode.com/posts/1");

// console.log(data) //Promise {<pending>}

// async function getData() {
//     var response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

//     let data = await response.json()

//     console.log(data)
// }

// getData()

// let p1 = new Promise((resolve,reject) =>{
//     let name = 'Neel'
//     if(name === 'Neel'){
//         resolve('Promise resolved successfully')
//     }    else{
//         reject('Promise rejected')
//     }
// })

// console.log(p1)

function orderFood() {
  let myorder = new Promise(function (resolve, reject) {

    console.log("Your order is coming... ⏰");

    let orderststus = true;

    setTimeout(function () {
      if (orderststus) {
        console.log("delevery wale bhaiya aa gayee hai 😍");
        resolve()
      } else {
        reject()
      }
    }, 3000);
  });

  myorder.then(function()
{
    console.log("Now make a payment 💸");

    let paymentstatus = true;

    
      if (paymentstatus) {
        console.log("Payment successful ✅");
      } else {
        console.log("Payment failed ❌");
      }
   
})
.then(function()
{
    console.log("Enjoy your food 🍔");
})
.catch(function()
{
    console.log("Order Failed ❌");
    console.log("complain karo 😡")
})
.finally(function(){
    console.log("Thank you for visiting us 🙏");
});
}

orderFood();
