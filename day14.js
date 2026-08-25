// object
// C U R D OPERATIONS

//CRUD OPERATION ON AN OBJECT CAN BE DONE USING DOT(.) & BRACKET [] NOTATION.
// 1. create
let info = {
    fn : 'saurabh',
    ln : 'mahajan',
    age : 26,
    skills : 'js'
}

// 2. add
info['city'] = 'nagpur'
console.log(info)

// 3. retrieve
console.log(info.age)
console.log(info['fn'])

// 4. update 
info.age = 25
console.log(info)

// 5. delete
delete info.city
console.log(info)
