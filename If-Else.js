"use strict";
exports.__esModule = true;
var promptSync = require("prompt-sync");
var prompt = promptSync();
var numb1 = prompt("Enter 1st number:");
var numb2 = prompt("Enter 2nd number:");
var numb3 = prompt('Enter 3rd number:');
var number1 = parseInt(numb1);
var number2 = parseInt(numb2);
var number3 = parseInt(numb3);
if (number1 > number2 && number1 > number3) {
    console.log("Greatest number is:".concat(number1));
}
else if (number2 > number1 && number2 > number3) {
    console.log("Greates number is:".concat(number2));
}
else if (number3 > number1 && number3 > number2) {
    console.log("Greatest number is:".concat(number3));
}
// if(number1>number2){
//     if(number1>number2){
//         console.log(`Greatest number is:${number1}`);
//     }
//     else {
//         console.log(`Greates number is:${number2}`);
//     }
// }
// else if(number2>number1){
//     if(number2>number3){
//         console.log(`Greatest number is:${number2}`);
//     }
//     else{
//         console.log(`Greatest number is:${number3}`);
//     }
// }
// else if(number3>number1){
//     if(number3>number2){
//         console.log(`Greatest number is:${number3}`)
//     }
//     else{
//         console.log(`Greatest number is:${number1}`);
//     }
// }
