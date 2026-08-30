// 1.object literal
let info = {
    fn : "Saurabh",
    ln : "Mahajan",
    age : 26,
    display : function(){
        console.log(`this is function 1`)
    }
}

console.log(info.fn)
console.log(info.ln)
info.display()

// class 
class infoo {
    fn
    ln
    display(){
        console.log('this is class literal')
    }
}

let saurabh = new infoo()
saurabh.fn = 'saurav'
saurabh.ln = 'mahajan'
saurabh.display()
console.log(saurabh)

// 3.class with constructor
class student{
    constructor(name,rollNo,age,sec){
        this.fullname = name
        this.RollNo = rollNo
        this.ag = age
        this.section = sec
    }
    display1(){
        console.log('this is class with constructor')
    }
}

let dinesh = new student('dinesh sharma',52,26,'B')
console.log(dinesh)
dinesh.display1()

// 4.class with set get method
class student2{
    setFirstName(fn){
        this.name = fn
    }
    setLastName(ln){
        this.surname = ln
    }
    setAge(ag){
        this.age = ag
    }
    display2(){
        console.log('this class is by using set method')
    }
}

let ganesh = new student2()
ganesh.setFirstName = 'ganesh'
ganesh.setLastName = 'tiwari'
ganesh.setAge = 26
ganesh.display2()
console.log(ganesh)

// 5.class with set and get keyword
// set as property using set and get word
class student3{
    set setname(fn){
        this.name = fn
    }
    set setsurname(ln){
        this.surname = ln
    }
    display(){
        console.log('This is using set & get keyword')
    }
    get setname(){
       return this.name
    }
    get setsurname(){
        return this.surname
    }
}

let farhaan = new student3()
farhaan.name = 'farhaan'
farhaan.surname = 'khan'
farhaan.display()

console.log(farhaan.setname)
console.log(farhaan.setsurname)
