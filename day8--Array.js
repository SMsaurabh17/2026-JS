// Array Methods

// 1. calculate age
let year = [1991,1992,1993,1994,1995,1996,1997,1998,1999,2000]
let age = []
for(let i = 0; i <= year.length -1; i++){
    let a = 2026 - year[i]
    age.push(a)
}
console.log(age)

// 2.scores + 2
let numb = [11,12,13,14,15,16,17,18,19,20]
let newNumb = []
for(let j = 0; j <= numb.length - 1; j++){
    let b = numb[j] + 2
    newNumb.push(b)
}
console.log(newNumb)

// 3.number greater than 45
let numb2 = [12,25,34,95,75,82,11,1,10,56]
let greater = []
for(k = 0; k <= numb2.length - 1; k++){
    if(numb2[k] > 50){
        greater.push(numb2[k])
    }
}
console.log(greater)

// 4.adding each number of an  array
let g = 0
for(let l = 0; l <= numb.length - 1; l++){
    g = g + numb[l]
}
console.log(g)



