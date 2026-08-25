// Array and object Destructuring

// Array
let arr1 = [1,2,3,4,'Ram','ganesh']

let [a1,a2,a3,a4,a5,a6] = arr1
console.log(a5)
console.log(a3)

// 2.
let arr2 = [['nagpur','maharashtra'],['jaipur','rajasthan']]

let [[b1,b2],[b3,b4]] = arr2
console.log(b3)
console.log(b4)
console.log(b1)

// objects
let info = {
    firstname : "Saurabh",
    lastname : "Mahajan",
    Age : 26,
    city : 'Nagpur'
}

let {firstname: fn, lastname: ln, Age: ag, city: ct} = info
console.log(ct)
console.log(ag)
console.log(fn)

// object inside object
let info2 = {
    firstname : "Saurabh",
    lastname : "Mahajan",
    Age : 26,
    parent : {
        father : "kailash",
        mother : "neeta"
    }
}

let {firstname: f1, lastname: f2, Age: f3, parent:{father:f4 , mother:f5}} = info2
console.log(f1)
console.log(f4)
console.log(f5)

// 3.object inside array
let info3 = [
    {
        fn : 'Saurabh',
        ln : 'Mahajan'
    },
    {
        fn : 'Dinesh',
        ln : 'Sharma'
    }
]

let [{fn:a , ln:b},{fn:c ,ln:d}] = info3
console.log(c)
console.log(d)

// 4. array inside object
let info4 = {
    fn : 'Saurabh',
    ln : 'Mahajan',
    skills : ['JS','python','html']
}

let {fn: u, ln:v, skills: [w,x,y]} = info4
console.log(u)
console.log(x)
console.log(y)
