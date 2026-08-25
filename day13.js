//rest and spread operator

//rest, spread operator

//spread operator (VERY IMPORTANT)
//“Spread operator is used to spread the elements of an array or object into individual elements.”

let x = [10,20,30,40]
let y=[11,22,33,44]

let c = [...x , ...y]
console.log(c)

let d = [x,y]
console.log(d)                                   //[ [ 10, 20, 30, 40 ], [ 11, 22, 33, 44 ] ]

let info1 = {
    fn : 'saurabh',
    ln : 'mahajan',
}

let info2 = {
    age : 25,
    city : 'nagpur',
}

let e = {...info1, ...info2}
console.log(e)
console.log('---------------------------------------')

// Rest Operator (VERY IMPORTANT)
// “Rest operator is used to collect the remaining elements into an array.” 

let nums = [12345,11,22,33,44,55,66]
let [x1,...y1] = nums
console.log(x1)
console.log(y1)

names = ['xyz','abc','dipanshu','nitin','neel','tanish']
let [a1,a2,...a3] = names

console.log(a1)
console.log(a2)
console.log(a3)

let info = {
    location : "pune",
    marks : 90,
    name :"dipanshu",
    surname : "chawde"
}

let {location,marks,...rest} = info
console.log(rest)
console.log(location)