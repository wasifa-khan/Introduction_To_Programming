//Question 1
// let city = prompt("Enter a city name:");
// if(city === "Karachi"){
//   document.write("Welcome to city of lights")
// }
// else{
//     document.write("You are not belonging to Karachi");
// }

//Question 2:
// let gender = prompt("Enter your gender");
// if(gender === "male"){
//     alert("Good Morning Sir.");
// }
// else if(gender === "female"){
//     alert("Good Morning Ma’am.");
// }
// else{
//     alert("Other");
// }

//Question 3
// let fuelInCar = prompt("Enter remaining Fuel in car"); //0.21
// if(fuelInCar <= 0.25){
//     alert("Please refill the fuel in your car")
// }
// else if(fuelInCar >= 0.25){
//     alert("Ready for the Trip")
// }

// let a = 4; // a = a + 1
// if(++a === 5){
// alert("given condition for variable a is true");
// }

// let b = 82;
// if(b++ === 83){
// alert("given condition for variable b is true");
// }

// let c = 12;
// if(c++ === 13) {
//   alert("condition 1 is true");
// }
// if(c === 13) {
//   alert("condition 2 is true");
// }
// if(++c < 14) {
//   alert("condition 3 is true");
// }
// if(c === 14) {
//   alert("condition 4 is true");
// }
// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost; // 22000
// if(totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// let number = +prompt("Enter the number");
// if(number%3 === 0){
//      alert("The number is divisible by 3", number)
// } else{
//     alert("The number is not divisible by 3", number)
// }

// let number1 = +prompt("Enter the number");
// if(number1%2 === 0){
//      alert("The number is even")
// } else{
//     alert("The number is odd")
// }


let secretNumber = 7;
let secretCode = +prompt("Guess the secret number.");
if(secretCode === secretNumber){ // 4 === 7
    alert("Bingo! Correct answer.")
}
else{
    alert("Close enough to the correct answer.")
}