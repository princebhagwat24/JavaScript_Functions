/////////////////////////////////Array Operations (Sum, Product, Average)///////////////////////////////////
// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// let product = 1;
// numbers.forEach(num => {
//   sum += num;
//   product *= num;
// });
// let average = sum / numbers.length;
// console.log("Sum:", sum);
// console.log("Product:", product);
// console.log("Average:", average);


//////////////////////////////////////////////Calculate Power///////////////////////////////////////////////////
// let result = Math.pow(2, 3);
// console.log(result);


//////////////////////////////////////////Count Z Elements in Array//////////////////////////////////////////////
// let strings = ["apple", "banana", "zebra", "grape", "melon"];
// let stringsWithZ = strings.filter(str => str.includes('z'));
// let modifiedStrings = strings.map(str => str.slice(1, str.length - 1));
// console.log("Modified Strings:", modifiedStrings);
// console.log("Strings containing 'z':", stringsWithZ);


///////////////////////////////////////////Multiplication Table//////////////////////////////////////////////////
// let number = 5
// for (let i = 1; i <= 10; i++) {
//   console.log(`${number} x ${i} = ${number * i}`);
// }


////////////////////////////////////////////Swap Two Div Elements////////////////////////////////////////////////
// let div1 = "Div 1";
// let div2 = "Div 2";
// console.log("Before Swap:");
// console.log("div1:", div1);
// console.log("div2:", div2);
// let temp = div1;
// div1 = div2;
// div2 = temp;
// console.log("After Swap:");
// console.log("div1:", div1);
// console.log("div2:", div2);


/////////////////////////////////////Count Negative Numbers in Array////////////////////////////////////////////////
// let arr = [5, -3, 8, -1, 0, -7, 2, -4];
// let negativeCount = arr.filter(num => num < 0).length;
// console.log("Negative numbers count:", negativeCount);


// let strings = ["abc", "pqr", "xyz"];
// let oddCount = strings.filter(str => str.length % 2 !== 0).length;
// let evenCount = strings.filter(str => str.length % 2 === 0).length;
// console.log("Odd length strings:", oddCount);
// console.log("Even length strings:", evenCount);


////////////////////////////////////////Sort Array Alphabetically//////////////////////////////////////////////////
// let words = ["jkl", "def", "abc", "ghi"];
// let sortedArray = words.sort();
// console.log("Sorted Array:", sortedArray);


/////////////////////////////////////////////Find Longest Word/////////////////////////////////////////////////////
// // let words = ["unbelievable", "conversation", "fantastic", "wonderfull"];
// // let longestWord = words.reduce((longest, current) => (current.length > longest.length) ? current : longest, "");
// // console.log("Longest Word:", longestWord);


////////////////////////////////////////////Check If Two Dates Are Equal///////////////////////////////////////////
// let date1 = new Date("2025-01-31");
// let date2 = new Date("2025-01-31");
// let areEqual = date1.getTime() === date2.getTime();
// console.log("Are the dates equal?", areEqual);


///////////////////////////////////////////Calculate Date of Birth from Age////////////////////////////////////////
// function calculateDOB(age) {
//     let currentDate = new Date();
//     let birthYear = currentDate.getFullYear() - age;
//     let dob = new Date(currentDate.setFullYear(birthYear));
//     console.log("Date of Birth (approx):", dob.toISOString().split('T')[0]);
// }
// calculateDOB(25);  


////////////////////////////////////////////Reverse Words in String////////////////////////////////////////////////
// let sentence = prompt("Enter a sentence:");
// let reversedSentence = sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
// console.log("Reversed sentence:", reversedSentence);


/////////////////////////////////////////////Example usage of callback/////////////////////////////////////////////
// function greet(name, callback) {
//     console.log(`Hii, How are You? , ${name}!`);
//     callback();  // Callback function invocation
// }
// function farewell() {
//     console.log("Nice To Meet You!");
// }
// greet("John", farewell);  


//////////////////////////////////////////////////TimeOut Sec/////////////////////////////////////////////////////
// console.log("Starting timer...");
// setTimeout(() => {
//     console.log("This message appears after 2 seconds!");
// }, 2000);  // 2000ms = 2 seconds


//////////////////////////////////////////////Factorial Calculation///////////////////////////////////////////////
// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }
// console.log("Factorial of 5:", factorial(5));  // 120


//////////////////////////////////////////////Merge Sorted Arrays//////////////////////////////////////////////////
// function mergeSortedArrays(arr1, arr2) {
//     let mergedArray = [];
//     let i = 0, j = 0;

//     // Merge arrays until one of them is exhausted
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             mergedArray.push(arr1[i]);
//             i++;
//         } else {
//             mergedArray.push(arr2[j]);
//             j++;
//         }
//     }
//     // Add remaining elements from arr1
//     while (i < arr1.length) {
//         mergedArray.push(arr1[i]);
//         i++;
//     }
//     // Add remaining elements from arr2
//     while (j < arr2.length) {
//         mergedArray.push(arr2[j]);
//         j++;
//     }
//     return mergedArray;
// }
// let arr1 = [1, 3, 5];
// let arr2 = [2, 4, 6];
// let mergedArray = mergeSortedArrays(arr1, arr2);
// console.log("Merged Sorted Array:", mergedArray);

