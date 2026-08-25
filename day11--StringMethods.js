// methods of strings

// 1.toUppercase
let a = 'saurabh'
console.log(a.toUpperCase())

// 2.tolowercase
let b = "SAURABH"
console.log(b.toLowerCase())

// 3.includes
console.log(b.includes('h'))
console.log(b.includes('H'))

// 4.indexof
console.log(b.indexOf('H'))

// 5.startwith
console.log(b.startsWith('SAU'))
console.log(b.startsWith('RA'))

// 6.endswith
console.log(b.endsWith('SAU'))
console.log(b.endsWith('ABH'))

// 7.trim      removes the space in the string
let c = '  banglore  '
console.log(c.trim())

// 8.trimstart
let d = '   kashmir  jammu  '
console.log(d.trimStart())

// 9.trimend
console.log(d.trimEnd())

// 10.split
let e = "mahajansaurabh@gmail.com"
console.log(e.split('@'))

// 11.charAt
console.log(a.charAt(3))

// 12.charCodeAt
console.log(a.charCodeAt(3))

// 13.concat
let f = " 9665670995"
console.log(e.concat(f))

// 14.replace
console.log(e.replace('@','$'))

// 16.slice
let g = 'jasmine'
console.log(g.slice(1,3))
console.log(g.slice(1,-5))

// 17.padStart
let h = "5"
console.log(h.padStart(5,"0"))

// 18.padEnd
console.log(h.padEnd(5,"0"))

// 19.repeat
console.log("hi".repeat(3))