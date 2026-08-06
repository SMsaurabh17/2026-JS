// Array datatype
// array can store multiple types of datatypes
// array is a object that has property and methods

// property
arr = ["pune","mumbai","banglore","jaipur","delhi"]
console.log(arr.length)
console.log(typeof(arr))

// loop on an array
for(i = 0; i <= arr.length - 1; i++){
    console.log(arr[i])
}

// reverse
for(j = arr.length - 1; j >= 0; j--){
    console.log(arr[j])
}

console.log("--------------------------------------")

// methods on an array
// push
let city = ["Jaipur","Pune","Banglore"]
console.log(city.push("Chennai"))
console.log(city)

// unshift
console.log(city.unshift("Kerala"))
console.log(city)

// pop
console.log(city.pop())
console.log(city)

// shift
console.log(city.shift())
console.log(city)

// includes
console.log(city.includes("Pune"))
console.log(city.includes("Kerala"))
console.log(city)

// indexof
console.log(city.indexOf("Banglore"))

// at
console.log(city.at(1))

// sort
numb = [89,52,11,33,10,21,75,96]
console.log(numb.sort())

// reverse
console.log(numb.reverse())

// concat
let a = [1,2,3]
let b = [4,5,6]
console.log(a.concat(b))

// slice
let state = ["Andra Pradesh","Madhya Pradesh","Maharashtra","Karnataka","Tamil Nadu","Goa"]
// start-Index,End-Index where end index is not does not count
console.log(state.slice(0,2))
console.log(state.slice(1,3))
console.log(state.slice(1,5))
console.log(state.slice(1,-2))
console.log(state.slice(0,-4))
console.log(state.slice(-6,-3))

// splices
// startIndex,numberOfElementToBeDeleted
// console.log(state.splice(1,3))