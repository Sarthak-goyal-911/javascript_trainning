//1.

const prompt = require('prompt-sync')();
function userIdGeneratedByUser(){
    let char = parseInt(prompt("Enter the length of id:"))
    let ids = parseInt(prompt("Enter the number of id's:"))

    let pattern = 'ASDFGHJKLQWERTYUIOPZXCVBNMasdfghjklqwertyuiopzxcvbnm0123456789'
    for(let j=0;j<ids;j++){
        let id=''
        for(let i=0;i<char;i++){
            let ri = Math.floor(Math.random()*pattern.length)
            id += pattern[ri]
        }
        console.log(id)
    }
}
let idGen = userIdGeneratedByUser();

//2.
function rgbColorGenerator(){
    let x = Math.floor(Math.random()*256)
    let y = Math.floor(Math.random()*256)
    let z = Math.floor(Math.random()*256)

    console.log(`rgb(${x},${y},${z})`)
}
let rgb = rgbColorGenerator()
//3.
function arrayOfHexaColors(){
    let letters = "0123456789ABCDEF"; 
    let hexarr=[]
    for(let j=0;j<5;j++){
        let hexCol='#'

        for(let i = 0 ; i<6;i++){
            hexCol += letters[Math.floor(Math.random()*letters.length)]
        }
        hexarr.push(hexCol)
    }
    
    console.log(hexarr)
}
let hexa = arrayOfHexaColors()

function shuffleArray(array){
    let r =[]
    for(let i=0;i<array.length;i++){
        r[i]=Math.floor(Math.random()*array.length)
    }
    console.log(r)
}
let array = [1,2,3,4,5,6,7,8,9]
let shuffle =shuffleArray(array)

function factorial(n){
let result =1
if(n==0){
    return result
}
for(let i=2;i<=n;i++){
    result *= i

}
return result
}
let calFact=console.log(factorial(4));

function isEmpty(){

}

function sum(...args){

}
