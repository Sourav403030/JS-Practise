//--------------QUESTION 1------------------//

// 1. Grocery Bill Calculator
// Write a function calculateBill(items) that takes an array of item prices and returns the total bill including 5% GST.

//----------------SOLUTION----------------//

// function groceryBill(arr){
//     let totalPrice = 0;
//     let gst = 0.05;
//     for(let i = 0; i <= arr.length - 1; i++){
//         totalPrice += arr[i] + (arr[i] * gst);
//     }
//     console.log(totalPrice);
// }

// groceryBill([100,200,300,400,500]);

//--------------QUESTION 2------------------//

// 2. Username Formatter
//    -> Trims extra spaces
//    -> Converts to lowercase
//    -> Replaces spaces with underscores

//----------------SOLUTION----------------//

// function formatUsername(name){
//     let formatName = name.trim().toLowerCase().replace(/\s+/g, '_');
//     console.log(formatName);
// }

// formatUsername("    Hello    EVERYONE    ");

//--------------QUESTION 3------------------//

// 3. Student Grade System
// Given a score (0–100), return grade:
//    -> A: 90–100
//    -> B: 75–89
//    -> C: 50–74
//    -> D: 35–49
//    -> F: 0–34

//----------------SOLUTION----------------//

// function getGrade(marks){
//     if(marks >= 90 && marks <= 100){
//         console.log("A");
//     }
//     else if(marks >= 75 && marks <= 89){
//         console.log("B");
//     }
//     else if(marks >= 50 && marks <= 74){
//         console.log("C");
//     }
//     else if(marks >= 35 && marks <= 49){
//         console.log("D");
//     }
//     else if(marks <= 34){
//         console.log("F");
//     }
//     else{
//         console.log("Invalid Marks");
//     }
// }

// getGrade(89);

//-------------QUESTION 4------------------//

// 4. Count vowels in a string
//Write a function that counts how many vowels appear in a given string.

//----------------SOLUTION----------------//

// function vowelCounter(str){
//     str = str.toLowerCase();

//     let vowels = "aeiou";
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i])){
//             count++;
//         }
//     }
//     console.log(count);
// }

// vowelCounter("Sourav Sanjay")

//--------------QUESTION 5------------------//

// 5. Filter Even Numbers
// Create a function that accepts an array of numbers and returns a new array containing only the even numbers.

//----------------SOLUTION----------------//

// function filterEven(arr, arr2 = []){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             arr2.push(arr[i]);
//         }
//     }

//     console.log(arr2);
// }

// filterEven([1,5,2,7,3,2,7,9,4,2,5,7,8,3,1,5,3,2]);