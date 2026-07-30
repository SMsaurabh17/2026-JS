// switch case
// 1.without break statement
let city = "pune"
switch(city){
    case "jaipur":
        console.log("Rajasthan")

    case "banglore":
        console.log("Karnataka")

    case "chennai":
        console.log("Tamil Nadu")

    case "pune":
        console.log("Maharashtra")

    default:
        console.log("Incorrect city")
}

//  2. with break statement and default
let city2 = "jaipur"
switch(city2){
    case "jaipur":
        console.log("Rajasthan")
        break

    case "banglore":
        console.log("Karnataka")
        break

    case "chennai":
        console.log("Tamil Nadu")
        break

    case "pune":
        console.log("Maharashtra")
        break

    default:
        console.log("Incorrect city")
}
console.log("----------------------------------------")


// 3.
let city3 = "jaipur"
switch(city3){
    case (city3 == "jaipur" || city3 == "Jaipur"):
        console.log("Rajasthan")
        break

    case (city3 == "banglore" || city3 == "Banglore"):
        console.log("Karnataka")
        break

    case(city3 == "chennai" || city3 == "Chennai"):
        console.log("Tamil Nadu")
        break

    case (city3 == "pune" || city3 == "Pune"):
        console.log("Maharashtra")
        break

    default:
        console.log("Incorrect city")
}

// 4. 
let city4 = "chennai"
isFlag = true
switch(isFlag){
    case (city3 == "jaipur" || city3 == "Jaipur"):
        console.log("Rajasthan")
        break

    case (city3 == "banglore" || city3 == "Banglore"):
        console.log("Karnataka")
        break

    case(city3 == "chennai" || city3 == "Chennai"):
        console.log("Tamil Nadu")
        break

    case (city3 == "pune" || city3 == "Pune"):
        console.log("Maharashtra")
        break

    default:
        console.log("Incorrect city")
}