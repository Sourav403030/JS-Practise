// Challenge: Voting Eligibility — Level 2

// Requirements:
// 	1.	Ask the user how many people they want to check eligibility for.
// 	2.	Use a loop to take each person’s name and age as input.
// 	3.	For each person:
// 	•	If age >= 18 → print "<name> is eligible to vote."
// 	•	Else → print "<name> is not eligible to vote."
// 	4.	At the end, print a summary like:
// 	•	Total eligible: X
// 	•	Total not eligible: Y

// ------------------- SOLUTION ------------------ //

// let people = prompt("Enter the number of people");
// let canVote = 0;
// let cannotVote = 0;

// if(people === null){
//     console.log("User cancelled the prompt.");
// }

// else{
//     people = Number(people);
//     if(isNaN(people) || people <= 0){
//         console.log("Please enter a valid positive number.");
//     }
//     else{
//         for(let i = 1; i <= people; i++){
//             let name = prompt(`${i}. Enter the name of the person: `);
//             if(name === null){
//                 console.log("User cancelled the prompt.");
//                 break;
//             }
//             else if(name.trim() === ""){
//                 console.log("Name cannot be empty. Please enter a valid name.");
//                 i--;
//             }
//             else if(!isNaN(name)){
//                 console.log("Name cannot be a number. Please enter a valid name.");
//                 i--;
//             }
//             else{
//                 let age = prompt(`Enter the age of ${name}: `);
//                 if(age === null){
//                     console.log("User cancelled the prompt.");
//                     break;
//                 }
//                 else if(isNaN(age) || age.trim() === "" || Number(age) < 0){
//                     console.log("Age is invalid. Please enter a valid age.");
//                     i--;
//                 }
//                 else{
//                     age = Number(age);
//                     if(age < 18){
//                         console.log(`${name} is a minor.`);
//                         cannotVote++;
//                     }
//                     else if(age >= 18){
//                         console.log(`${name} is an adult.`);
//                         canVote++;
//                     }
//                     else{
//                         console.log("Invalid Age");
//                     }
//                 }
//             }
//         }
//     }
        
// }
// console.log(`Total number of people who can vote: ${canVote}`);
// console.log(`Total number of people who cannot vote: ${cannotVote}`);

//-------------------QUESTION 2------------------//

// Challenge: Multiplication Table — Level 2

// Requirements:
// 	1.	Ask the user how many tables they want to print (for example: 3 tables).
// 	2.	For each table, ask for the number (like 5, 7, or 9).
// 	3.	Use a loop to print the multiplication table of that number from × 1 to × 10.
// 	4.	After printing all tables, display how many tables were printed successfully.
// 	5.	Add input validation:
// 	•	If the user enters invalid or negative numbers, show a proper message and skip that table.
// 	•	If the user cancels a prompt, stop the process immediately.

// ------------------- SOLUTION ------------------ //

// let tables = prompt("Enter the number of tables you want to print:");
// if(tables === null){
//     console.log("User cancelled the prompt.");
// }

// else{
//     tables = Number(tables);
//     if(isNaN(tables) || tables <= 0){
//         console.log("Please enter a valid positive number.");
//     }
//     else{
//         for(let i = 1; i <= tables; i++){
//             let particularTable = prompt(`Enter the number for table ${i}:`);
//             if(particularTable === null){
//                 console.log("User cancelled the prompt.");
//                 break;
//             }
//             else if(isNaN(particularTable) || particularTable.trim() === "" || particularTable < 0){
//                 console.log("Please enter a valid non-negative number for the table.");
//                 i--;
//             }
//             else{
//                 particularTable = Number(particularTable);
//                 console.log(`Multiplication Table of ${particularTable}: `);
//                 for(let j = 1; j <= 10; j++){
//                     console.log(`${particularTable} x ${j} = ${particularTable * j}`);
//                 }
//             }
//         }
//     }
// }

//-------------------QUESTION 3------------------//
// Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.

// let numbers = 0;
// for(let i = 1; i <= 15; i++){
//     if(i > 8){
//         numbers++;
//     }
// }

// console.log(numbers);