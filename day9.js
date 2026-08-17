// Array Methods

// Map
let year = [1993,1994,1995,1996,1997,1998,1999,2000]
let age = year.map(function(el,index,arr){
    return 2026 - el
})
console.log(age)

// filter
let numb = [12,78,90,67,45,34,25,22]
let greater = numb.filter(function(el,index,arr){
    return el > 45
})
console.log(greater)

// reduce
let numb2 = [11,22,33]
let Total = numb2.reduce(function(el,acc){
    return acc + el
})
console.log(Total)

// foreach
let state = ['himachal-pradesh','maharashtra','tamil-nadu','karnataka','madhya-pradesh'] 
let newN = state.forEach(function(el,index,arr){
    console.log(`welcome to ${el}`)
})


// findIndex

// find

// every

// some 