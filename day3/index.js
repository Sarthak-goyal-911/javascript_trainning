// LEVEL 1

//1.
let firstName = 'Sarthak'
let lastName = 'Goyal'
let country = 'India'
let city = 'Kanpur'
let age =  23
let isMarried = false
let year = 2024

console.log(typeof firstName)
console.log(typeof lastNameName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)
//2.
console.log(typeof '10' === 10)
//3.
console.log(parseInt('9.8') === 10)

//4.
let a = 4>3
console.log(a)
let b = (4>=3)
console.log(b)


//7.
// const now = new Date()
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// Get the current time in milliseconds since January 1, 1970
// let now = new Date().getTime();
// let secondsElapsed = Math.floor(now / 1000);
// console.log(`The number of seconds elapsed since January 1, 1970, is ${secondsElapsed} seconds.`);

// 15.
const now = new Date()
const yearr = now.getFullYear() 
const month = now.getMonth() + 1 
const date = now.getDate() 
const hours = now.getHours() 
const minutes = now.getMinutes() 

console.log(`${yearr}-${month}-${date} ${hours}:${minutes}`)
console.log(`${yearr}-0${month}-${date} ${hours}:${minutes}`)



