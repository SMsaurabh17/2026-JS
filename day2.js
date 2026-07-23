// function
// normal function without parameter and without returntype
function add(){
    a = 10 
    b = 20
    total = a + b
    console.log(total)
}
add()

// function with parameter and without return type
function sub(d,e){
    total = e - d
    console.log(total)
}
sub(10,20)

// function with parameter and with returntype
function multiplication(f,g){
    total = f * g
    return total
}
let h = multiplication(10,10)
console.log(h)