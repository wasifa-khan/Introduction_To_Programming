function AddTwoNumbers(){
    console.log(8 + 5);
    
}
AddTwoNumbers();

function sum(a, b, c){
    return a + b + c;
}
let result = sum(5, 8 , 9);
console.log(result);

console.log(sum(7, 9, 13));
console.log(sum(56, 78, 4));

function Multiplication(i, j, k){
    return i * j * k;
}
console.log(Multiplication(6, 7,  9));


function StudentIntro(name){
    return "Hello my name is" + " " + name + " " + "and I am student of IP";
}
console.log(StudentIntro("Eshal"));
console.log(StudentIntro("Laiba"));
console.log(StudentIntro("Amna"));


function toCelsius(fahrenheit) {
    return "The conversion of  Celsius to Fahrenheit: " + (5/9) * (fahrenheit-32);
  }
console.log(toCelsius(77));
console.log(toCelsius(66));

function tofahrenheit(Celsius) {
    return "The conversion of Fahrenheit to Celsius: " + (9/5) * (Celsius + 32);
}
console.log(tofahrenheit(55));


//  let text = "My new car is : " + car
//  document.write(text)

function carName(){
    let car = "Volvo";
    return "My car name is: " + car;
}
document.write(carName());


function subtraction(s1, s2){
    return s1 - s2;
}
let substractResult = subtraction(45, 36);
document.write("<br>" + substractResult);