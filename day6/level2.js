let chars = 'ASDFGHJKLQWERTYUIOPZXCVBNMasdfghjklqwertyuiopzxcvbnm0123456789';
let arr = ''; 

for (let i = 0; i < 7; i++) {  
    let ri = Math.floor(Math.random() * chars.length);
    arr += chars[ri];  
}

console.log(arr); 

    let x = Math.floor(Math.random()*256)
    let y = Math.floor(Math.random()*256)
    let z = Math.floor(Math.random()*256)
    console.log(`rgb(${x},${y},${z})`)

    const countries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya'
      ]

    const new_arr = []
    for(let i=0;i<countries.length;i++){
        new_arr[i] = countries[i].toUpperCase();
    }
    const new_ = []
    for(let i=0;i<countries.length;i++){
        new_[i] = countries[i].length;
    }
    console.log(new_arr)
    console.log(new_)

const countryArrays = []

for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const countryArray = [country, country.slice(0,3).toUpperCase(), country.length];
    countryArrays.push(countryArray);
}

console.log(countryArrays);

const land = []
for(let i=0;i<countries.length;i++){
    if(countries[i].includes('land')){
        land.push(countries[i])
    }
}
console.log(land)
let max_len =''
let max=0
for(let i=0;i<countries.length;i++){
     const len = countries[i].length
     if(len>max){
        max=len
        max_len = countries[i]
     }
}
console.log(max_len)

let max_lenn =[]
let maxx=5
for(let i=0;i<countries.length;i++){
     const len = countries[i].length
     if(len == maxx){
        maxx=len
        max_lenn.push(countries[i])
     }
}
console.log(max_lenn)

