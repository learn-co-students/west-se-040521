const url = "http://localhost:3000/animals"

// the most common promise-chain pattern when handling fetches
// fetch(url)
// .then(response => response.json())
// .then(data => console.log(data));

// fetch() returns a Promise object
// let x = fetch(url)
// console.log(x)

// async functions can make order of execution harder to predict
// console.log("A");

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log("B"));

// console.log("C");

// older async functions (like setTimeout()) don't return Promises unless we wrap them in a Promise
fetch(url)
  .then(() => console.log("resolved"))
  .then(() => new Promise(resolve => setTimeout(resolve, 2000)))
  .then(() => console.log("after logging after resolved"));

// when .then invokes a callback, the argument it passes is the fullfillment of the previous Promise
//   fetch(url)
//   .then(() => {return "chicken"})
//   .then((data) => {
//     console.log(data)
//   })

// when a Promise settles as rejected, that value gets passed to the .catch callback
// fetch(url)
// .then(res => console.log(value))
// .catch((error) =>
//     console.log("Here's the error:", error)
// );

// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(e => console.error(e))

// this .then doesn't work properly because the console.log is invoked directly, not in a callback fn
// console.log("A");

// fetch(url).then(console.log("B"));

// console.log("C");

// this example can have several execution orders depending on how the Promises resolve (fulfilled or rejected) and how long it takes the fetch chain to resolve vs. the setTimeout
console.log("A");

fetch(url)
  .then((res) => {
    console.log("B");
    return res.json();
  })
  .then((data) => {
    console.log("C");
  })
  .catch(() => console.log("D"));

console.log("E");

setTimeout(() => console.log("F"), 200);