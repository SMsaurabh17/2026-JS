// OPERATOR
// 1.arithmatic(+,-,*,/,%)
a = 10 , b = 5 , c = 10 , d = "10"
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

//2. logical operator(<=,>=,==,!=,>,<,===,!==)
//(<=,>=,==,!=) ---------- this only checks value
// (===,!==) ------------- this checks value and type both
console.log(a > b)
console.log(a < b)
console.log(a >= c)
console.log(a <= b)
console.log(a == c)
console.log(a != b)
console.log(a != c)
console.log(a === d)
console.log(a !== d)


// 3.comparison
// AND(&&)(it works like multiplication) when both the condition gets satisfied then only
//  it gives true,otherwise false.
console.log(a > b && a > c)

// OR(||)(it works like addition)
console.log(a < b || a >= c )

// NOT(!)
console.log(!(a = c))

// 4.Ternary operator (it is used when there is only one condition)
10 > 5 ? console.log("Greater") : console.log("Smaller")