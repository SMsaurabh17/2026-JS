// conditional statement(if,if else,else if)
// if
if( 2 == 2){
    console.log("if statement")
}

// if else
    age = 15
if(age >= 18){
    console.log("eligible for driving license")
}
else{
    console.log("not eligible for driving license")
}

// else if 
marks = 56
if (marks > 90){
    console.log("Grade A")
}
else if(marks > 80){
    console.log("Grade B+")
}
else if(marks > 65){
    console.log("Grade B")
}
else if(marks > 50){
    console.log("Grade C")
}
else if(marks > 40){
    console.log("Grade D")
}
else{
    console.log("Fail")
}

// Nested if
ticket = 10
if(ticket > 0 && ticket <= 10){
    console.log("5% Discount")
}
if(ticket > 10 && ticket <= 20){
    console.log("10% Discount")
}
if(ticket > 20 && ticket <= 30){
    console.log("15% Discount")
}
if(ticket > 30 && ticket <= 40){
    console.log("20% Discount")
}
else{
    console.log("Wrong Input")
}