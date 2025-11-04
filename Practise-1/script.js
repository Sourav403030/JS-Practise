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