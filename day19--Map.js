//map 
// In JavaScript, Map is a built-in collection object that stores key-value pairs.
// Unlike a normal object ({}), a Map:
//     - allows any datatype as a key
//     - maintains insertion order
//     - provides useful methods like set(), get(), has(), and delete()

// types of datatypes(number,string,boolean,array,object,map and set)

// how to define a Map
let a1 = new Map(
   [
     [1,'Admin'],
    [2,'Manager'],
    [3,'Accountant']
   ]
)
console.log(a1)

// 2nd way to define the Map
let a2 = new Map()
a2.set(1,'Mangaer')
a2.set(2,'Admin')
a2.set(3,'Accountant')

console.log(a2)

// map can have any type of keys : -
// number , string , array , boolean , object , user defined
let numb = 123
let str = "Saurabh"
let arr = [12,'arn']
let Boolean = true
let obj = {ln:'Mahajan'}
let a3 = new Map()
a3.set(numb,1)
a3.set(str,2)
a3.set(arr,3)
a3.set(Boolean,4)
a3.set(obj,4)
console.log(a3)

// create
let a4 = new Map()
a4.set('name','saurabh')
a4.set('age',24)
a4.set('city','nagpur')
a4.set('college','sb.jain')
console.log(a4)

// update / add (it can be done using . and [] notation both same as in object)
a4.set('state','Maharashtra')
console.log(a4)

// retrive (by using has() method it gives boolean value)
console.log(a4.has('age'))
console.log(a4.has('roll_no'))

// size
console.log(a4.size)

// delete
console.log(a4.delete('state'))
console.log(a4)

// clear
console.log(a1.clear)
console.log('--------------------------------')

// Methods
a4.forEach(function(k,v){
    console.log(v)
    console.log(k)
})

// keys
for(let k of a4.keys()){
    console.log(k)
}

// values
for(let v of a4.values()){
    console.log(v)
}

// enteries
for(let e of a4.entries()){
    console.log(e)
}

// get
console.log(a4.get('name'))