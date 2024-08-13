
//   Level 1
let challenge = '30 Days Of JavaScript'
let challenge2= 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let challenge3 = 'You cannot end a sentence with because because because is a conjunction'

console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(3,21))
console.log(challenge.substring(0,3))
console.log(challenge.includes('Script'))
console.log(challenge.split(' '))
console.log(challenge.split())
console.log(challenge2.split(','))
console.log(challenge.replace('JavaScript','Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
console.log(challenge3.indexOf('because'))
console.log(challenge3.lastIndexOf('because'))
console.log(challenge3.search('because'))
console.log(challenge3.trim())
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('JavaScript'))
console.log(challenge.match(/a/gi))
console.log(challenge.repeat(2))
let s1 = '30 Days of',s2= 'JavaScript'
let string=''
console.log(string.concat(s1,' ',s2))

// Level 2

console.log("There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
console.log('\"Love is not patronizing and charity \isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so \don\'t just give money but reach out your hand instead.\"')
let str='10'
console.log(typeof str == typeof 10)
let strInt = +str
console.log(typeof(strInt) === typeof 10)
let float = 9.8
console.log(parseFloat(9.8) == 10)
console.log((parseInt(9.8) +1) == 10)
let word = 'python ',word2='jargon'
console.log(word.includes('on') , word2.includes('on'))
sen = 'I hope this course is not full of jargon.'
console.log(sen.includes('jargon'))
let rn = Math.random()
rn1 = rn * 256
rn1 = Math.floor(rn1)
console.log(rn1)

let ch = 'JavaScript'
console.log(ch[Math.floor([Math.random()*11])])

console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')
let len_ch3 = challenge3.length
let start = challenge3.lastIndexOf('because')
console.log(challenge3.substr(start,len_ch3))


//   Level 3
let wordd='love'
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love'
let lwr_sen = sentence.toLowerCase()
let c=0
let wrd = lwr_sen.split(' ')
for(i=0;i<wrd.length;i++){
    if( wordd === wrd[i]){
        c+=1
    }
}
console.log(`The word love comes ${c} times in the sentence.`)
let patt = /because/gi
console.log(challenge3.match(patt).length)

const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentences.replace(/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g,''))

let annual = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let num = /\d+/g
let arr = annual.match(num)
let MS = arr[0], AB = arr[1] , OC = arr[2]
let annual_sal = MS*12 + OC*12 + +AB
console.log(annual_sal)
console.log(`The Annual Salary is ${annual_sal} euro`)