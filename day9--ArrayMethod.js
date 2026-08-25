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

// reduce (return the total value of the array )
let numb2 = [11,22,33]
let Total = numb2.reduce(function(el,acc){
    return acc + el
},0)
console.log(Total)

// foreach (it does not return any value and works with each elements in the lists)
let state = ['himachal-pradesh','maharashtra','tamil-nadu','karnataka','madhya-pradesh'] 
let newN = state.forEach(function(el,index,arr){
    console.log(`welcome to ${el}`)
})

// findIndex (returns the first matching element in the array)
let index = numb.findIndex(function(el,arr){
    return el > 70
})
console.log(index)

// find (checks whether the given element is present in the list)
let findd = state.find(function(el,index,arr){
    return el === "tamil-nadu"
})
console.log(findd)

// every (checks whether all the elements in array are smaller than 20 and gives boolean value)
let everyy = numb.every(function(el,index,arr){
    return el < 20
})
console.log(everyy)

// some (checks whether all the elements in array are smaller than 20 and gives boolean value)
let somee = numb.some(function(el,index,arr){
    return el < 20
})
console.log(somee)