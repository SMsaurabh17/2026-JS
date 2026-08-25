// strings
// string does stores value using index
// string can be denoted using '' "" and ``

// 1.
// number + number = number
// string + number = string
// number + string = string
// string + string = string

console.log(12 + 12)
console.log("om" + 12)
console.log(12 + "om")
console.log("om","" + "mishra")

//2.string concat
let a = "jatin"
let b = "shukla"
console.log(`my firstname is ${a} and lastname is ${b}`)
console.log('my firstname is',"" + a,'','and lastname is',"" + b)


//3.looping on string
// using for loop

let name = "Saurabh"
for(let i = 0; i <= name.length - 1; i++){
    console.log(name[i])
}

// using while loop
let j = name.length - 1
while(j >= 0){
    console.log(name[j])
    j--
}