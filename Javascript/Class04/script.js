// let mode = "dark"
// if (mode === "green") {
//     document.write("black")
// }
// else{
//    document.write("The background is default") 
// }


// let hour = +prompt("Enter the hour");
// if(hour > 17){
//     console.log("Good Day");
    
// }
// else{
//     console.log("Good Evening");
    
// }

let number = +prompt("Enter the number:")
if(number%2 === 0){
   console.log("The number is even" , number);
   
}
else{
    console.log("The number is odd", number);
    
}

let a = 3;
let b = -2;

console.log(a > 0 && b < 0); // t && t

let x = 6;
let y = 3;
console.log(x < 10 && y > 1);  // 6 < 10 (t) && 3 > 1 (t)

let c = 13;
let d = -22;

console.log(c > 0 || d < 0);   // t || f  


let i = 6;
let j = 3;

console.log(i == 5 || j == 5) ; //f
console.log(i == 6 || j == 0) ; //t
console.log(i == 0 || j == 3) ; //t
console.log(i == 6 || j == 3); //t

console.log(!(i === j));
console.log(!(i > j));

let num1 = 12;
//console.log(++num1); 
// console.log(num1++);
// console.log(num1);
// console.log(--num1);
console.log(num1--);
console.log(num1);


let y1 = 5;

document.write("The value of y1 is:" , + (y1--));
document.write("The value of y1 is:" , + (y1--));


//Example
let score = +prompt("Enter Your Score");
let grade;
if(score > 80 && score < 100){
    grade = "A"
}
else if(score > 70 && score < 89){
    grade = "B"
}
else if(score > 60 && score < 69){
    grade = "C"
}
else if(score > 50 && score < 59){
    grade = "D"
}
else if(score > 0 && score < 49){
    grade = "F"
}

console.log(grade);











