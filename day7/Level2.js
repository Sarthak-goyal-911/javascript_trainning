function solveLinEquation(){
    const a =2
    const b =2
    const c =2
    const x =2
    const y =2
    const eq = a*x + b*y + c
    console.log(eq)
}
let res = solveLinEquation()

function printArray(arr){
    for(let i =0;i<arr.length;i++){
        console.log(arr[i])
    }
    return arr
}
let arr=[1,2,3,4,5,6,6]
let print = printArray(arr)

//4.
function showDateTime(){
    const obj =  new Date();
    const date = obj.getDate()
    const mon = obj.getMonth()
    const year = obj.getFullYear()
    const hr = obj.getHours()
    const min = obj.getMinutes()

    console.log(`${date}/0${mon}/${year} ${hr}:0${min}`)
}
let show = showDateTime()

//5.
function swap(x,y){
   
    console.log(`x=${y}`)
    console.log(`y=${x}`)
}

let swa = swap(7,5)

function capitalizeArray(arr_w){
    for(let i=0;i<arr_w.length;i++){
       arr_w[i]= arr_w[i].toUpperCase()
    }
    return arr_w
}
const arr_w=['asdsga','fwhfa','fweeeef','rfef']
let capital = capitalizeArray(arr_w)
console.log(capital)

function addItem(item,arr_w){
    return arr_w.push(item)
}
let item ='gggg'
let updated_array = addItem(item,arr_w)
console.log(arr_w)

function removeItem(){
    
}