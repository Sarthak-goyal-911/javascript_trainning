//--------------LEVEL 1-----------------/
//1.
let i=0

while(i<=5){
    console.log(i)
    i++
}
//2.
let a=10
while(a>=0){
    console.log(a)
    a--
}
//4.
for(i=0;i<=7;i++){
    console.log('#'.repeat(i))
}

for(i=0;i<=10;i++){
    console.log(`${i} x ${i} = ${i*i}`)
}
console.log(`i\t i^2\t i^3`)
for(i=0;i<=10;i++){
    console.log(`${i}\t ${i*i}\t ${i*i*i}`)
}

for(i<0;i<=100;i++){
    if(i%2 == 0){
        console.log(i)
    }
}

const arr= []
for(i=0;i<5;i++){
    arr[i]=Math.floor(Math.random()*10)
}
console.log(arr)