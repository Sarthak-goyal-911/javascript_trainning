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
const arr = []
for(let i=0;i<countries.length;i++){
    arr.push(countries[i])
}  
console.log(arr)
const sortedCountries = arr.sort()
console.log(sortedCountries)

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  const sortedWeb = webTechs.sort()
  console.log(sortedWeb)

  const land=[]
  for(let i=0;i<countries.length;i++){
    if(countries[i].includes('land')){
        land.push(countries[i])
    }
  }
  console.log(land)

  let highest_char = ''
  let max=0
  for(let i=0;i<countries.length;i++){
    let len = countries[i].length
    if(len>max){
        max = len
        highest_char = countries[i]
    }
  }
  console.log(highest_char)

  const country = []
  let m=4
  for(let i=0;i<countries.length;i++){
    let len = countries[i].length
    if(len == m){
        m=len
        country.push(countries[i])
    }
  }
  console.log(country)

  const rev_arr = arr.reverse()
  for(let i=0;i<rev_arr.length;i++){
    rev_arr[i] = rev_arr[i].toUpperCase()
  }
  console.log(rev_arr)