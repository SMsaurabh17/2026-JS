// inheritance

// single inheritance
class student {
    constructor(fn,ln){
        this.name = fn
        this.surname = ln
    }

    display(){
        console.log(`This is ${this.name} ${this.surname}`)
    }
}

class teacher extends student {
    constructor(fn,ln,sal){
        super(fn,ln)
        this.salary = sal
    
    }

    displaySalary(){
        console.log(`This is ${this.name} ${this.surname}`)
    }
}

let lumina = new teacher('lumina','francis','30000')
lumina.displaySalary()

let saurabh = new student('saurabh','mahajan')
saurabh.display()

//Multilevel Inheritance : Multilevel inheritance means a class is derived from another derived class.
//GrandFather → Father → Son

class GrandFather{
    constructor(fn,ln){
        this.name = fn
        this.surname = ln
    }
    GrandFather(){
        console.log(`${this.name} ${this.surname}`)
    }
}

class Father extends GrandFather{
    constructor(fn,ln,fName){
        super(fn,ln)
        this.fatherName = fName
    }

    father(){
        console.log(`${this.fatherName} ${this.surname}`)
    }
}

class Son extends Father{
    constructor(fn,ln,fName,SName){
        super(fn,ln,fName)
        this.SonName = SName
    }
    Son(){
        console.log(`${this.SonName} ${this.surname}`)
    }
}

let Saurabh = new Son('Hariappa','Mahajan','Kailash','Saurabh')
Saurabh.Son()
Saurabh.father()
Saurabh.GrandFather()

//Hierarchical Inheritance : Hierarchical inheritance means multiple child classes inherit from the same parent.
//daughter and son can access fathers properties and methods

class kailash{
    constructor(ffn,ln){
        this.name = ffn
        this.surname = ln
    }
    displayFather(){
        console.log(`${this.name} and ${this.surname}`)
    }
}

class Pratiksha extends kailash{
    constructor(ffn,ln,Dname){
        super(ffn,ln)
        this.Gname = Dname
        this.surname = ln
    }
    displayDaughter(){
        console.log(`${this.Gname} ${this.name} ${this.surname}`)
    }
}

class Saurabhh extends kailash{
    constructor(ffn,ln,SName){
        super(ffn,ln,)
        this.Bname = SName
        this.surname = ln
    }
    displaySon(){
        console.log(`${this.Bname} ${this.name} ${this.surname}`)
    }
}

let ladka = new Saurabhh('kailash','Mahajan','Saurabh')
ladka.displaySon()

let ladki = new Pratiksha('kailash','mahajan','pratiksha')
ladki.displayDaughter()