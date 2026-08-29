let infoo = [
    {
        firstName: "saurabh",
        lastName: "mahajan",
        age: 23,
        skills: ["html", "javascript"]
    },
    {
        firstName: "amol",
        lastName: "dani",
        age: 44,
        skills: ["sql", "css", "javascript"]
    },
    {
        firstName: "sharddha",
        lastName: "kulkarni",
        age: 23,
        skills: ["sql", "html", "python", "django"]
    }
    ,
    {
        firstName: "raj",
        lastName: "kumar",
        age: 32,
        skills: ["powerBI", "excel", "SQL", "django", "numpy"]
    }

]

// 1. using for loop
for(let i = 0; i <= infoo.length-1; i++){
    console.log(infoo[i])
}

// 2. using forEach
infoo.forEach(function(el,index,arr){
    console.log(el)
})

// 3. name of people above age 30
infoo.forEach(function(el,ind,arr){
    if(el.age > 30){
        console.log(`${el.firstName}`)
    }
})

// using filter method
let q1 = infoo.filter(function(el,ind,arr){
    return el.age > 30
})
.map(function(el,ind,arr){
    return el.firstName
})

console.log(q1)

// using filter method print firstname and lastname
let q2 = infoo.filter(function(el,arr,ind){
    return el.skills.includes('javascript')
})
.forEach(function(el,ind,arr){
    console.log(`${el.firstName} and ${el.lastName}`)
})

// program 1
// firstName:numberOfSkills
infoo.forEach(function(el,ind,arr){
    console.log(`${el.firstName} and skills: ${el.skills.length}`)
})

// program 2
// add Generative AI to all skills
infoo.forEach(function(el,ind,arr){
    console.log(el.skills.push('Generative Ai'))
})
console.log(infoo)
console.log(`-------------------------------------------`)

// program 3
// print name of all students python skill
infoo.forEach(function(el){
    if(el.skills.includes('python')){
        console.log(`${el.firstName}`)
    }
})

// program 4
// print name of all student with python skill and age < 30
infoo.forEach(function(el){
    if(el.skills.includes('python') && el.age < 30){
        console.log(`${el.firstName}  ${el.lastName}`)
    }
})

// program 5
// all students add a property language and value "english"
infoo.forEach(function(el,arr){
    el.language = 'English'
    el['country'] = 'India'
})
console.log(infoo)