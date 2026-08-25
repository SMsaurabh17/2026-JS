// looping statement(for,while,do while)

// 1. for loop 
for(let i = 0; i <= 5; i++){
    console.log(i)
}

// table of 5 using For Loop
for(let i = 5; i <= 50; i+=5){
    console.log(i)
}

// reverse of table 5
for(let i = 50; i >= 5; i-=5){
    console.log(i)
}

// for loop using continue statement
// reverse of table 10
for(let k = 100; k >= 10; k-=10){
    if(k == 60){
        continue
    }
    console.log(k)
}

// for loop using break statement
for(let k = 90; k >= 9; k-=9){
    if(k == 45){
        break
    }
    console.log(k)
}

console.log("-------------------------------------------")

// 2.while loop
// table of 12 in reverse
let a = 120
while(a >= 12){
    console.log(a)
    a -= 12
}

// table of 4 using break statement
let b = 4 
while (b <= 40){
    if(b == 16){
        b = b + 4
        continue
    }
    console.log(b) 
    b += 4 
}

// table of 5 using break statement
let c = 5 
while (c <= 50){
    if(c == 40){
        break
    }
    console.log(c) 
    c += 5 
}

console.log("------------------------------------")

// 3. Do while
let d = 2
do{
    console.log(d)
    d += 2
}
while(d <= 20)

    // ..