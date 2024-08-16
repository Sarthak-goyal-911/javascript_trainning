//-----------Level 1-------------------

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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  const arr = []
  const nums=[1,2,3,4,5,6,7,8,9,10]
  console.log(nums.length)
  console.log(nums[0],nums[nums.length/2],nums[nums.length-1])
 const mixedDatatype = [1,2,["Apple","Orange"],'Car',true,{country:'India',city: 'Kanpur',pincode:208002}]
 console.log(mixedDatatype)
 console.log(mixedDatatype.length)

 const isCompanies = ["Facebook","Microsoft","Apple","Google","IBM","Amazon","Oracle",]
 console.log(isCompanies)
 const comp = isCompanies.length-1
 const midd = comp/2
 console.log(isCompanies.length)
 console.log(isCompanies[0],isCompanies[midd],isCompanies[comp])
 for(i=0;i<comp;i++){
    console.log(isCompanies[i])
 }
 for(i=0;i<comp;i++){
    console.log(isCompanies[i].toUpperCase())
 }
 console.log(`${isCompanies.join(',')} are big it companies`)

 console.log(isCompanies.includes('W3villa'))
 for(i=0;i<comp;i++){
    
    if(isCompanies[i].includes('o') == true){
        console.log(isCompanies[i])
    }
 }

 console.log(isCompanies.sort())
 console.log(isCompanies.reverse())
 console.log(isCompanies.slice(3))
 console.log(isCompanies.slice(0,comp-3))
 console.log(isCompanies.slice(midd,midd+1))


 
 
